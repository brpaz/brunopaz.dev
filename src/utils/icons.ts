import slugify from 'slugify'

export function getLanguageIconName(name: string) {
    return slugify(name.toLowerCase()) + ".svg"
}