let films = ["Hotel Transylvania 3: Summer Vacation", "Don't Worry, He Won't Get Far on Foot", "Hollywood aan de Schelde", "A Prayer Before Dawn", "Incredibles 2", "Dogman", "Will Tura, Hoop Doet leven", "The Idol", "De Kleine Heks", "Den Skyldige", "McQueen"];
films.reverse();

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const parseTitle = films => {
    const lowerTitle = films.toLowerCase();
    const wrapped = wrapWithTag(lowerTitle, `li`);
    document.write(wrapped);
  };
  
document.write(`<ul>`);
films.forEach(film => parseTitle(film));
document.write(`</ul>`);