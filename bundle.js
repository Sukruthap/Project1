"use strict";

// let x = 10;
// if (x == 10) {
//     let x = 20;
//     console.log(x); // 20;
// }
// console.log(x); // 10
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
// function foo(bar) {
//     console.log(bar);
// }
// foo(); // undefined
// function foo(bar) {
//     bar = typeof bar !== 'undefined' ? bar : 10;
//     console.log(bar);
// }
// foo(); // 10
//-------------Creating objects and there scope ----------------//
///////The name variable was initialized to a value of 'machine name'. 
///Because both properties of the machine object contain a space, you can only reference them 
///using the square brackets./////
// let name = 'machine name';
// let machine = {
//     [name] : 'server',
//     'machine hours' : 1000
// };
// console.log(machine[name]);//server
// console.log(machine['machine hours']);//1000
// var prefix = 'machine';
// var machine = {
//     [prefix + ' name'] : 'server',
//     [prefix + ' hours']: 1000
// };
// console.log(machine['machine name']);//server
// console.log(machine['machine hours']);//1000
//------------Functions defining in es6 and using this statement concatination-----------------//
// var server = {
//     name: 'server',
//     restart: function () {
//         console.log('The' + this.name + ' is restarting...');
//     }
// };
//  var server = {
//      name: 'server',
//      restart() {
//          console.log(`The ${this.name} is restarting...`);
//      }
//  };
//  server.restart();
//---------------Spread operator usage-------------------//
// var rivers = ['Nile', 'Ganges', 'Yangte'];
// var moreRivers = ['Danube', 'Amazon'];
// Array.prototype.push.apply(rivers, moreRivers);
// console.log(rivers);
// let initialChars = ['A', 'B'];
// let chars = [...initialChars, 'C', 'D'];
// console.log(chars); // ["A", "B", "C", "D"]
//-----------Acessing array elements------------//
// var officer = [
//     {id:11, name:'Arun'},
//     {id:12,name:'Anitha'},
//     {id:27,name:'Shubha'}
// ];
// var officersid = officer.map(function(officer){
//     return officer.id
// });
// console.log(officersid);
//writhing above function in es6-----------//
// var officer = [
//     {id:11,name:'Arun',location:'Bangalore'},
//     {id:34,name:'Anitha',location:'Mysore'},
//     {id:99,name:'Shubha',location:'Mangalore'}
// ];
// var officersid = officer.map(officer=>officer.id);
// var officersname = officer.map(officer=>officer.name);
// var officers_lacation = officer.map(officer=>officer.location);
// console.log(officersid);
// console.log(officersname);
// console.log(officers_lacation);
//------------------function combing .map(),.reduce(),.filter()-----------------//
// var personnel = [
//     {
//       id: 5,
//       name: "Luke Skywalker",
//       pilotingScore: 98,
//       shootingScore: 56,
//       isForceUser: true,
//     },
//     {
//         id:12,
//         name:"Arun",
//         pilotingScore:91,
//         shootingScore:52,
//         isForceUser:true,
//     },
//     {
//         id:21,
//         name:"Anitha",
//         pilotingScore:73,
//         shootingScore:99,
//         isForceUser:false,
//     },
//     {
//         id:54,
//         name:"Krian",
//         pilotingScore:55,
//         shootingScore:54,
//         isForceUser:false,
//     }
// ];
// // const totaljadiscore = personnel
// // .filter(person=>person.isForceUser)
// // .map(jadi=>jadi.pilotingScore+jadi.shootingScore)
// // .reduce((acc,score)=>acc+score,0);
// const totaljadiscore = personnel.reduce((acc,person) => person.isForceUser ? acc + person.pilotingScore+person.shootingScore:acc,0);
// console.log(totaljadiscore);
//------------Array destructuring-----------------------------//
// let a,b;
// [a=1,b=2] = [10];
// [a=1,b=2];//a=1,b=2
// [a=1,b=2]=[,10];//a=1,b=10
// console.log(a);//10
// console.log(b);//2
//--------------Swaping of array------------------------------//
// let a=10 , b=20;
// [a,b] = [b,a];
// console.log(a);//20
// console.log(b);//10
//---------------Parsing returned array from a function-----------------//
// function returnArray(){
//     return [10,20,30];
// }
// // let [a,b,c] = returnArray();
// let [a,,c] = returnArray();
// console.log(a);//10
// // console.log(b);//20
// console.log(c);//30
//------------------------for...of examples--------------------------//
//-----------------------iterating over an array------------------//
// let iterable = [10,20,30];
// for(let value of iterable){
//     value += 1;
//     console.log(value);
// }
//10
//20
//30
//-----------------------Iterating over a String-------------//
// let iterstring = "hi";
// for(let value of iterstring){
//     console.log(value);
// }
//'h'
//'i'
//----------------------Iterating over a TypedArray---------------//
// let itertyparry = new Uint8Array([0x00,0xff]);
// for(let value of itertyparry){
//     console.log(value);
// }
//0
//255
//----------------------Iterating over a Map----------------------//
var itermap = new Map([['a', 1], ['b', 2], ['c', 3]], [['d', 4], ['e', 5]]); //  for(let entry of itermap){
//      console.log(entry);
//  }

console.log(itermap[1][1]); //['a',1]
//['b',2]
//['c',3]
//  for(let [key,value] of itermap){
//      console.log(key);
//      console.log(value);
//  }
//a
//1
//b
//2
//c
//3
//-----------------------Iterating over a Set-------------------------//
// let iterset = new Set([1,1,1,2,2,3,3]);
// for(let value of iterset){
//     console.log(value);
// }
//1
//2
//3
//--------------------{Set}---------------------------------------//
// let fruits = new Set(); // creates a new set data structure
// fruits.add('jackfruit'); // it will return the inserted set 
// fruits.add('apple');
// fruits.add('grapes');
// console.log(fruits);//{'jackfruit','apple','grapes'}
// console.log(fruits.size);//3
// console.log(fruits.has('pinapple'));//false
// console.log(fruits.has('apple'));//true
// fruits.forEach(fruit => {
//     console.log(`I love ${fruit}!`);
// });
// for(let fruit of fruits){
//     console.log(`I love ${fruit}!`);
// }
// console.log(fruits.clear());
