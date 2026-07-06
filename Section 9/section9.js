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
};

// ##=== Destructuring arrays  ===## //

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



