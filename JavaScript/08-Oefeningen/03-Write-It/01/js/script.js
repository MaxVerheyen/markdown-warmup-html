let films = ["Hotel Transylvania 3: Summer Vacation", "Don't Worry, He Won't Get Far on Foot", "Hollywood aan de Schelde", "A Prayer Before Dawn", "Incredibles 2", "Dogman", "Will Tura, Hoop Doet leven", "The Idol", "De Kleine Heks", "Den Skyldige", "McQueen"];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ol>`);
films.forEach(film => document.write(wrapWithTag(film, `li`)));
document.write(`</ol>`);