const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];
/*
const noSuplement = e => {
  result = e.price;
  return result;
};

const calculateNormaalTarief = e => {
  let normaal = e.price;
  normaal += 10.75;
  return normaal;
};

const calculateKortingsTarief = e => {
  let korting = e.price;
  korting += 9.75;
  return korting;
};

const calculateKinepolisStudentCard = e => {
  let student = e.price;
  student += 8.05;
  return student;
};

let array1 = fees.map(e => noSuplement(e));
let array2 = extras.map(e => calculateNormaalTarief(e));
let array3 = extras.map(e => calculateKortingsTarief(e));
let array4 = extras.map(e => calculateKinepolisStudentCard(e));

for (i = 0; i < array1.length; i++) {
  let price = array1[i];
  console.log("De prijs zonder supplement bedraagt "+price);
};

for (i = 0; i < array2.length; i++) {
  let price = array2[i];
  console.log("De prijs aan normaal tarief + suplement bedraagt "+price);
};

for (i = 0; i < array3.length; i++) {
  let price = array3[i];
  console.log("De prijs aan kortingstarief + suplement bedraagt "+price);
};

for (i = 0; i < array4.length; i++) {
  let price = array4[i];
  console.log("De prijs aan student card-tarief + suplement bedraagt "+price);
};
*/

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

/*
fees.forEach(fee => {
  extras.forEach(extra => console.log(fee.price, extra.price));
});
*/

document.write(`<ol>`);
fees.forEach(fee => {
  fees.forEach(fee => document.write(wrapWithTag("<p>De prijs voor "+fee.title+" zonder supplement bedraagt : "+fee.price+"</p>",`li`)));
  extras.forEach(extra => document.write(wrapWithTag("<p>De prijs voor "+fee.title+" met een "+extra.title+" bedraagt : "+(fee.price + extra.price)+"</p>",`li`)));
});
document.write(`<ol>`);

fees.forEach(fee => {
  fees.forEach(fee => console.log("<p>De prijs voor "+fee.title+" zonder supplement bedraagt : "+fee.price+"</p>"));
  extras.forEach(extra => console.log("<p>De prijs voor "+fee.title+" met een "+extra.title+" bedraagt : "+(fee.price + extra.price)+"</p>"));
});