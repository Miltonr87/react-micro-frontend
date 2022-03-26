import faker from 'faker';

let products = '';

for (let i = 0; i < 3; i++) {
  products += `
    <div class="product">
      <div class="product-image">
        <img src="${faker.image.image()}" alt="">
      </div>
      <div class="product-info">
        <h3>${faker.commerce.productName()}</h3>
        <p>${faker.commerce.productDescription()}</p>
        <p>${faker.commerce.price()}</p>
      </div>
    </div>
  `;
}

console.log(products);
