const changePageTitle = (title: string) => {
    window.document.title = title
    window.document.querySelector('meta[property="og:title"]')?.setAttribute("content", title)
}

const changeOgImage = (image: string) => {
    window.document.querySelector('meta[property="og:image"]')?.setAttribute("content", image)
}
const changeOgImageAlt = (imageAlt: string) => {
    window.document.querySelector('meta[property="og:image:alt"]')?.setAttribute("content", imageAlt)
}
const changeDescription = (desc: string) => {
    window.document.querySelector('meta[name="description"]')?.setAttribute("content", desc)
    window.document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc)
}
const changeUrl = (url: string) => {
    window.document.querySelector('meta[property="og:url"]')?.setAttribute("content", url)
}
const changeCanonical = (urlCanonical: string) => {
    window.document.querySelector('link[rel="canonical"]')?.setAttribute("href", urlCanonical)
}
export {
    changePageTitle,
    changeOgImage,
    changeDescription,
    changeUrl,
    changeCanonical,
    changeOgImageAlt
}