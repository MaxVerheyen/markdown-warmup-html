/*
const writers = document.querySelectorAll(`episode-writer`);
writers.forEach($writer => console.count($writer));
*/

const writers = document.querySelectorAll(`.episode-writer`);
writers.forEach($writer => {
    console.log($writer.innerHTML);
    console.count($writer);
});