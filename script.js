const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

// let [{title, price}] = goods; деструктуризация массива?
//Не понимаю, где добавить значение по умолчанию.
//и как это должно работать

const renderGoodsItem = (item) => {
  return `<div class="goods-item">
  <h3>${item.title}</h3>
  <p>${item.price}</p>
  <button class="buy-btn">BUY</button>
  </div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  let newGoodsList = goodsList.join('');
  document.querySelector('.goods-list').innerHTML = newGoodsList;
}

renderGoodsList(goods);
