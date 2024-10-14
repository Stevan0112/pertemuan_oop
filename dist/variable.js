"use strict";
let nama = "Ivan";
console.log("Nama: ", nama);
let umur = 18;
console.log("Umur: ", umur);
let mahasiswa = true;
console.log("ini Mahasiswa: ", mahasiswa);
let matrix;
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix);
//type inference
let result = 123;
let result2 = "123";
console.log(typeof result);
console.log(typeof result2);
//generic Array
let matrix2;
matrix2 = [
    123,
    123
];
console.log(matrix2);
//generic Array dalam Array
let matrix3;
matrix3 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix3);
//object
let person = {
    name: "John",
    age: 30
};
console.log("Person: ", person);
//any
let randomValue = 10;
console.log("Random nilai (number): ", randomValue);
randomValue = "Hello";
console.log("Random nilai (number): ", randomValue);
randomValue = true;
console.log("Random nilai (number): ", randomValue);
//Enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let favouriteColor = Color.red;
console.log(favouriteColor);
//Tuple
let myTuple = [10, "Hello"];
console.log(myTuple[0]);
console.log(myTuple[1]);
//Union
let typeUnion;
typeUnion = 101;
console.log("indentifier (Number): ", typeUnion);
console.log("indentifier (String): ", typeUnion);
console.log("indentifier (Boolean): ", typeUnion);
