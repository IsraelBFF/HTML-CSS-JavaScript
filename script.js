'use strict';
/*const jonas = {
    friends: ["Michael", "Peter", "Steven"],
    age: 46,
    firstName: "Jonas",
    lastName: "Schemdtmann"
}

console.log(`${jonas.firstName} tem ${jonas.friends.length} amigos e seu melhor amigo é ${jonas.frien}.`);
console.log(jonas);*/

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birtYeah: 1991,
//     job: "teacher",
//     hasDriverLicense: false,

//     calcAge: function (){
//         this.age = 2026 - this.birtYeah;
//         return this.age;
//     },

//     getSummary: function (){
//         this.calcAge();

//         if (this.hasDriverLicense){
//             return `${this.firstName} é um ${this.job}, de ${this.age} anos de idade e é verdade que ele tem CNH.`
//         } else {
//             return`${this.firstName} é um ${this.job}, de ${this.age} anos de idade e é mentira que ele tem CNH.`
//         }
//     }
// };

// console.log(jonas.getSummary());

// FOR LOOP

// for (let rep = 1 ; rep <= 10 ; rep++){
//     console.log(`Número de repetições do levantamento ${rep} 🏋️‍♂️`);
// }

let sum = 0;
const arr = [1,2,3,4,5,6,7,8,9,10];

function calcAverage(arr){
    for (let i = 0 ; i < arr.length ; i++) sum += arr[i]; 

    return sum/arr.length;
}

console.log(`MÉDIA DE TODOS OS NÚMEROS NA ARRAY: ${calcAverage(arr)}`);