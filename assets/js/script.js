
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container');
menuEmail.addEventListener('click', () => {
  toggleMenus('.desktop-menu');
});
menuHamIcon.addEventListener('click', () => {
  toggleMenus('.mobile-menu');
});
menuCarritoIcon.addEventListener('click', () => {
  toggleMenus('.my-order');
});

let oldMenu;
function toggleMenus(menu) {
  const newActiveMenus = document.querySelector(menu);

  if (!newActiveMenus.classList.contains('inactive')) {
    newActiveMenus.classList.add('inactive');
    return;
  };
  if (oldMenu) {
    oldMenu.classList.add('inactive');
  };

  oldMenu = newActiveMenus
  newActiveMenus.classList.remove('inactive');
};




function toggleMenus(menu) {
  const newActiveMenus = document.querySelector(menu)

  if (!newActiveMenus.classList.contains('inactive')) {
    newActiveMenus.classList.add('inactive')
    return

  } else if (oldMenu) {
    oldMenu.classList.add('inactive')
  }

  oldMenu = newActiveMenus
  newActiveMenus.classList.remove('inactive')

}


const productList = [];
productList.push({
  name: 'Albedo',
  price: 240,
  image: 'assets/products/Albedo.webp',
  info: 'Una de las creaciones del alquimista Rhinedottir, el misterioso Albedo es el Jefe Alquimista y Capitán del Equipo de Investigación de los Caballeros de Favonius a través de una recomendación de la aventurera Alice, con Sacarosa como su asistente.'
});
productList.push({
  name: 'Klee',
  price: 120,
  image: 'assets/products/Klee.webp',
  info: 'Es la hija de la intrépida y destructiva aventurera Alice, Klee se parece a su madre de muchas maneras, para consternación de los Caballeros de Favonius a quienes se le ha confiado. '
});
productList.push({
  name: 'Venti',
  price: 420,
  image: 'assets/products/Venti.webp',
  info: 'Es un bardo de espíritu libre y amante del vino en Mondstadt y el actual recipiente mortal de Barbatos, el Arconte Anemo'
});
productList.push({
  name: 'Razor',
  price: 260,
  image: 'assets/products/Razor.webp',
  info: 'Abandonado cuando era un bebé, Razor fue acogido por el Lobo del Norte, Andrius, y criado por su manada de lobos en el Reino de los Lobos. Después de un encuentro casual con Varka, el actual Gran Maestro de los Caballeros de Favonius y el Caballero de Boreas, poco a poco ha comenzado a integrarse nuevamente con los humanos. '
});
productList.push({
  name: 'Amber',
  price: 320,
  image: 'assets/products/Amber.webp',
  info: 'Amber es la única Exploradora que queda de los Caballeros de Favonius. Ella siempre está dispuesta a ayudar a los ciudadanos de Mondstadt, ya sea algo simple o quizás una tarea más desafiante. '
});
productList.push({
  name: 'Sayu',
  price: 220,
  image: 'assets/products/Sayu.webp',
  info: 'Es una ninja de Los Ocelos que lucha por crecer. Sayu cree que dormir puede ayudar a su crecimiento, por lo que prefiere usar sus técnicas ninja para esconderse y holgazanear. '

});

function productDetail(price, name, image, info) {
  toggleMenus('.product-detail');
  const dwsd = document.querySelector('.product-detail');
const productDetailin = `
<div class="product-detail-close" onclick="toggleMenus('.product-detail')">
<img src="assets/icons/icon_close.png" alt="close">
</div>
<img src="${image}"
  alt="${name}">

<div class="points">
  <li class="active"></li>
  <li></li>
  <li></li>
</div>
<div class="product-info-detail">
  <p>${price}</p>
  <p>${name}</p>
  <p>${info}</p>
  <button class="primary-button add-to-cart-button">
      <img src="assets/icons/add-to-card.png" alt="add to cart">
      Add to cart
  </button>
</div>`

//Ya se que el innerHTML genera muchas vulnerabilidades pero 
//tampoco es que esto se vaya a usar para algo real :v
dwsd.innerHTML = productDetailin
}

function renderProducts(products) {
  for (product of products) {
const cardsContainer = document.querySelector('.cards-container');

const card = `<div class="product-card">
<img src=${product.image} alt="${product.name}" onclick="productDetail('${product.price}', '${product.name}', '${product.image}', '${product.info}')">
<div class="product-info">
  <div>
    <p>${product.price}</p>
    <p>${product.name}</p>
  </div>
  <figure>
  <img src="assets/icons/add-to-card.png" alt="">

  </figure>
</div>
</div>`
//Ya se que el innerHTML genera muchas vulnerabilidades pero 
//tampoco es que esto se vaya a usar para algo real :v
cardsContainer.innerHTML += card

  }
}

renderProducts(productList);

/*
 Terrible lloremos 

function createEle(elements) {
  for (element of elements) {
    console.log(element)
    const elementSelec = document.createElement(element.tipe)
    const elementWithin = document.querySelector(element.within)
    elementSelec.classList.add(element.class);
    console.log(elementWithin)
    if (element.attribute) {
      elementSelec.setAttribute('src', element.attribute);
    }
    if (element.content) {
      elementSelec.innerText = element.content
    }

    elementWithin.appendChild(elementSelec)
  }
}

function renderProducts(products) {
  for (product of products) {

    const productElement = []
    productElement.push({
      within: '.cards-container',
      tipe: 'div',
      class: 'product-info',
      attribute: '',
      content: '',
    })
    productElement.push({
      within: '.product-info',
      tipe: 'img',
      name: product.name,
      attribute: product.image,
      content: '',
    })

    createEle(productElement)
  }
}

renderProducts(productList);
/** */