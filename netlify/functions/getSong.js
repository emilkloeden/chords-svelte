import fs from "fs"
import matter from "gray-matter";

export const handler = async (event) => {
    let { artist, title } = event.queryStringParameters;
    if (!artist || !title) {
        return {
            status: 404
        }
    }
    artist = artist.replace(".", "_")
    title = title.replace(".", "_")
    const filePath = `./netlify/functions/chords/${artist}/${title}.md`
    const fileContents = fs.readFileSync(filePath, "utf8");

    const matterResult = matter(fileContents);
    const { content } = matterResult
    return {
        statusCode: 200,
        body: JSON.stringify({
            content,
            artist,
            title,
            ...matterResult.data
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }
}