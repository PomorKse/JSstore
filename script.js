class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = goods;
    this.allProducts = [];
    this._fetchProduct();
    this.render();
    this.total();
  }
  _fetchProduct(){
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }

  render(){
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.innerHTML += productObj.render();

    }
  }

  total(){
    let totalPrice = 0;
    this.goods.forEach(item => totalPrice+=item.price);
    return totalPrice;
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150"){
    this.title = product.title;
    this.id = product.id;
    this.img = product.img;
    this.price = product.price;
  }

  render(){
    return `<div class="goods-item">
    <img alt="some img" src="${this.img}">
    <h3>${item.title}</h3>
    <p>${item.price}</p>
    <button class="buy-btn">BUY</button>
    </div>`;
  }
}

// class Cart {
//   constructor(container = '.?'') {
//     this.container = container;
//     this.goods = goods;
//     this.render();
//     this.addProduct();
//     this.deleteProduct();
//   }
// }
//
// class CartItem {
//   constructor() {
//
//   }
// }

let list = new ProductsList();
