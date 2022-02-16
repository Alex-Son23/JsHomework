//1
function ChessBoard(){
    let table = document.getElementsByTagName('table')[0]


    for (let y = 0; y < 9; y++){

        let tableString = document.createElement('tr')
        // чередую строки
        tableString.className = 'string_1'
        if ((y + 1) % 2 == 0){
            tableString.className = 'string_2'
        }
        // добавляю строку
        table.appendChild(tableString)
        


        // создаю столбцы
        for (let x = 0; x < 9   ; x++){

            let tableColumn = document.createElement('td'), letter

            // чередую столбцы
            tableColumn.className = 'column_1'
            if ((x + 1) % 2 == 0){
                tableColumn.className = 'column_2'
            }

            // делаю разметку
            if (y == 0 & x != 0){
                
                tableColumn.innerText = x
                tableColumn.className = ''

            } else if (y != 0 & x == 0){

                switch(y){
                    case 1: letter = `A`; break
                    case 2: letter = `B`; break
                    case 3: letter = `C`; break
                    case 4: letter = `D`; break
                    case 5: letter = `E`; break
                    case 6: letter = `F`; break
                    case 7: letter = `G`; break
                    case 8: letter = `H`; break
                }

                tableColumn.innerText = letter
                tableColumn.className = ''

            }

            // добавляю столбец
            tableString.appendChild(tableColumn)

        }
    }
}
ChessBoard()



//2

let apple = {
    id:122,
    productName: 'Яблоки',
    count: 5,
    price: 150
}

let orange = {
    id:432,
    productName: 'Апельсины',
    count: 10,
    price: 75
}

let pineapple = {
    id:652,
    productName: 'Ананасы',
    count: 2,
    price: 200
}
// let apple = {
//     count: 0,
//     price: 150
// }

// let orange = {
//     count: 0,
//     price: 75
// }

// let pineapple = {
//     count: 0,
//     price: 200
// }


var basketObj = {
    basket: [apple, orange, pineapple],
    showProducts: function() {
        for (prop in this.basket) {
            alert(prop + ": " + this.basket[prop]);
        }
    },
    sumOfProducts: function() {
        let sumOfProducts = 0;
        for (let num = 0; num < this.basket.length; num += 1){
            sumOfProducts += this.basket[num].count * this.basket[num].price;
        };
        return sumOfProducts;
    },
    numberOfProducts: function() {
        return this.basket.length
    }
};

let basketDiv = document.getElementsByClassName('basket')[0]

if (basketObj.sumOfProducts() > 0) {
    console.log('yeah')
    basketDiv.innerText = `В корзине: ${basketObj.numberOfProducts()} товаров на сумму ${basketObj.sumOfProducts()} рублей`
} else {
    console.log('nah')
    basketDiv.innerText = `Корзина пуста`
}




//3


let product = [apple, orange, pineapple]
let catalogDiv = document.getElementsByClassName('catalog')[0]

for (i = 0; i < product.length; i++){

    let productElem = document.createElement('div')
    
    productElem.className = 'product'
    productElem.innerHTML = `<h3>${product[i].productName}</h3><p>Цена: ${product[i].price}</p>`
    console.log(productElem)
    
    catalogDiv.appendChild(productElem)
}
