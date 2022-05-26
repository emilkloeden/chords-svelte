import fs from "fs"

export const handler = async () => {

    const chordsDirectory = `./netlify/functions/chords/`
    const artists = fs.readdirSync(chordsDirectory);
    const allSongs = artists.flatMap(artist => {
        const artistDirectory = `${chordsDirectory}/${artist}`
        const fileNames = fs.readdirSync(artistDirectory);
        return fileNames.map((fileName) => {
            const title = fileName.slice(0, -3);
            const path = `/${artist}/${title}`
            return {
                artist,
                title,
                path
            }
        });
    })

    allSongs.sort(({ path: a }, { path: b }) => {
        return a < b ? -1 : a > b ? 1 : 0;
    });


    return {
        statusCode: 200,
        body: JSON.stringify({
            allSongsData: allSongs
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }
}
