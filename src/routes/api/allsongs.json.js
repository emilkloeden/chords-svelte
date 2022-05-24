export const get = async () => {
    const allChordFiles = import.meta.glob('../../chords/*/*.md')
    const iterableChordFiles = Object.entries(allChordFiles)

    const allSongs = await Promise.all(
        iterableChordFiles.map(async ([
            relativePath, // file path
            resolver // fn: file contents in a Promise
        ]) => {
            const { metadata } = await resolver()
            const songPath = relativePath.slice(6, -3).replace("chords", "") // strip leading "../.." and trailing ".md"

            return {
                meta: metadata,
                path: songPath
            }
        })
    )

    const sortedSongs = allSongs.sort(({ meta: propsA }, { meta: propsB }) => {
        const { artist: artistA, title: titleA } = propsA
        const { artist: artistB, title: titleB } = propsB
        const a = `${artistA}-${titleA}`
        const b = `${artistB}-${titleB}`
        return a < b ? -1 : a > b ? 1 : 0;
    });

    return {
        body: sortedSongs,
    }
}