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

let billion = 1000000000;
let bil = 1e9; // 1*1000000000
console.log(bil===billion);

