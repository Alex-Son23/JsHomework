
// let apple = {
//     id:122,
//     productName: 'Яблоки',
//     count: 5,
//     price: 150
// }

// let orange = {
//     id:432,
//     productName: 'Апельсины',
//     count: 10,
//     price: 75
// }

// let pineapple = {
//     id:652,
//     productName: 'Ананасы',
//     count: 2,
//     price: 200
// }




var basketObj = {
    basket: [{
        id:122,
        productName: 'Яблоки',
        count: 1,
        price: 150
    },
    {
        id:432,
        productName: 'Апельсины',
        count: 1,
        price: 75
    }],

    showProducts: function() {
        for (prop in this.basket) {
            alert(prop + ": " + this.basket[prop]);
        }
    },

    sumOfProducts: function() {
        let sumOfProducts = 0;
        for (let i = 0; i < this.basket.length; i += 1){
            sumOfProducts += this.basket[i].count * this.basket[i].price;
        };
        return sumOfProducts;
    },
    
    numberOfProducts: function() {
        let number = 0;
        this.basket.forEach(function (product) {
            number += product.count;
        });
        return number;
    },

    showBasket: function() {
        let basketDiv = document.getElementsByClassName('basket')[0]
        basketDiv.innerHTML = '';
        let h2Basket = document.createElement('h2')
        

        if (this.sumOfProducts() > 0) {
            console.log('yeah')
            h2Basket.innerText = `В корзине: ${this.numberOfProducts()} товаров на сумму ${this.sumOfProducts()} рублей`
        } else {
            console.log('nah')
            h2Basket.innerText = `Корзина пуста`
        }

        basketDiv.appendChild(h2Basket)

        for (let i = 0 ; i < this.basket.length; i++){
            let product = document.createElement('div')
            product.className = 'basketElem'
            product.innerHTML = `<h3>${this.basket[i].productName}</h3><p class = "basketElemPrice">${this.basket[i].price * this.basket[i].count}<p>`
            basketDiv.appendChild(product)
        }
        
    }
};

function addToBascket(event) {
    var productId = parseInt(event.target.getAttribute('product_id'), 10);
    var filter = function (_product) {
        return _product.id === productId;
    };
    var _product = product.filter(filter)[0];
    var basketProduct = basketObj.basket.filter(filter)[0];
    if (basketProduct) {
        basketProduct.count++;
    } else {
        basketObj.basket.push(_product)
    }
    console.log(basketObj.basket)
    basketObj.showBasket()
}



basketObj.showBasket()



let product = [
    {
        id:122,
        productName: 'Яблоки',
        count: 1,
        price: 150
    }, 

    {
        id:432,
        productName: 'Апельсины',
        count: 1,
        price: 75
    },

    {
        id:652,
        productName: 'Ананасы',
        count: 1,
        price: 200
    }
]
let catalogDiv = document.getElementsByClassName('catalog')[0]

for (i = 0; i < product.length; i++){

    let productElem = document.createElement('div')
    let buttonBuy = document.createElement('button')
    buttonBuy.innerText = 'Купить'
    buttonBuy.className = 'buttonBuy'
    
    let _product = product[i];
    productElem.className = 'product'
    productElem.innerHTML = `<h3>${_product.productName}</h3><p>Цена: ${_product.price}</p>`
    console.log(productElem)
    
    catalogDiv.appendChild(productElem)
    productElem.appendChild(buttonBuy)
    buttonBuy.setAttribute('product_id', _product.id);

    buttonBuy.onclick = addToBascket
}



