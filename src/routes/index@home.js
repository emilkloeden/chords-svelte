import fs from "fs";
import path from "path";
import matter from "gray-matter";


const chordsDirectory = path.join(process.cwd(), "src", "chords");

export const get = () => {
	return {
		body: { allSongsData: getSortedSongsData() }
	}
}

function getSortedSongsData() {
	const artists = fs.readdirSync(chordsDirectory);
	const allSongsData = artists.flatMap(artist => {
		const artistDirectory = path.join(chordsDirectory, artist)
		const fileNames = fs.readdirSync(artistDirectory);
		return fileNames.map((fileName) => {
			const id = fileName.replace(/.md$/, "");
			const fullPath = path.join(artistDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const matterResult = matter(fileContents);

			return {
				id,
				...matterResult.data,
			};
		});
	})

	return allSongsData.sort(({ artist: artistA, title: titleA }, { artist: artistB, title: titleB }) => {
		const a = `${artistA}-${titleA}`
		const b = `${artistB}-${titleB}`
		return a < b ? -1 : a > b ? 1 : 0;
	});
}