/*
const episodes = document.querySelectorAll(`.episode-item`);

episodes.forEach($episode => {
  const viewers = $episode.querySelector(`.episode-viewers`).textContent;
  const $meta = querySelector(`.episode-meta`);

  $meta.innerHTML = `<a href="episode{$number}.mp4">Watch now</a>`;
});*/


const episodes = document.querySelectorAll(`.episode-item`);
let d = new Date();
let currentDay = d.getDate();
let currentMonth = d.getMonth();

episodes.forEach($episode => {
  const number = $episode.querySelector(`.episode-number`).textContent;
  const airDate = $episode.querySelector(`.episode-air`).textContent;
  const airDateElements = airDate.split(' ');
  let airDateDay = airDateElements[1].slice(0,-1);
  let airDateMonth = airDateElements[0];
  const months = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','October','November','December'];

  for(let i = 0; i < months.length; i++){
    if(airDateMonth == months[i]){
      airDateMonth = i;
    };
  };

  if(airDateMonth <= currentMonth && airDateDay < currentDay){
    const $meta = $episode.querySelector(`.episode-meta`);
    $meta.innerHTML = `<a href="episode${number}.mp4">Watch now</a>`;
    //$meta.innerHTML = `<a href="episode{$number}.mp4">Watch now</a>`;
  };
});