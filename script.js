const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
  constructor(container = '.goods-list') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.total();
    this._getProducts()
        .then(data => {
          this.goods = [...data];
          this.render()
        })
  }

  _getProducts(){
    return fetch(`${API}/catalogData.json`)
    .then (result => result.json())
    .catch(error => {
      console.log(error);
    })
  }

  total(){
    return this.allProducts.reduce((accum, item) => accum += item.price, 0);
  }

  render(){
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }
}

class ProductItem {
  constructor(product, img="https://placehold.it/200x150"){
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  render(){
    return `<div class="goods-item" data-id="${this.id}">
    <img alt="some img" src="${this.img}">
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    <button class="buy-btn">BUY</button>
    </div>`
  }
}


class Cart {
  _getCart(){
    return fetch(`${API}/getBasket.json`)
    .then (result => result.json())
    .then(data => {
        const block = document.querySelector(".cart-hidden");
        block.innerHTML(`<p>${data}</p>`);
    })
    .catch(error => {
      console.log(error);
    })
  }

  removeGoods(){
  }
  changeGoods(){
  }
}

class elemCart {
  }

  let list = new ProductsList();
  let cart = new Cart();
