// Основы JavaScript
// console.log('Hello world')

// Структуры кода
// console.log('Привет');
// console.log('Мир');

// Переменные
// let massage = 'Hello';
// let massage2;
// massage2 = 'Hello';
// console.log(massage2);


// let user = 'John', age = 25, massage3 = 'Hello';
// let user2 = 'John';
// let ageUser2 = 25;
// let massages = 'Hello Johnny';


// let massageFour;
// massageFour = 'Hello';
// massageFour = 'World';
// console.log(massageFour);


// let hello = 'Hello World';
// let massage;
//
// massage=hello;
//
// console.log(massage);
// console.log(hello);


// let admin;
// let name;
// name = 'John';
// admin = name;

// console.log(admin);


// Типы данных

// console.log((1 / 0));
// console.log(Infinity);

// console.log(('non-number' / 2));

// let str = 'Hi';
// let phrase = `Обратные кавычки позволяют встраивать переменные - ${str}`;
// console.log(phrase);

// let name = 'Ivan';
// console.log(`Привет, ${name}`);
// console.log(`Результат, ${1+2}`);

// let isGreater = 4 > 1;
// console.log(isGreater);

// let age = null;

// let age;
// console.log(age);

// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 10n);
// console.log(typeof true);
// console.log(typeof 'foo');
// console.log(typeof Symbol('id'));
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof alert);

// let name = 'Ilya';
// console.log(`Hello ${1}`);
// console.log(`Hello ${'name'}`);
// console.log(`Hello ${name}`);

// Взаимодействие: Alert, Prompt, Confirm

// alert('Выводит сообщение');

// confirm('Выводит вопрос');

// let name = prompt('Ваше имя?', 'например: Вася');
// alert(name);

// Преобразование типов

// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);


// console.log(('6' / '2'));


// let str = '123';
// console.log(typeof str);

// let num = Number(str);
// console.log((typeof num));


// let age = Number('Любая строка вместо числа');
// console.log(age);


// console.log(Number('   123   '));
// console.log(Number('123d'));
// console.log(Number(true));
// console.log(Number(false));

// console.log(Boolean('Kaтя'));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(''));


// Базовые операторы, математика


// let x = 1;
// x = -x;
// console.log(x);

// let x = 1; y = 3;
// console.log(x - y);

// console.log(5 % 2);
// console.log(10 % 8);

// console.log(2 ** 2);
// console.log(2 ** 3);
// console.log(2 ** 4);

// console.log(4 ** (1 / 2));
// console.log(8 ** (1 / 3));

// let s = 'my';
// d = ' string';
// a = s + d;
// console.log(a);

// console.log(1 + '2');
// console.log('2' + 1);

// console.log(6 - '2');
// console.log('2' / '1');

// let x = '1';
// console.log(+x);

// console.log(+true);
// console.log(+'');

// let x = '2'; y = '3';
// console.log(+x + +y);


// let a = 1;
// let b = 2;

// c = 3 - (a = b + 1);
// console.log(c);
// console.log(a);


// let n = 2;

// n += 5;
// n *= 2;
// console.log(n);


// let n = 2;
// let b = 2;

// n *= 3 + 5;
// b = b * 3 + 5;
// console.log(n, b);


// let counter = 2;
// counter++;
// console.log(counter);

// let counter2 = 2;
// counter2--;
// console.log(counter2);

// let counter = 1;
// let a = ++counter;
// console.log(a);

// let counter = 1;
// let a = counter++;
// console.log(a);
// console.log(counter);

// let a = +prompt('a');
// let b = +prompt('b');
// console.log(a + b);

// let a = prompt('a');
// let b = prompt('b');
// console.log(+a + +b);

// Операторы сравнения

// console.log(2 > 1);
// console.log(2 === 1);
// console.log(2 !== 1);

// console.log('Я' < 'я');

// console.log('2' > 1);

// console.log(true == 1);
// console.log(false == 0);

// Условное ветвление: If, ?

// let year = prompt('В каком году была опубликована спецификация ECMAScript?', '');
// if (year == 2015) alert('Вы правы!');

// let year = prompt('В каком году была опубликована спецификация ECMAScript?', '');
// if (year == 2015) {
// alert('Вы правы!');
// alert('Вы такой умный!');
// }

// let year = prompt('В каком году была опубликована спецификация ECMAScript?', '');
// if (year < 2015){
//   alert('Это слишком рано');
// } else if (year > 2015){
//   alert('Это поздновато');
// }else{
//   alert('Верно!');
// }

// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');
//
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
//
// alert(accessAllowed);

// let age = prompt('Сколько вам лет', '');
// let accessAllowed = age >= 18;
// alert(accessAllowed);

// let age = prompt('Возраст?', '18');
//
// let massage = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//     (age < 100) ? 'Здравствуйте' : 'Какой необычный возраст!';
// alert(massage);

// let company = prompt('Какая компания создала JavaScript', '');
// company == 'Netscape' ? alert('Верно!') : alert('Не верно');

// let name = prompt('Какое "официальное" название JavaScript?', '');
// if (name == 'ECMAScript') {
//   alert('Правильно');
// } else {
//   alert('Не знаете? ECMAScript');
// }

// let number = +prompt('Number?', '');
// (number > 0) ? alert('1') :
//   (number < 0) ? alert('-1') : alert('0');

// let result;
// result = (a + b < 4) ?  'мало' : 'много';

// let login=prompt('')
// let massage=(login==='Сотрудник')?'Привет':
//   (login==='Директор')?'Здравствуйте':
//     (login==='')?'Нет логина': '';
// alert(massage)


// Логические операторы