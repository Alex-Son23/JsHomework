// 1

let a = 0
while (a < 10) {
    console.log(a)
    a += 1
}

//2


let basket = [['Яблоко', 1, 143], ['Груши', 2, 154], ['Апельсины', 5, 293]]
// коризну я оформил как массив массивов, где в каждом массиве содержатся : [название, количество, цена за штуку(кг)]

function countBasketPrice(basket){
    let sum = 0
    for (let i = 0; i < basket.length; i+=1){
        sum += basket[i][1] * basket[i][2]
    }
    console.log(sum)
    return sum
}

countBasketPrice(basket)

//3 


let v = 0
for(;;){
    console.log(v)
    v += 1
    if (v == 10){
        break
    }
}

//4


for (i = 0; i <= 20; i += 1){
    console.log('x'.repeat(i))
}
