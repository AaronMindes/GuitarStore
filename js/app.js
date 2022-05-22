import {data} from "../js/data.js";
import {cardModel} from './CardModel.js';

// ---code ---

//Variables
const contentHolder = document.getElementById('guitar-list');
const searchInput = document.querySelector('.search-class');
const barMenu = document.querySelector('.bar-menu-fixed');
const headerSection = document.querySelector('.header-section');
const guitarCard = document.getElementById('guitar-card');
const liEvent = document.querySelectorAll("li");
console.log(liEvent)

//Functions
// const createCard = (obj) => {
//     const cardEl = document.createElement('div');  //<div></div>
//     cardEl.className = 'guitar-card';   //<div class="card"></div>
//     cardEl.innerHTML = `
//                         <div class="title-name-div">
//                             <p>${obj.brand} ${obj.name}</p>
//                         </div>
//                         <div class="image-div"><img src=${obj.imageUrl} alt=""></div>
//                         <div class="type-guitar"><p>${obj.style}</p></div>
//                     <div class="price-div">
//                         <p>${obj.price}</p>
//                     </div>`;      
//     return cardEl;
//   }
//Affiche les cartes
// const  renderCardList = async(dataArray) =>{
  
//     contentHolder.innerHTML ='';
//     dataArray.map(el => contentHolder.append(createCard(el)))
// }

//render
const  renderCardList = async(dataArray) =>{
    contentHolder.innerHTML ='';
    dataArray.map((item) => {
       let card = new cardModel(contentHolder,item.id,item.brand,item.name,item.imageUrl,item.style,item.price);
       card.renderToHtml();
    })
}

//search bar
const filterGuitar = (event)=>{
  const searchStr = event.target.value;
  //const guitarName = new String(name+brand);
  const filteredDataArray = data.filter(el => el.name.toLowerCase().includes(searchStr.toLowerCase()) || el.brand.toLowerCase().includes(searchStr.toLowerCase()));
  renderCardList(filteredDataArray);
}

//head bar menu affiche
const displayBarMenu = (e)=> {
 if(window.scrollY > (headerSection.clientHeight + 150)){
  barMenu.style.display = 'block';
 } else
 barMenu.style.display = 'none'
}

//event

window.addEventListener('scroll', displayBarMenu );
///event handler
searchInput.addEventListener("input", filterGuitar);

for (var i = 0; i < liEvent.length; i++) {
  liEvent[i].addEventListener("click",()=>{
    alert('Sorry ! Only the guitar menu work');
  });
}

//play function
renderCardList(data);
