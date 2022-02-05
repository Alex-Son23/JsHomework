
console.log('Work')

// 1

var a = 1, b = 1, c, d;
c = ++a; 
alert(c);           // 2
d = b++; 
alert(d);           // 1 
c = (2+ ++a); 
alert(c);           // 5
d = (2+ b++); 
alert(d);           // 4
alert(a);           // 3
alert(b);           // 3
// если оператор '++' находится после перменой, то он только изменяет её значение, но не возвращает изменённую переменную

// 2

var a = 2;
var x = 1 + (a *= 2); // a = a * 2
alert(x) //5

// 3

/*если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/

a = 5
b = -1

if (a >= 0 & b >= 0) alert(a-b);
else if (a < 0 & b > 0) alert(a*b);
else  alert(a+b);

// 4

/*
Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15.
*/
a = 6

switch(a){
    case 1: alert(1);break;
    case 2: alert(2);break;
    case 3: alert(3);break;
    case 4: alert(4);break;
    case 5: alert(5);break;
    case 6: alert(6);break;
    case 7: alert(7);break;
    case 8: alert(8);break;
    case 9: alert(9);break;
    case 10: alert(10);break;
    case 11: alert(11);break;
    case 12: alert(12);break;
    case 13: alert(13);break;
    case 14: alert(14);break;
    case 15: alert(15);break;
}

// 5

/*
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.
*/ 

function plus(first, second){
    return (first+second)
}

function minus(first, second){
    return (first-second)
}

function division(first, second){
    return (first/second)
}

function multiplication(first, second){
    return (first*second)
}


// 6

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function mathOperation(arg1, arg2, operation){
    let answer
    switch (operation) {
        case '+':
            answer = (arg1 + arg2)
            break;
        
        case '-':
            answer = (arg1 - arg2)
            break;
        
        case '/':
            answer = (arg1 / arg2)
            break;

        case '*':
            answer = (arg1 * arg2)
            break;

        default:
            break;
    }
    return answer
}

let answer = mathOperation(prompt(), prompt(), prompt())
console.log()
alert(answer)

// 7

alert(null === 0)

// 8

function power(val, pow){
    if (pow == 0) return 1;
    else return val * power(val, pow-1);
}

alert(power(2,6))
console.log(power(2,6))
