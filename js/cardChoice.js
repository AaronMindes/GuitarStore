import {data} from "../js/data.js";

const titleGuitar = document.querySelector('.title-guitar');
const price = document.querySelector('.price');




console.log(data);

// let a = window.location.search.substring(1);
let a = window.location.search.replace("?", '')
console.log(a);

const test = data.find(e => e.id == a);

console.log(test);

titleGuitar.innerHTML = `${test.name}`;
price.innerHTML = `${test.price}`;

const imgUrl = document.getElementById('imgSrc').src = `..${test.imageUrl}`;
