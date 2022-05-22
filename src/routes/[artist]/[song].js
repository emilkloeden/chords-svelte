import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function get({ params }) {
    const chordsDirectory = path.join(process.cwd(), "src", "chords");
    console.log(params)
    const { artist, song } = params;
    try {
        const fullPath = path.join(chordsDirectory, artist, `${song}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);
        const { content } = matterResult

        return {
            body: {
                artist,
                id: song,
                content,
                ...matterResult.data,
            }
        }
    } catch (e) {
        return {
            status: 404
        }
    }
}
