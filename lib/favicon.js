export default function favicon(data_uri){
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = Array.from(document
            .getElementsByTagName('head')[0]
            .getElementsByTagName('link'))
            .find(elem=>elem.rel == 'icon');
    }
    link.href = data_uri;
}