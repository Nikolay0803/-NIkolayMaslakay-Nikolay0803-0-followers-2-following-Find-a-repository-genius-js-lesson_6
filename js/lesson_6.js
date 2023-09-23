// Процедурне програмування
// const summ = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
//   return sum + p * date;
// }

// console.log(credit(summ, month, p));

// Об*єктно орієнтоване програмування

// const credit = {
//   summ: 20000,
//   month: 12,
//   p: 1000,
//   result() {
//     return this.summ + this.p * this.month;
//   }
// // };
// // console.log(credit.result())

// // Класи

// class Bank {
//   static type = "Privat";
//   constructor(options) {
//     this.summ = options.summ;
//     this.month = options.month;
//     this.p = options.p;
//   }

//   credit() {
//     return console.log("I am Privat");
//   }
// }

// // const userBank = new Bank({
// //   summ: 30000,
// //   month: 5,
// //   p: 500,
// // });

// // userBank.credit()
// // console.log(Bank.type)

// class NewBank extends Bank {
//   constructor(options) {
//     super(options);
//     this.card = options.card;
//   }
//   credit() {
//     super.credit();
//     return console.log("I am Aval");
//   }
// }

// const aval = new NewBank({
//   summ: 30000,
//   month: 5,
//   p: 500,
//   card: true,
// });

// console.log(aval.credit())

// get & set

// class User {
//   constructor(props) {
//     this.name = props.name;
//   }

//   firstName = "";
//   lastName = "";
//   age = "";
//   city = "";

//   set name(newName) {
//     const nameRow = newName.split(" ");
//     this.firstName= nameRow[0];
//     this.lastName = nameRow[1];
//   }

//   get name() {
//     return `First name : ${this.firstName} last name: ${this.lastName}`
//   }
// }

// const Kris = new User({
//   name: 'Kristina Malitowska',
// });

// const Dasha = new User({
//   name: "Dasha Happy",
// });
// console.log(Dasha);

// const a = [1, 2, 3];
// console.log(a)

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = Object.create(a);
// console.log(b)

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;

//   // this.sale = function () {
//   //   this.sales += 1;
//   // }
// }

// const ann = new Manager("Anna", 5)
// const ivan = new Manager("Ivan", 10)

// Manager.prototype.sale = function () {
//   this.sales += 1;
// }

// // console.log(ann.sales);
// // ann.sale();
// // console.log(ann.sales);

// console.dir(Manager)

// class CoffeMachine {
//   _water = 0;
//   #waterLimit = 500;

//   constructor(power) {
//     this.power = power;
//   }

//   set waterAmount(value) {
//     if(value < 0) {
//       value = 0;
//     }
//     this._water = value;
//   }
// }

// let coffeMachine = new CoffeMachine(100);

// coffeMachine.waterAmount = -20;

// console.log(coffeMachine);

// Об*єкт
// Інтерфейс

// Домашнє завдання
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні
// Створити телефонну книгу

class Abonent {
  constructor(name, num) {
    this.name = name;
    this.num = num;
  }

  set newData({num, tel}) {
    this.num = num;
    this.tel = tel;
  }

  get data() {
    return `Name: ${this.name} Phone: ${this.tel} Phone number: ${this.num}`;
  }
}

const Liza = new Abonent("Liza", "124-456-789");
const Lera = new Abonent("Lera", "125-457-790");
const Vika = new Abonent("Vika", "126-458-791");


console.log("Дані абонентів:");
console.log(Liza.data);
console.log(Lera.data);
console.log(Vika.data);

const telBook = new Map();
telBook.set("Abonent 1", Liza);
telBook.set("Abonent 2", Lera);
telBook.set("Abonent 3", Vika);

console.log("\nTelephone Book:");

for (const [name_abonent, abonent] of telBook) {
  console.log(`${name_abonent}: ${abonent.data}`);
}
