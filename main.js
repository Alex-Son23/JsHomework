//1

let number = prompt() 
function number_to_object(number){
    let numberObject = {}, n = 0, property
    if (number < 1000){
        while (n < 3){
            switch(n){
                case 0: property = `еденицы`; break
                case 1: property = `десятки`; break
                case 2: property = `сотни`; break
            }
            numberObject[property] = number % 10 
            number = (number - number % 10) / 10
            n+=1
        }
        return numberObject
    } else{
        return numberObject
    }
    
}


let obj = number_to_object(number)


for (var prop in obj) {
    alert(prop + ": " + obj[prop]);
}




//2

// в этом задании в качестве продуктов я использовал отдельные объекты со свойствами
// count(количество) и price(цена), я считаю, что это не самый валидный метод решения этого задания, поэтому прошу помощи  

let apple = {
    count: 5,
    price: 150
}

let orange = {
    count: 10,
    price: 75
}

let pineapple = {
    count: 2,
    price: 200
}

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
    }
};


console.log(basketObj.sumOfProducts())


