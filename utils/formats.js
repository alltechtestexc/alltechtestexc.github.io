import { title } from "process"

export const formats = {
    outer: (metadata, language) => {
        return `${metadata.title[language]}, ${metadata.year}`
    },
    title: (metadata, language) => {
        return `${metadata.title[language]}`
    },
    detailed: (metadata, language) => {
        return `${metadata.title[language]}, ${metadata.technique[language]}, ${metadata.year} (${metadata.height}x${metadata.width})`
    },
    details: (metadata, language) => {
        return `${metadata.technique[language]}, ${metadata.year} (${metadata.height}x${metadata.width})`
    }
}