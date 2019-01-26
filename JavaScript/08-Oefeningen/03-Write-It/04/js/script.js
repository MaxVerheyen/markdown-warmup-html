let oscarWinners = [
    {
      actor: "Forest Whitaker",
      film: "The Last King of Scotland",
      age: 45
    }, {
      actor: "Daniel Day-Lewis",
      film: "There Will Be Blood",
      age: 50
    }, {
      actor: "Sean Penn",
      film: "Milk",
      age: 48
    }, {
      actor: "Jeff Bridges",
      film: "Crazy Heart",
      age: 60
    }, {
      actor: "Colin Firth",
      film: "The King's Speech",
      age: 50
    }, {
      actor: "Jean Dujardin",
      film: "The Artist",
      age: 39
    }, {
      actor: "Daniel Day-Lewis",
      film: "Lincoln",
      age: 55
    }, {
      actor: "Matthew McConaughey",
      film: "Dallas Buyers Club",
      age: 44
    }, {
      actor: "Eddie Redmayne",
      film: "The Theory of Everything",
      age: 33
    }, {
      actor: "Leonardo DiCaprio",
      film: "The Revenant",
      age: 41
    }
  ];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const parseTitle = oscarWinners => {
    const actorName = oscarWinners.actor;
    let words = actorName.split(' ');
    return words[1];
  };

const createList = oscarWinners => {
  return `<ul>${oscarWinners
    .map(actor => wrapWithTag(parseTitle(actor), `li`))
    .sort()
    .join(``)
  }</ul>`;
};

console.table(oscarWinners);
document.write(createList(oscarWinners));
console.table(oscarWinners);