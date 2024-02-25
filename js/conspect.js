// способы задания переменных:
// var name = "Ivan"; устаревший формат задания переменной
let number = 7; // переменная может когда то поменяться
const pi = 3.14; // переменная задается константной, не меняется

let leftBorderWidth = 200;

//типы данных в js
// number
// string - "", '', ``
//true/false - буллиновый(логический) тип данных
//null
//undefined
// let obj = { 
//   name: 'apple',
//   color: 'green',
//   weight: 200
// }
//Symbol

console.log(number); //вывод в консаоль разработчика информации
confirm("вам есть 18?"); //модальное окно с ОК и Отменой

// let answer = prompt("Вам есть 18?", "");
console.log(answer);

//операторы в JS
console.log(4+4); //сложение, умножение и т.д.

let isChecked = true,
    isClosed = true;
console.log(isChecked && isClosed); //оператор "и"

console.log(isChecked || isClosed); //оператор "или"

//условия
if (2&4 == 8*1) {
  console.log('Верно')
} else {
  console.log('Ошибка')
}

let answer = confirm("Вам есть 18?")
if (answer) {
  console.log('Добро пожаловать')
} else {
  console.log('Пошел нахуй')
}

const num = 50;

if (num < 49) {
  console.log('Неправильно')
} else if (num > 100) {
  console.log('Много')
} else {
  console.log('Верно')
}

//циклы
for(let i = 1; i < 8; i++) {
  console.log(i);
}

//функции
function logging(a, b) {
  console.log( a + b )
}

logging(3,5); //в консоли получим 8