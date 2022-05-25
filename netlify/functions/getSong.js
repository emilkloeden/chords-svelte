import fs from "fs"
import path from "path"

export const handler = async (event, context) => {
    let { artist, title } = event.queryStringParameters;
    artist = artist.replace(".", "_")
    title = title.replace(".", "_")
    const filePath = `./netlify/functions/chords/${artist}/${title}.md`
    const files = fs.readdirSync("./netlify/functions/chords")
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Test successful",
            // path: path.resolve(process.cwd(), filePath),
            data: fs.readFileSync(filePath),
            files,
            context
        })
    }
}