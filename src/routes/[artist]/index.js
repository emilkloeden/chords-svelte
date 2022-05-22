import fs from "fs";
import path from "path";

const chordsDirectory = path.join(process.cwd(), "src", "chords");

export async function get({ params }) {
    console.log(params)
    const { artist } = params
    try {
        const songTitles = getSongsByArtist(artist)
        return {
            body: {
                artist,
                songTitles
            }
        }
    } catch (e) {
        return {
            status: 404
        }
    }
}

function getSongsByArtist(artist) {
    const artistDirectory = path.join(chordsDirectory, artist)
    const fileNames = fs.readdirSync(artistDirectory);
    return fileNames.map((fileName) => {
        const title = fileName.replace(/.md$/, "");
        console.log(`t: ${title}`)
        return title
    })
}