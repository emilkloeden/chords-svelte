import path from "path"

export const get = async ({ params }) => {
    // console.log(params)
    const { artist } = params
    // Vite doesn't let us use variables as input to `glob` so we filter later :(
    const allChordFiles = import.meta.glob(`../../../chords/**/*.md`)
    const iterableChordFiles = Object.entries(allChordFiles)

    const allSongs = await Promise.all(
        iterableChordFiles.map(async ([
            relativePath, // file path
            resolver // fn: file contents in a Promise
        ]) => {
            const { metadata } = await resolver()
            const songPath = relativePath.slice(9, -3).replace("chords", "") // strip leading "../.." and trailing ".md"

            return {
                artist,
                meta: metadata,
                path: songPath
            }
        })
    )

    const filteredSongs = allSongs.filter(song => song.meta.artist === artist)

    const sortedSongs = filteredSongs.sort(({ artist: artistA, meta: propsA }, { artist: artistB, meta: propsB }) => {
        const { title: titleA } = propsA
        const { title: titleB } = propsB
        const a = `${artistA}-${titleA}`
        const b = `${artistB}-${titleB}`
        return a < b ? -1 : a > b ? 1 : 0;
    });

    return {
        body: sortedSongs,

    }
}