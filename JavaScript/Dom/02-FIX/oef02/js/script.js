/*
const $title = document.getElementsByTagName(`h1`);
const content = `BeCode The Beacon`;
$title.textContent(content);
*/

const $title = document.querySelector(`h1`);
const content = `The Crawling Dead`;
$title.textContent = content;
$title.setAttribute('class', 'shake');