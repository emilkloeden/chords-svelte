import fs from "fs"

export const handler = async (event) => {
    let { artist } = event.queryStringParameters;
    if (!artist) {
        return {
            status: 404
        }
    }
    artist = artist.replace(".", "_")
    const artistDirectory = `./netlify/functions/chords/${artist}`
    const fileNames = fs.readdirSync(artistDirectory)
    const songs = fileNames.map(fileName => {
        const title = fileName.slice(0, -3);
        const path = `/${artist}/${title}`
        return {
            title,
            path
        }
    })
    return {
        statusCode: 200,
        body: JSON.stringify({
            songs
        }),
        headers: {
            'Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }
}