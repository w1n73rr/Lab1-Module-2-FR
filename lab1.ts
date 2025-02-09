//Вариант - 1
//Задание 2
const someArrowFunc = (p1: number,p2:number)=>{
    return "Задание 2: " + p1 + " " + p2;
}

const resArrowFunc: string = someArrowFunc(10,20);

console.log(resArrowFunc);

//Задание 3
const firstName: string = "Данил";
let lastName: string = "Ушаков";
const passport: any = [1234,567890,"ГУ МВД РОССИИ ПО Г. Z И Z ОБЛАСТИ",220-555];
let age: number = 52;

const allData: unknown = [firstName,lastName,passport,age];
console.log(allData);

//Задание 4
interface Entity {
    id: number;
}
interface ToJsonStringify extends
Entity {
    name: string;
    surname?: string;
}

const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
}
const jsonStringify: string = JSON.stringify(data);

console.log(jsonStringify);