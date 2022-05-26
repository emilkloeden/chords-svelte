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
    const titles = fileNames.map(fileName => fileName.slice(0, -3))
    const paths = titles.map(title => `/${artist}/${title}`)
    return {
        statusCode: 200,
        body: JSON.stringify({
            artist,
            titles,
            paths
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }
}