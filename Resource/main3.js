//прототипное наследование

// let animal = {
//   eats: true,
//   walk(){
//     console.log('animal walk')
//   }
// };
//
// let rabbit ={
//   jumps: true
// };
//
// object.setprototypeof(rabbit, animal);
//
// let longear = {
//   earlenght: 10,
// };
//
// object.setprototypeof(longear,rabbit);
//
// longear.walk();
// console.log(longear.jumps);


// let user = {
//   name: "john",
//   surname: "smith",
//
//   set fullname(value){
//     [this.name, this.surname] = value.split(' ');
//   },
//
//   get fullname(){
//     return `${this.name} ${this.surname}`
//   }
// }
//
// let admin = {
//   isadmin: true
// };
//
// object.setprototypeof(admin, user);
// admin.fullname = 'alice cooper';
// console.log(admin.name);
// console.log(admin.surname);


// let animal = {
//   walk(){
//     if (!this.issleeping){
//       console.log('i walk');
//     }
//   },
//   sleep(){
//     this.issleeping = true;
//   }
// };
//
// let rabbit = {
//   name:'white rabbit',
// };
//
// object.setprototypeof(rabbit, animal);
// rabbit.sleep();
//
// console.log(rabbit.issleeping);


// let animal = {
//   eats: true
// };
//
// let rabbit = {
//   jumps: true,
// }
//
// object.setprototypeof(rabbit, animal);
//
// for (let prop in rabbit) {
//   let isown = rabbit.hasownproperty(prop);
//
//   if (isown) {
//     console.log(`our: ${prop}`);
//   } else {
//     console.log(`inherited: ${prop}`);
//   }
// }


// let head = {
//   glasses: 1
// };
//
// let table = {
//   pen: 3
// };
//
// object.setprototypeof(table, head);
//
// let bed = {
//   sheet: 1,
//   pillow: 2
// };
// object.setprototypeof(bed, table);
//
// let pockets = {
//   money: 2000
// };
// object.setprototypeof(pockets, bed);
//
// console.log(pockets.pen);
// console.log(bed.glasses);


//f.prototype


// let animal = {
//   eats: true
// };
//
// function rabbit(name) {
//   this.name = name;
// }
//
// rabbit.prototype = animal;
//
// let rabbit = new rabbit("white rabbit");
//
// console.log(object.getprototypeof(rabbit));
// console.log(rabbit.prototype);
// console.log(object.getprototypeof(rabbit) === rabbit.prototype);


// function rabbit() {}
// console.log(rabbit.prototype.constructor === rabbit);

// let rabbit = new rabbit();
// console.log(rabbit.constructor === rabbit);


// методы прототипов, объекты без свойства __proto__

// let animal = {
//   eats: true
// };
//
// let rabbit = object.create(animal);
// console.log(rabbit.eats);
// console.log(object.getprototypeof(rabbit) === animal);
// object.setprototypeof(rabbit, {});
//
// let rabbittwo = object.create(animal, {
//   jumps:{
//     value: true
//   }
// });
// console.log(rabbittwo.jumps);


// let obj = object.create(null);
//
// let key = prompt('what`s the key', '__proto__');
// obj[key]='some value';
//
// console.log(obj[key]);

/*
1.__proto__ есть у всех объектов по умолчанию ссылается
  на глобальный объект - object.prototype; устаревшее свойство, новое object.getprototypeof
  и object.setprototypeof;object.create(proto, [descriptors]) – создаёт пустой объект со
  свойством [[prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
2.f.prototype - это всего лишь свойство функции,
  свойство которое есть только у функции. это свойство содержит только constructor.
  constructor который ссылается на функцию: Rabbit.prototype.constructor == Rabbit.
  соответственно если мы не трогаем свойство prototype будет доступен всем кроликам
  rabbit.constructor == Rabbit;
  можно так-же использовать свойство конструктор существующего для создания нового
  объекта:
  function rabbit(name) {
  this.name = name;
  alert(name);
  }
  let rabbit = new rabbit("white rabbit");
  let rabbit2 = new rabbit.constructor("black rabbit");
  3. встроенные методы хранятся в object.prototype или array.prototype
*/


//класс: базовый синтаксис

// class User {
//   constructor(name) {this.name = name}
//   sayHi(){console.log(this.name);}
// }
//
// console.log(typeof User);
// console.log(User === User.prototype.constructor);
// console.log(User.prototype.sayHi);
// console.log(Object.getOwnPropertyNames(User.prototype));


// class User {
//   constructor(name) {
//     this.name = name;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     if (value.length < 4) {
//       console.log('Имя слишком короткое');
//       return;
//     }
//     this._name = value;
//   }
//
// }
//
// let user = new User('Иван');
// console.log(user.name);


//Наследование классов
//
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит с скоростью ${this.speed}.`);
//   }
//
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит`);
//   }
// }
//
// let animal = new Animal('Мой питомец');
//
// class Rabbit extends Animal{
//   hide(){
//     console.log(`${this.name} прячется`);
//   }
// }
//
// let rabbit = new Rabbit('Белый кролик');
// rabbit.run(5);
// rabbit.hide();


// class Animal {
//
//   constructor(name) {
//     this.name = name;
//   }
//
// }
//
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }
//
// let rabbit = new Rabbit("Белый кролик");
// console.log(rabbit.name);
// console.log(rabbit.created);


//Проверка класса: "instanceof"

// class Rabbit {}
//
// let rabbit = new Rabbit();
// console.log(rabbit instanceof Rabbit);


// let arr = [1,2,3];
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);


//Примеси

// let sayHiMixin = {
//   sayHi(){
//     console.log(`Привет, ${this.name}`);
//   },
//   sayBye(){
//     console.log(`Пока, ${this.name}`);
//   }
// }
//
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// Object.assign(User.prototype, sayHiMixin);
//
// new User('Vasya').sayHi();


// let sayMixin = {
//   say(phrase) {
//     console.log(phrase);
//   }
// };
//
// let sayHiMixin = {
//   sayHi() {
//     super.say(`Hello, ${this.name}`);
//   },
//
//   sayBye() {
//     super.say(`Bye, ${this.name}`);
//   }
// };
//
// Object.setPrototypeOf(sayHiMixin, sayMixin);
//
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// Object.assign(User.prototype, sayHiMixin);
//
// new User('Vasya').sayHi();


// let eventMixin = {
//   on(eventName, handler) {
//     if (!this._eventHandlers) this._eventHandlers = {};
//     if (!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }
//     this._eventHandlers[eventName].push(handler);
//   },
//
//   off(eventName, handler) {
//     let handlers = this._eventHandlers && this._eventHandlers[eventName];
//     if (!handlers) return;
//     for (let i = 0; i < handlers.length; i++) {
//       if (handlers[i] === handlers) {
//         handlers.splice(i--, 1);
//       }
//     }
//   },
//
//   trigger(eventName, ...args) {
//     if (!this._eventHandlers || !this._eventHandlers[eventName]) {
//       return;
//     }
//     this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//   }
// };


//Промисы, async/await
//Promise


// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve('done'), 1000);
// });

// let promiseError = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('Whoops!'), 1000));
// });

// promise.then((result)=> console.log(result));
// promiseError.then(error=> console.log(error));

// promiseError.catch(console.log)


// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, ms);
//   });
// }
//
// delay(3000).then(() => console.log('done'));


//Цепочка промисов

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// }).then(function (result) {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   }).then(function (result) {
//     console.log(result);
//   })
// });


//Promise API

// Promise.all([
//   new Promise(resolve => setTimeout(()=>resolve(1),1000)),
//   new Promise(resolve => setTimeout(()=>resolve(2),2000)),
//   new Promise(resolve => setTimeout(()=>resolve(3),3000))
// ]).then(console.log);


// let urls =[
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];
//
// let request = urls.map(url=>fetch(url));
// Promise.all(request)
// .then(responses=>responses.forEach(
//   response=>console.log(`${response.url}:${response.status}`)
// ));


// let names = ['iliakan', 'remy', 'jeresig'];
//
// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
//
// Promise.all(requests)
//   .then(responses => {
//     for (const response of responses) {
//       console.log(`${response.url}:${response.status}`);
//     }
//
//     return responses;
//   })
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(users => users.forEach(user => console.log(user.name)));


// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(console.log);


// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];
//
// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => {
//     console.log(urls);
//     results.forEach((result, num) => {
//       if (result.status === 'fulfilled') {
//         console.log(`${urls[num]}:${result.value.status}`);
//       }
//       if (result.status === 'rejected') {
//         console.log(`${urls[num]}:${result.reason}`);
//       }
//     });
//   });


// Promise.race([
//   new Promise((resolve, reject)=>setTimeout(()=>resolve(1),1000)),
//   new Promise((resolve, reject)=>setTimeout(()=>reject(new Error('Ошибка')),2000)),
//   new Promise((resolve, reject)=>setTimeout(()=>resolve(3),3000))
// ]).then(console.log)


//Промисификация

// let loadScriptPromise = function(src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err)
//       else resolve(script);
//     });
//   })
// }
//
// loadScriptPromise('Resource/main2.js').then(console.log);


// function promisify(f) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       function callback(err, result) {
//         if (err) {
//           return reject(err);
//         } else {
//           resolve(result);
//         }
//       }
//
//       args.push(callback);
//
//       f.call(this, ...args);
//
//     });
//   };
// }


//Async/await


// async function f(){
//   return 1;
// }
//
// f().then(console.log);


// async function f(){
//   let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve('готово!'),1000)
//   });
//
//   let result = await promise;
//
//   console.log(result);
// }
//
// f();


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// async function loadJson(url) {
//   try {
//     let urlResponse = await fetch(url);
//     let responseJson = await urlResponse.json();
//     if (responseJson.status === 200) return responseJson
//   } catch (e) {
//     throw new Error(e)
//   }
// }
//
// loadJson('no-such-user.json');


