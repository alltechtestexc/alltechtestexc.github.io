
export const formats = {
    outer: (metadata, language) => {
        return `${metadata.title[language]}, ${metadata.year}`
    },
    detailed: (metadata, language) => {
        return `${metadata.title[language]}, ${metadata.technique[language]}, ${metadata.year} (${metadata.height}x${metadata.width})`
    }
}