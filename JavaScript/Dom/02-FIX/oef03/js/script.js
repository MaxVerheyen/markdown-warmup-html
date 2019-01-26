/*
const episodes = document.querySelectorAll(`.episode-item`);
episodes.forEach($episode => {
  $director = 
  if ($director.textContent === `Freddy Lamarr`) {
    $director.parentNode.remove();
  }
});
*/

const episodes = document.querySelectorAll(`.episode-writer`);
episodes.forEach($episode => {
  $director = $episode;
  if ($director.textContent !== `Freddy Lamarr`) {
    let parent = $director.parentNode;
    let li = parent.parentNode;
    li.remove();
  };
});
