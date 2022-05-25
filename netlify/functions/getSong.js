import fs from "fs"
import matter from "gray-matter";

export const handler = async (event, context) => {
    let { artist, title } = event.queryStringParameters;
    artist = artist.replace(".", "_")
    title = title.replace(".", "_")
    const filePath = `./netlify/functions/chords/${artist}/${title}.md`
    const fileContents = fs.readFileSync(filePath, "utf8");

    const matterResult = matter(fileContents);
    const { content } = matterResult
    return {
        statusCode: 200,
        body: JSON.stringify({
            content
        })
    }
}