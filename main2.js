// Логические операторы
// || - или, false если оба условия false, в остальных случаях true
// Находит первое истинное значение


// if (1||0){
//    console.log('truthy');
//  }

// let hour = 9;
// (hour<10||hour>18)?console.log('Офис закрыт'): console.log('Офис открыт');


// let hour = 12;
// let isWeekend = true;
//
// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log('Офис закрыт');
// }


// console.log(0 || 1);
// console.log(true || 'no matter what');
// console.log(null || 1);
// console.log(null || 0);
// console.log(undefined || null || 0);


// let currentUser = null;
// let defaultUser = "John";
// let name = currentUser || defaultUser || 'unnamed';
// console.log(name);

// &&-и, true если оба условия true, в остальных случаях всегда false
// Ищет первое ложное значение

// let hour = 12;
// let minute = 30;
//
// if (hour==12&&minute==30){
//   console.log('The time is 12:30');
// }


// if (1 && 0) {
//   console.log('Не сработает, так как один результат ложный');
// }

//!- оператор (НЕ), сначала приводит аргумент к логическому типу,
// потом меняет его значение.
//!!-приводит значение к логическому типу, аналогичен Boolean(value)


// let age = 65;
// if (age >= 14 && age <= 90) {
//   console.log("Входит в диапазон от 14 до 90");
// }

// if (age <= 14 || age >= 90) {
//   console.log("Не входит в диапазон от 14 до 90");
// }


// let currentUser = prompt('Введите логин', '');
// let pass;
// (currentUser === 'Admin') ? pass = prompt('Введите пароль') :
// (currentUser === '' || currentUser === null) ? alert('Отменено') : alert('Я вас не знаю');

// currentUser && ((pass === 'Я главный') ? alert('Здравствуйте') :
// (pass !== 'Я главный' ) ? alert('Не верный пароль') : alert('Отменено'));


// Оператор объединения с null '??'

// result = a ?? b;
// result = (a !== null && a !== undefined) ? a : b;

// let user;
// console.log((user ?? 'Аноним'));

// let user2 = 'Иван';
// console.log((user2 ?? 'Аноним'));


// let firstName = null;
// let lastName = null;
// let nickName = 'Суперкодер';
//
// console.log((firstName ?? lastName ?? nickName ?? 'Аноним'));


// let height = 0;
// console.log(height || 100);
// console.log(height ?? 100);


// let height = null;
// let width = null;
// let area = (height ?? 100) * (width ?? 50);
// console.log(area);

// let height = 99;
// height = height ?? 100;
// console.log(height);


//Циклы While и for

// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let i = 0;
// for (; i < 3; i++) {
//   console.log(i);
// }

// let i = 0;
// for (; i < 3;) {
//   console.log(i++);
// }

// let sum = 0;
// while (true) {
//   let value = +prompt('Введите число', '');
//   if (!value) break;
//   sum += value;
// }
// console.log('Сумма: ' + sum);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//   console.log(i);
// }

// for (let i=0; i<3; i++){
//   for (let j = 0; j<3;j++){
//     let input = prompt(`Значение на координатах (${i}, ${j})`, '');
//   }
// }
//
// alert('готово')

// outer: for (let i=0; i<3; i++){
//   for (let j = 0; j<3;j++){
//     let input = prompt(`Значение на координатах (${i}, ${j})`, '');
//     if (!input) break outer;
//   }
// }
//
// alert('готово');

// for (let i = 1; i < 12; i++) {
//   if (i / 2 === 1) continue;
//   console.log(i);
// }

// for (let i=1; i<10; i+=2) {
//   console.log(i)
// }

// let i=0;
// while (i<3){
//   console.log(`number ${i}!`);
//   i++;
// }

// while (true) {
//   let number = +prompt('number?', '');
//   if (!number || number < 100) break;
// }

// n = 10;
// outer:
//   for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) continue outer;
//     }
//     console.log(i);
//   }

//Конструкция SWITCH

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     console.log('маловато');
//     break;
//   case 3:
//     console.log('в точку');
//     break;
//   case 5:
//     console.log('перебор');
//     break;
//   default:
//     console.log('нет таких значений');
// }

// let a = 2+2;
// switch (a) {
//   case 4:
//     console.log('Правильно');
//     break;
//   case 3:
//   case 5:
//     console.log('Неправильно');
//     console.log('Может вам посетить урок математики?');
//     break;
//   default:
//     console.log('Результат выглядит странновато. Честно');
// }

// let arg = prompt('Number', '');
// switch (arg) {
//   case '0':
//   case '1':
//     console.log('Один или ноль');
//     break;
//   case '2':
//     console.log('Два');
//     break;
//   case 3:
//     console.log('Никогда не выполнится!');
//     break;
//   default:
//     console.log('неизвестное значение');
// }

// let browser = prompt('Browser?', '');
// browser === 'Edge' ? console.log('You`ve got the Edge!') :
//   (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') ?
//     console.log('Okay we support these browser too') : console.log('We hope that this page looks ok!');

// let browser = prompt('Browser?', '');
// if (browser === 'Edge') {
//   console.log('You`ve got the Edge!');
// } else if ((browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')) {
//   console.log('Okay we support these browser too');
// } else {
//   console.log('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     console.log('Вы ввели число 0');
//     break;
//   case 1:
//     console.log('Вы ввели число 1');
//     break;
//   case 2:
//   case 3:
//     console.log('Вы ввели число 2, а может и 3');
//     break;
// }


//Функции

// function showMessage(){
//   console.log('Всем привет!');
// }
// showMessage()
// showMessage()


// function showMessage(){
//   let message = 'Привет, я JavaScript!';
//   console.log(message);
// }
//
// showMessage();
// console.log(message);


