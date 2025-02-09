//Задание 2
const someArrowFunc = (p1, p2) => {
    return "Задание 2: " + p1 + " " + p2;
};
const resArrowFunc = someArrowFunc(10, 20);
console.log(resArrowFunc);
//Задание 3
const firstName = "Данил";
let lastName = "Ушаков";
const passport = [1234, 567890, "ГУ МВД РОССИИ ПО Г. Z И Z ОБЛАСТИ", 220 - 555];
let age = 52;
const allData = [firstName, lastName, passport, age];
console.log(allData);
const data = {
    id: 1,
    name: "Василий",
};
const jsonStringify = JSON.stringify(data);
console.log(jsonStringify);
