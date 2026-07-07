"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({ time, location, starterIndex, mainIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${location} at ${time}.`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Aqui está seu delicioso macarrão feito com: ${ing1}, ${ing2} e ${ing3}!`,
    );
  },
};

// ##=== DESTRUCTURING ARRAYS  ===## //

// const [first, second] = restaurant.categories;
// console.log(first, second)

// Pulando elementos da array
// const [first, , second] = restaurant.categories;
// console.log(first, second);
//-------------------------------------------------------

// === Switching variables === //
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// [first, , second] = [second, , first];

// console.log(first, second);
//-------------------------------------------------------

// === Receives 2 return values from a function === //
// const [first, second] = restaurant.order(2, 0);
// console.log(first, second);
//-------------------------------------------------------

// === Nested destructuring === //
// const aninhada = [2, 3, [5, 6]];
// const [a, , [b, c]] = aninhada;
// console.log(a, b, c);
//-------------------------------------------------------

// === Default valures === //
// const [a = 0, b = 0, c = 0] = [12, 10];
// console.log(a, b, c);

// ##=== DESTRUCTURING OBJECTS ===## //
// const { name, openingHours, starterMenu } = restaurant;
// console.log(name, openingHours, starterMenu);

// Switching the name of variable
// const {
//   name: restaurantName,
//   openingHours: hours,
//   starterMenu: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
//-------------------------------------------------------

// === Defining default values === //
// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu /*menu não está definido, então retorna [] */, starterMenu);
//-------------------------------------------------------

// === Mutating variables === //
// let a = 123;
// let b = 123231;
// const obj = { a: 12, b: 241, c: 1290 };
// ({ a, b } = obj);
// console.log(a, b);
//-------------------------------------------------------

// === Nested objects === //
// const {
//   openingHours: {
//     fri: { open: o, close: c },
//   }, Destructuring within destructuring
// } = restaurant;
// console.log(o, c);
//-------------------------------------------------------

// === Parameters === //
// orderDelivery: function (obj) {
//     console.log(obj);
//   },

// restaurant.orderDelivery({
//   location: "Ferreiros - PE",
//   nome: "Na Lenha",
// });
// Parameters in functions
// orderDelivery: function (time, location, starterIndex, mainIndex) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${location} at ${time}.`,
//     );
//   },
// restaurant.orderDelivery({
//   time: "20:00",
//   location: "Ferreiros",
//   starterIndex: 2,
//   mainIndex: 1,
// });
//-------------------------------------------------------

// ##=== Spread operator (...)===## // => separa cada elemento por vírgula, logo só pode ser usado em arrays e funções
// const arr = [1, 2, 3];
// console.log(arr) => [1,2,3]
// console.log(...arr);  => 1, 2, 3
//-------------------------------------------------------

// === Join 2 arrays === //
// const menuMainCopy = [...restaurant.mainMenu];
// const menu = [...menuMainCopy, ...restaurant.starterMenu];
// console.log(menu);
//-------------------------------------------------------

// Iterables = arrays, strings, sets, maps (NOT objects!!)

// Functional example
// const ingredients = [
//   prompt("Sabor 1: "),
//   prompt("Sabor 2: "),
//   prompt("Sabor 3: "),
// ];

// restaurant.orderPasta(...ingredients);
//-------------------------------------------------------

// === Objects === //
// const restaurantCopy = { ...restaurant }; // desestrutura todas as chaves do objeto "restaurant"
// console.log(restaurantCopy);

// restaurantCopy.fundation = 1990;

// console.log(restaurant);
// console.log(restaurantCopy);
//-------------------------------------------------------

// ##=== Rest Pattern and Parameters ===## //
// Utilizado para juntar todos os elementos separados em um única array
// function add(...numbers) {
//   let sum = 0;
//   for (let a = 0; a < numbers.length; a++) {
//     sum += numbers[a];
//   }

//   console.log(sum);
// }

// add(1, 2, 3);
//-------------------------------------------------------

// ##=== Short-circuiting (&& and ||) ===## //
// OR => entra em curto-circuito no primeiro valor verdadeiro e o retorna
// Definir valores padrões
// const name = prompt("Digite seu nome") || "Israel";
// console.log(name);
// AND => entra em curto-circuito no primeiro valor falso e o retorna
// Verificar a existência de um objeto
// const value = 0 && 12 && 123;
// console.log(value);
