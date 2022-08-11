function render() {
    axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    })
        .then(function (response) {
            const data = response.data.content
            for (let i = 0; i < data.length; i++) {
                let productData = data[i]
                console.log(productData.name);
            }
        })
}
render()

var product = []
function getProductByID() {
    axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=4',
        method: 'GET',
        responseType: "json"
    }).then((res) => {
        var product = res.data.content;
        console.log(product);
        console.log(res);
        renderTableProduct(product)
        showSize(product.size)
        products = res.data.content.relatedProducts
        renderTableRelatedProduct();
    }).catch((err) => {
        console.log(err);
    })
}
getProductByID()




//renderTable Product
function renderTableProduct(product) {
    let html = "";
    html = `
    <div class="container">
            <div class='row'>
            <div class="left col-4">
            <img src="${product.image}" >
       </div>

       <div class="right col-8">
       <h3 class="productName">${product.name}</h3>
       <p class="description">${product.description}</p>
       <p class="available">Available size</p>
       <div class="size">
           <p class="available">Available</p>
           <p class="size"></p>
       
       </div>
       <p class="price">${product.price}$</p>
       <div class="quantity">
               <button class="plus"><span><i class="fa fa-plus"></i></span></button>

               <span class="text">1</span>
               <button class="minus"><span><i class="fa fa-minus"></i></span></button>
       </div>
       <button class="btn-add"><span>Add to cart</span></button>
       </div>
           

            </div>
       </div>
    `;
    document.querySelector('#showInfo').innerHTML = html
}
function showSize(productSize) {
    let size = '';
    for (let value of productSize) {
        size += `<button class="btn-size"><span>${value}</span></button>`
    }
    document.querySelector('.size').innerHTML = size;
}

function renderTableRelatedProduct() {
    let htmls = '';
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        htmls += `
        <div class='col-lg-4'>
        <div class="product-card">
        <div class="card">
          <img class="img-fluid" src="${product.image}" alt="">
          <div class="card-body">
            <div class="content">
            <h4 class="name">${product.name}</h4>
            <button class="short-description">short description...</button>
            <p class="des d-none">${product.shortDescription}</p>
            </div>
            <div class="btn-bottom">
              <button class="col-lg-6 btn-buy-now"><span>Buy now</span></button>
              <button class="col-lg-6 btn-price"><span>${product.price}$</span></button>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div class='col-lg-4'>
        <div class="product-card">
        <div class="card">
          <img class="img-fluid" src="${product.image}" alt="">
          <div class="card-body">
            <div class="content">
            <h4 class="name">${product.name}</h4>
            <button class="short-description">short description...</button>
            <p class="des d-none">${product.shortDescription}</p>
            </div>
            <div class="btn-bottom">
              <button class="col-6 btn-buy-now"><span>Buy now</span></button>
              <button class="col-6 btn-price"><span>${product.price}$</span></button>
            </div>
          </div>
        </div>
      </div>
        </div>
        `
    }
    document.querySelector('.show-relateProduct').innerHTML = htmls
}