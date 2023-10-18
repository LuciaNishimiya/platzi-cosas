
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

let productList 
const API = 'https://api.escuelajs.co/api/v1';

//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
async function fetchData(urlApi) { //siempre async antes de function
    const response = await fetch(urlApi); //hacemos uso del fetch()
    const data = await response.json(); //estructura de los datos transformandolos en json
    return data; //retorna la información de la API que estamos solicitando
}

//también se puede colocar la palabra async antes del argumento y se usa arrow function
const anotherFunction = async (urlApi) => {
    //En try estará todo lo que queremos que suceda con la lógica de la aplicación
    try{
        const productss = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${productss[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
productList = productss
        console.log(productss);
        console.log(product.title);
        console.log(category.name);
        renderProducts(productList);
    } catch(error) { //Atraparemos un error en caso de que haya uno
        console.error(error);
    }
}

anotherFunction(API); //se hace el llamado





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
dwsd.innerHTML = productDetailin
}

function renderProducts(products) {
  for (product of products) {
const cardsContainer = document.querySelector('.cards-container');

const card = `<div class="product-card">
<img src=${product.images} alt="${product.title}" onclick="productDetail('${product.price}', '${product.title}', '${product.images}', '${product.description}')">
<div class="product-info">
  <div>
    <p>${product.price}</p>
    <p>${product.title}</p>
  </div>
  <figure>
  <img src="assets/icons/add-to-card.png" alt="">

  </figure>
</div>
</div>`
cardsContainer.innerHTML += card

  }
}



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