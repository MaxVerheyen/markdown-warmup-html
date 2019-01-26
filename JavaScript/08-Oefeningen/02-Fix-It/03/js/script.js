const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

let reverse = tvshows.reverse();

document.write(`<ol>`);
for (let i = 0; i < reverse.length; i++) {
  document.write(`<li>${reverse[i]}</li>`);
}
document.write(`</ol>`);
