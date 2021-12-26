//Тип данных Symbol

// let id1 = Symbol('id');
// let id2 = Symbol('id');
// console.log(id1===id2)
// console.log(id1.toString())
// console.log(id2.description)

// let user = {
//   name: 'Vasya',
// };
// let id = Symbol('id');
// user[id] = 1;
// console.log(user);

// let id = Symbol('id');
// let user ={
//   name:'Vasya',
//   age:30,
//   [id]:123,
// };
// console.log(user);
// for (let key in user) console.log(key + user[key]);

// let id = Symbol('id');
// let user = {
//   [id]:123
// };
// let clone = Object.assign({},user);
// console.log(clone);

// let id = Symbol.for('id');
// let idAgain = Symbol.for('id');
// console.log(id===idAgain)
// let sym=Symbol.for('name');
// let sym2=Symbol.for('id');
// console.log(Symbol.keyFor(sym));
// console.log(Symbol.keyFor(sym2));

// let globalSymbol = Symbol.for('Name');
// let localSymbol = Symbol('Name');
// console.log(Symbol.keyFor(globalSymbol));
// console.log(Symbol.keyFor(localSymbol));
// console.log(localSymbol.description)

// Преобразование объектов в примитивы

// let user = {
//   name: 'John',
//   money: 1000,
//
//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint === "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };
//
// console.log(user);
// console.log(+user);
// console.log(user+500);

// let user = {
//   name: 'John',
//   money: 1000,
//
//   toString() {
//     return this.name;
//   },
//
//   valueOf() {
//     return this.money;
//   }
// };
//
// console.log(user);
// console.log(+user);
// console.log(user + 500);

//Способы записи числа

// let billion = 1000000000;
// let bil = 1e9; // 1*1000000000
// console.log(bil===billion);

// let ms=1e-6;
// console.log(ms);

// let num = 255;
// console.log(num.toString(16));
// console.log(0xFF);
// console.log(num.toString(2));
// console.log(0b11111111);

// let num = 1.2345;
// console.log(Math.floor(num * 100) / 100);

// let n = 12.34;
// let n2 = 12.36;
// console.log(n.toFixed(1));
// console.log(n2.toFixed(1));
// console.log(n2.toFixed(5));

// let n=0.1+0.2;
// console.log(n);
// console.log(+n.toFixed(2));

// console.log(isNaN(NaN));
// console.log(isNaN('str'));

// console.log(isFinite('15'));
// console.log(isFinite('str'));
// console.log(isFinite(Infinity));
// console.log(Object.is(12, 12));

// console.log(parseFloat('12.5em'));
// console.log(parseInt('100px'));
// console.log(parseInt('12.3'));
// console.log(parseFloat('12.3.4'));

// console.log(parseInt('0xff',16));
// console.log(parseInt('ff',16));
// console.log(parseInt('2n9c',36));

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// console.log(Math.max(3,5,-10,0,1));
// console.log(Math.min(1, 2));
// console.log(Math.pow(2, 10));


// function readNumber() {
//   let num;
//   while (true) {
//     num = prompt('Number?', '');
//     if (isFinite(num)) break;
//   }
//   return console.log(+num);
//   if (num === null || num === '') return console.log(null);
// }
// readNumber();

// console.log(0.2.toFixed(20))

// function random(min,max) {
//   return ((max-min)*Math.random())+min;
// }
// console.log(random(1,5))
// console.log(random(1,5))
// console.log(random(1,5))

// function randomInteger(min,max) {
//   return Math.floor(min+Math.random()*(max+1-min))
// }
//
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));

//Строки
//Спецсимволы

// let guestList='Guests:\n *John \n *Pete \n *Mary';
// console.log(guestList);

// console.log('\u00A9');
// console.log('\u{1F60D}')

// console.log('I\'m the Walrus!');

//Длина строки

// console.log(`My\n`.length);

//Доступ к символам

// let str = 'Hello';
// console.log(str[0]);
// console.log(str.charAt(0))
// console.log(str[str.length - 1]);

// for (let char of str){
//   console.log(char);
// }

// let str = 'Hi';
// str = 'h' + str[1];
// console.log(str)

//Изменение регистра

// console.log('Interface'.toUpperCase())
// console.log('Interface'.toLowerCase())
// console.log('Interface'[3].toUpperCase())

//Поиск подстроки

// let str = 'Widget with id';
// console.log(str.indexOf('Widget'))
// console.log(str.indexOf('widget'))
// console.log(str.indexOf('dg'))

// let str = 'Ослик Иа-Иа посмотрел на виадук';
//
// let target = 'Иа';
//
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos === -1) break;
//
//   console.log(`Найдено тут: ${foundPos}`);
//   pos = foundPos + 1;
// }

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) !== -1) {
//   console.log(pos);
// }

// let str = 'Widget with id';
// if (str.indexOf('Widget') != -1){
//   console.log('Совпадение есть')
// }

// Трюк с побитовым НЕ

// let str = 'Widget with id';
// if (~str.indexOf('Widget')){
//   console.log('Совпадение есть!');
// }

//includes, startsWith, endsWith

// console.log('Widget with id'.includes('Widget'));
// console.log('Hello'.includes('Bye'));

// console.log('Midget'.includes('id'));
// console.log('Midget'.includes(('id', 3)));

// console.log('Widget'.startsWith('Wid'));
// console.log('Widget'.endsWith('et'));

//Получение подстроки

// let str = 'stringify';
// console.log(str.slice(0,5));
// console.log(str.slice(0,1));

// console.log(str.slice(2));
// console.log(str.slice(-4,-1));

// console.log(str.substring(2,6));
// console.log(str.substr(2,2))

//Сравнение строк

// console.log('z'<'Z');
// console.log('z'.codePointAt(0));
// console.log('Z'.codePointAt(0));
// console.log(String.fromCodePoint(90));

// let str = '';
// for (let i = 90; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

// console.log(('Österreich'.localeCompare('Zealand')));

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase()+str.slice(1)
// }
//
// console.log(ucFirst("вася"))

// function checkSpam(str) {
//   str = str.toLowerCase();
//   return str.includes('viagra') || str.includes('xxx');
// }
//
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// function truncate(str, maxlength) {
//   return (str.length < maxlength) ? str : str.slice(0, maxlength-1) + '...';
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

//Массивы

// let arr =  new Array();
// let arr = [];

// let fruits = ['Яблоко','Апельсин','Слива'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[0]='Груша';
// console.log(fruits);
// fruits[2]='Лимон';
// console.log(fruits);
// console.log(fruits.length);

// let arr = ['Яблоко', {name: 'John'},true,function () {console.log('Hi')}];
// console.log(arr[1].name);
// arr[3]();

//Методы pop/push, shift/unshift

// let fruits = ['Яблоко','Апельсин','Слива'];
// console.log(fruits.pop());// Удаляет последний элемент и выводит его
// console.log(fruits);

// fruits.push('Груша');//Добавляет элемент в конец массива
// fruits[3]='Груша';
// console.log(fruits);

// console.log(fruits.shift());//Удаляет первый элемент массива
// console.log(fruits);

// fruits.unshift('Груша') //Добавляет элемент в начало массива
// console.log(fruits);

// let fruits = ['Яблоко'];
// fruits.push('Апельсин','Груша');
// fruits.unshift('Ананас','Лимон');
// console.log(fruits);

// let arr = ['Apple'];
// let fruits = arr;
// console.log(arr === fruits);
// arr.push('Orange');
// console.log(fruits);

//Перебор элементов

// let arr = ['Яблоко', 'Апельсин', 'Груша'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = ['Яблоко', 'Апельсин', 'Груша'];
// for (const fruit of arr) {
//   console.log(fruit);
// }

// let arr = ['Яблоко', 'Апельсин', 'Груша'];
// for (const key in arr) {
//   console.log(arr[key]);
// }

//new Array

// let arr = new Array('Яблоко', 'Груша', 'и тд.');

// let arr = new Array(2);
// console.log(arr[0]);
// console.log(arr.length);

// let matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// console.log(matrix[1][1]);

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// function sumInput() {
//
//   let arr = [];
//   while (true) {
//     let num = prompt('number?', '');
//     if (!isFinite(num) || num === null || num === '') break;
//
//     arr.push(+num);
//   }
//   console.log(arr);
//
//   let sum = 0;
//   for (let number of arr) {
//     sum += number;
//   }
//   return sum;
// }
//
// console.log(sumInput());

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let num = 0;
//   for (let item of arr) {
//     num += item;
//     maxSum = Math.max(maxSum, num);
//     if (num < 0) num = 0;
//   }
//   return console.log(maxSum);
// }
//
// getMaxSubSum([-1, 2, 3, -9]);
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]);
// getMaxSubSum([1, 2, 3]);


//Методы массивов

//splice
// let arr = ['I', 'learn', 'JavaScript'];
// arr.splice(1, 1);
// console.log(arr);
// let arr = ['I', 'learn', 'JavaScript', 'right', 'now'];
// arr.splice(0, 3, "Let's", 'dance');
// console.log(arr);

// let arr = ['I', 'learn', 'JavaScript', 'right', 'now'];
// let removed = arr.splice(0, 2);
// console.log(removed);

// let arr = ['I am', 'learning a', 'JavaScript'];
// arr.splice(2, 0, 'difficult', 'language');
// console.log(arr);

// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// console.log(arr);

//slice

// let arr = ['t', 'e', 's', 't'];
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-2));
// let arr2 = arr.slice();
// arr.splice(0,2);
// console.log(arr2);
// console.log(arr);

//concat

// let arr = [1,2];
// console.log(arr.concat([3, 4]));
// console.log(arr.concat([3, 4], [5, 6]));
// console.log(arr.concat([3, 4], 5, 6));

// let arr = [1, 2];
// let arrayLike={
//   0:'что-то',
//   length:1
// };
// console.log(arr.concat(arrayLike));

// let arr = [1, 2];
// let arrayLike={
//   0:'что-то',
//   1:'ещё',
//   [Symbol.isConcatSpreadable]:true,
//   length:2,
// };
// console.log(arr.concat(arrayLike));

//Перебор: forEach

// ['Bilbo', 'Gandalf', 'Nazgul'].forEach(console.log);

// ['Bilbo', 'Gandalf', 'Nazgul'].forEach((item,index,array)=>{
//   console.log(`${item} has a position ${index} in ${array}`)
// });

//Поиск в массиве

// let arr = [1, 0, false];
// console.log(arr.indexOf(0, 0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));
// console.log(arr.lastIndexOf(1));
// console.log(arr.includes(1));

// const arr = [NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

//find и findindex

// let users = [
//   {id: 1, name: 'Vasya'},
//   {id: 2, name: 'Petya'},
//   {id: 3, name: 'Masha'},
// ];
// let user = users.find(item=>item.id===1);
// console.log(user.name);


//filter

// let users = [
//   {id: 1, name: 'Vasya'},
//   {id: 2, name: 'Petya'},
//   {id: 3, name: 'Masha'},
// ];
//
// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers);

//Преобразование массивов
//map

// let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
// console.log(lengths);

//soft(fn)

// let arr = [1, 2, 15];
// arr.sort();
// console.log(arr);

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a === b) return 0;
//   if (a < b) return -1;
// }
//
// let arr = [1, 2, 15];
// arr.sort(compareNumeric);
// console.log(arr);

// let arr = [1, 2, 15];
// arr.sort(function (a, b) {
//   return a - b
// });
// console.log(arr);


//reverse

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);


//split и join

// let names = 'Vasya, Petya, Masha';
// let arr = names.split(', ');
// for (let name of arr){
//   console.log(`The message will be received ${name}`);
// }
// console.log(arr);

// let arr = 'Vasya, Petya, Masha, Sasha'.split(', ', 2)
// console.log(arr);

// let arr = ['Vasya', 'Petya', 'Masha'];
// let str = arr.join('; ');
// console.log(str);


//reduce/reduceRight

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);


//Array.isArray

// console.log(typeof {});
// console.log(typeof []);

// console.log(Array.isArray([]));
// console.log(Array.isArray({}));


//thisArg

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };
//
// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30},
// ];
//
// let soldiers = users.filter(army.canJoin, army);
//
// console.log(soldiers.length);
// console.log(soldiers[0].age);
// console.log(soldiers[1].age);

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }
//
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function filteredRange(arr, a, b) {
//   return arr.filter(item => item >= a && item <= b);
// }
//
// let arr = [5, 3, 8, 1];
// let filtered = filteredRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);


// let arr = [5,2,1,-10,8].sort().reverse();
// console.log(arr);


// function copySorted(arr) {
//   return arr.slice().sort()
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(arr);
// console.log(sorted);


// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }
//
// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 28};
//
// let arr = [vasya, petya, masha];
//
// console.log(sortByAge(arr));


// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 28};
//
// let arr = [vasya, petya, masha];
// function getAverageAge(arr) {
//   let sum=0;
//   for (const user of arr) {
//     sum+=user.age;
//   }
//   return Math.floor(sum/arr.length)
// }
// console.log(getAverageAge(arr))


// let vasya = {name: 'Vasya', surname: 'Pypkin', id: 1};
// let petya = {name: 'Petya', surname: 'Ivanov', id: 2};
// let masha = {name: 'Masha', surname: 'Petrova', id: 3};
//
// let users = [vasya, petya, masha];
// let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}));
// console.log(usersMapped);

// let names = users.map(item=>item.name);
// console.log(names);

// function getAverageAge(users) {
//   return users.reduce((prev,user)=>prev+user.age,0)/users.length;
// }
//
// console.log(getAverageAge(arr));


// function unique(arr) {
//   let uniqueArr = [];
//   for (let arrElement of arr) {
//     if (!uniqueArr.includes(arrElement)) {
//       uniqueArr.push(arrElement)
//     }
//   }
//   return uniqueArr
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// console.log(unique(strings));


//Перебираемые объекты

// let range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator] () {
//     return {
//       current: this.from,
//       last: this.to,
//
//       next() {
//         if (this.current <= this.last) {
//           return {done: false, value: this.current++};
//         } else {
//           return {done: true};
//         }
//       }
//     }
//   }
// };
//
// for (let num of range) {
//   console.log(num);
// }

// for (let char of 'test'){
//   console.log(char);
// }

// let str = 'Hello';
// let iterator = str[Symbol.iterator]();
// while (true){
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value);
// }

// let arrayLike = {
//   0:'Hello',
//   1:'World',
//   length:2
// };

// let arr = Array.from(arrayLike);
// console.log(arr);

// let str = 'Hello';
// let charArr = Array.from(str);
// console.log(charArr);


//Map и Set

// let map = new Map();
//
// map.set('1', 'str');
// map.set(1, 'num1');
// map.set(true, 'bool1');
// console.log(map.get(1));
// console.log(map.get('1'));
// console.log(map.size);
// console.log(map);


// let john = {name: 'John'};
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// console.log(visitsCountMap);

// let recipeMap = new Map([
//   ['огурец', 500],
//   ['помидор', 350],
//   ['лук', 50]
// ]);
//
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable);
// }
//
// for (let amount of recipeMap.values()){
//   console.log(amount);
// }
//
// for (let entry of recipeMap) {
//   console.log(entry);
// }
//
// console.log(recipeMap);


// let map = new Map([
//   ['1', 'str1'],
//   [1, 'num1'],
//   [true, 'bool1']
// ]);
// console.log(map.get('1'));


// let obj = {
//   name: 'John',
//   age: 30
// };
//
// let map = new Map(Object.entries(obj));
// console.log(map);


// let prices = Object.fromEntries([
//   ['banan',1],
//   ['orange',2],
//   ['meat',4]
// ]);
//
// console.log(prices.orange);

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);
//
// let obj = Object.fromEntries(map.entries());
// console.log(obj);


// let set = new Set();
// let john = {name: 'John'};
// let pete = {name: 'Pete'};
// let mary = {name: 'Mary'};
//
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
//
// console.log(set.size);
// for (let setElement of set) {
//   console.log(setElement);
// }


// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// console.log(unique(values));


// function clean(arr) {
//   let set = new Set();
//   for (let arrElement of arr) {
//     let sorted = arrElement.toLowerCase().split("").sort().join("");
//     set.add(sorted);
//   }
//   return Array.from(set);
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// console.log(clean(arr));


//WeakMap и WeakSet


// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj,'ok');
// weakMap.set('test','Whoops');


//Object.keys, values, entries


// function sumSalaries(obj) {
//   let sum = 0;
//   for (let userSal of Object.values(obj)) {
//     sum += userSal;
//   }
//   return sum;
// }
//
// let salaries = {
//   'John': 100,
//   'Pete': 300,
//   'Mary': 250
// };
//
// console.log(sumSalaries(salaries));


// let user = {
//   name:'john',
//   age:30
// };
//
// function count(obj) {
//   return Object.keys(obj).length
// }
//
// console.log(count(user));


//Деструктурирующие присваивание

// let arr = ['Ilya', 'Kantor'];
// let [firstName, surname] = arr;
//
// console.log(firstName);
// console.log(surname);


// let [firstName, surname] = 'Ilya Kantor'.split(' ');
// console.log(firstName);
// console.log(surname);


// let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']
// console.log(title);


// let user = {};
// [user.name, user.surname] = 'Ilya Kantor'.split(' ');
// console.log(user);


// let user = {
//   name: 'John',
//   age: 30
// };
//
// for (let [key, value] of Object.entries(user)){
//   console.log(`${key}: ${value}`);
// }


// let user = new Map();
// user.set('name', 'John');
// user.set('age', '30');
//
// for (let [key, value] of user) {
//   console.log(`${key}: ${value}`);
// }


// let options = {
//   title: 'Menu',
//   width: 100,
//   height: 200
// };
//
// let {title, width, height} = options;
//
// console.log(title);
// console.log(width);
// console.log(height);


// let options = {
//   title: 'Menu',
//   width: 100,
//   height: 200
// };
//
// let {width: w, height: h, title} = options;
//
// console.log(w);
// console.log(h);
// console.log(title);


// let options = {
//   title: 'Menu',
// };
//
// let {width = 100, height = 200, title} = options;
//
// console.log(title);
// console.log(width);
// console.log(height);


// let options = {
//   title: 'Menu',
// };
//
// let {widht = prompt('Widht'), title = prompt('Title')} = options;
//
// console.log(title);
// console.log(widht);
// console.log(options);


// let options = {
//   title: 'Menu'
// };
//
// let {width: w = 100, height: h = 200, title} = options;
//
// console.log(title);
// console.log(w);
// console.log(h);


// let options = {
//   title: 'Menu',
//   height: 200,
//   width: 100,
// };
//
// let {title,...rest}=options;
//
// console.log(title);
// console.log(rest.height);
// console.log(rest.width);


// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ['Cake', 'Donut'],
//   extra: true
// };
//
//
// let {
//   size: {
//     width,
//     height,
//   },
//   items: [item1, item2],
//   title = 'Menu'
// } = options;
//
// console.log(title);
// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);


// let options = {
//   title: 'My menu',
//   items: ['Item1', 'Item2']
// };
//
// function showMenu({title = 'Untitled', width = 200, height = 100, items = []}) {
//   console.log(`${title}: ${width}x${height}`);
//   console.log(items);
// }
//
// showMenu(options);


// let options = {
//   title: 'My menu',
//   items: ['Item1', 'Item2'],
// };
//
// function showMenu({
//                     title = 'Untilted',
//                     width: w = 100,
//                     height: h = 200,
//                     items: [item1, item2]
//                   }) {
//   console.log(`${title} ${w} ${h}`);
//   console.log(item1);
//   console.log(item2);
// }
//
// showMenu(options);

// let salaries = {
//   'John': 100,
//   'Pete': 300,
//   'Mary': 250
// }
//
// function topSalary(obj) {
//   let maxSal = 0;
//   let name = null
//   for (let [key, value] of Object.entries(obj)) {
//     if (maxSal < value){
//       name = key ; maxSal=value
//     }
//   }
//   return name
// }
//
// console.log(topSalary(salaries));


//Дата и время

