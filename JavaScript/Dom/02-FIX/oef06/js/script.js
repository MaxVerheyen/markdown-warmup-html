/*
const episodes = document.querySelectorAll(`.episode-item`);

sortEpisodeByTitle = ($a, $b) => {
  const titleA = ;
  const titleB = ;
  if(titleA < titleB){
    return -1;
  }
  if(titleA > titleB){
    return 1;
  }
  return 0;
};

episodes.sort(sortEpisodeByTitle);

episodes.forEach($ep => console.log($ep.querySelector(`.episode-title`).textContent.toLowerCase().slice(1)));
*/

let array = [];

episodes.forEach($ep => array.push($ep.querySelector(`.episode-title`).textContent.toLowerCase().slice(1)));

array.sort();
array.forEach(e => console.log(e));