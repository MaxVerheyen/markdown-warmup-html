/*
const viewers = document.querySelectorAll(`.episode-viewers`);

let total = 0;
viewers.forEach($viewerAmount => {
    const number = parseInt($viewerAmount);
    total = number;
});

console.log(`Er keken in totaal ${total} miljoen personen`);
*/

const viewers = document.querySelectorAll(`.episode-viewers`);
let total = 0;

viewers.forEach($viewerAmount => {
    let number = $viewerAmount.innerHTML.replace(/\D/g,'');
    total += Number(number);
});

console.log(`Er keken in totaal ${total} miljoen personen`);

//Kan je het fixen zonder forEach te gebruiken? (met onder andere map() )


let viewers2 = Array.from(document.getElementsByClassName('episode-viewers'));
let total2 = 0;

viewers2 = viewers2.map(x => total2 += Number(x.innerHTML.replace(/\D/g,'')));
total2 = viewers2[viewers2.length-1];

console.log(`Er keken in totaal ${total2} miljoen mensen`);