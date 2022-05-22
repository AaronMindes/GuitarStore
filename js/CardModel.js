export class cardModel {
    constructor(_parent, _id, _brand, _name, _imageUrl, _style, _price) {
        this.parent = _parent;
        this.id = _id;
        this.brand = _brand;
        this.name = _name;
        this.imageUrl = _imageUrl;
        this.style = _style;
        this.price = _price; 
    }

    renderToHtml() {
        const cardEl = document.createElement('div');  //<div></div>
        cardEl.className = 'guitar-card';   //<div class="card"></div>
        this.parent.appendChild(cardEl);
        cardEl.innerHTML = `
        <a href="./html/cardChoice.html?${this.id}">
                        <div class="title-name-div">
                            <p>${this.brand} ${this.name}</p>
                        </div>
                        <div class="image-div"><img src=.${this.imageUrl} alt=""></div>
                        <div class="type-guitar"><p>${this.style}</p></div>
                    <div class="price-div">
                        <p>${this.price}</p>
                    </div>
        </a>            
                    `;
                        
        return cardEl;
    }
}