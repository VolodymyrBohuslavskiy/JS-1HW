// 1. Створити масив об'єктів які характеризують теги HTML , в об'єктах повинні бути присутні
// -назва тегу
// - опис його дій
// - масив з атрибутами
// -опис дії атрибуту
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
/*
 let tag_a =
 {
 name: '\<a>',
 action: '\Тег\<a> является одним из важных элементов HTML и предназначен для создания ссылок.',
 attributes: {
 accesskey: 'Активация ссылки с помощью комбинации клавиш.',
 coords: 'Устанавливает координаты активной области',
 download: 'Предлагает скачать указанный по ссылке файл.'
 }
 }
 ;
 let tag_div =
 {
 name: '\<div>',
 action: '\Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
 attributes: {
 align: 'Задает выравнивание содержимого тега \<div>.',
 title: 'Добавляет всплывающую подсказку к содержимому.'
 }
 }
 ;
 let tag_h1 =
 {
 name: '\<h1>',
 action: '\Тег \<h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',
 attributes: {
 align: 'Определяет выравнивание заголовка.',
 title: 'Добавляет всплывающую подсказку к содержимому.'
 }
 }
 ;
 let tag_span =
 {
 name: '\<span>',
 action: '\Тег <span> предназначен для определения строчных элементов документа.',
 attributes: {
 accesskey: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.',
 class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
 }
 }
 ;
 let tag_input =
 {
 name: '\<input>',
 action: '\Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
 attributes: {
 accept: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
 alt: 'Альтернативный текст для кнопки с изображением.'
 }
 }
 ;

 let tag_from =
 {
 name: '\<form>',
 action: '\Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
 attributes: {
 accept_charset: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
 action: 'Адрес программы или документа, который обрабатывает данные формы.'
 }
 }
 ;

 let tag_option =
 {
 name: '\<option>',
 action: '\Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
 attributes: {
 disabled: 'Заблокировать для доступа элемент списка.',
 label: 'Указание метки пункта списка. ',
 selected: 'Заранее устанавливает определенный пункт списка выделенным. '
 }
 }
 ;
 let tag_select =
 {
 name: '\<select>',
 action: '\Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
 attributes: {
 accesskey: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.',
 autofocus: 'Устанавливает, что список получает фокус после загрузки страницы.',
 disabled: 'Блокирует доступ и изменение элемента.'
 }
 }
 ;
 console.log(tag_a, tag_div, tag_h1, tag_span, tag_input, tag_from, tag_option, tag_select);*/

// Создать функцию-конструктор для машины
// 3 -5 параметров
// функцию drive(){
//     // this - обязателен!!!!
// }
// создаешь объект
// превращаешь его в JSON и потом обратно в объект
// создаешь еще одну машину, и применяешь ее метод драйв к 1у объекту
//Canstructor cars
/*
 function Cars(brand, model, year, status) {
 this.brand = brand;
 this.model = model;
 this.year = year;
 this.status = status;
 /!**
 * @return {string}
 *!/
 this.Drive = function () {
 return `This car is ${this.brand} ${this.model} of ${this.year} year, car on ${this.status} status. `
 }
 }
 let Car_1 = new Cars('Audi', "A7", 2013, true);

 let car_1json=JSON.stringify(Car_1);
 console.log(car_1json);

 let car_1parse = JSON.parse(car_1json);
 console.log(car_1parse);

 let Car_2 = new Cars('Ford', "Raptor", 2017, true);
 console.log(Car_2.Drive());*/

// Протокол пошуку попелюшки
// Створити 10 попелюшок з полями ім'я, вік, розмір ноги
// Сторити об'єкт "принц" який має поля ім'я, вік, туфелька яку він знайшов.
//     Знайти яка попелюшка його)

/*let pop = [
 {name: 'Nastya', age: 25, legsize: 42},
 {name: 'Ira', age: 18, legsize: 39},
 {name: 'Marianna', age: 22, legsize: 38},
 {name: 'Ann', age: 21, legsize: 40},
 {name: 'Jane', age: 40, legsize: 45},
 {name: 'Maria', age: 24, legsize: 42},
 {name: 'Taya', age: 22, legsize: 38},
 {name: 'Ksenia', age: 21, legsize: 40},
 {name: 'Uliana', age: 18, legsize: 39},
 {name: 'Sofia', age: 18, legsize: 39}
 ];
 for (let she of pop) {
 }
 let prinzSor = {name: 'Sofia', age: 18, legsize: 39};
 if (she = prinzSor) console.log(she);*/




// —оздаем свои методы map, filter, foreach
// дл¤ класса Array, добовл¤¤ их через prototype

class Car {
    constructor(brand, model, year, color, type, engenModel, engenMas, power) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.type = type;
        this.engenModel = engenModel;
        this.engenMas = engenMas;
        this.power = power;
    }
}


let cars = [
    new Car("subaru", "wrx", 2010, "blue", "sedan", "ej204x", 2, 400),
    new Car("subaru", "legacy", 2007, "silver", "sedan", "ez30", 3, 250),
    new Car("subaru", "tribeca", 2011, "white", "jeep", "ej20", 2, 300),
    new Car("subaru", "leone", 1998, "yellow", "sedan", "ez20x", 2, 140),
    new Car("subaru", "impreza", 2014, "red", "sedan", "ej204x", 2, 200),
    new Car("subaru", "outback", 2014, "red", "hachback", "ej204", 2, 165),
    new Car("bmw", "115", 2013, "red", "hachback", "f15", 1.5, 120),
    new Car("bmw", "315", 2010, "white", "sedan", "f15", 1.5, 120),
    new Car("bmw", "650", 2009, "black", "coupe", "f60", 6, 350),
    new Car("bmw", "320", 2012, "red", "sedan", "f20", 2, 180),
    new Car("mercedes", "e200", 1990, "silver", "sedan", "eng200", 2, 180),
    new Car("mercedes", "e6.3", 2017, "yellow", "sedan", "amg6.3", 6, 400),
    new Car("mercedes", "c250", 2017, "red", "sedan", "eng25", 2.5, 230)
];
// двигун більше 3х літрів

// for (let i = 0; i < cars.length; i++) {
//     let obj = cars[i];
//     if (obj.engenMas > 3) console.log(obj);
// }


// двигун  двигун = 2л
/*
 for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.engenMas==2)console.log(obj)
 }
 */

// виробник мерс
/*for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.brand=="mercedes")console.log(obj)
 }*/


// двигун більше 3х літрів + виробник мерседес
/*for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.engenMas > 3 && obj.brand=="mercedes")console.log(obj)
 }*/


// двигун більше 3х літрів + виробник субару
/*for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.engenMas >= 3 && obj.brand=="subaru")console.log(obj)
 }*/

// сили більше ніж 300
/*
 for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.power > 300)console.log(obj)
 }
 */

// сили більше ніж 300 + виробник субару
/*
 for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.power > 300 && obj.brand=="subaru")console.log(obj)
 }

 */

// мотор серіі ej
/*

 for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.engenModel == "ej20" || obj.engenModel == "ej204" || obj.engenModel == "ej204x")console.log(obj)}
 */


// сили більше ніж 300 + виробник субару + мотор серіі ej

/*
 for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if ((obj.engenModel == "ej20" || obj.engenModel == "ej204" || obj.engenModel == "ej204x") && (obj.power>300 && obj.brand=='subaru'))console.log(obj)}
 */



// двигун меньше 3х літрів + виробник мерседес
/*
 for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.engenMas < 3 && obj.brand=="mercedes")console.log(obj)}
 */

// двигун більше 2л + сили більше 250
/*
 for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.engenMas > 2 && obj.power>=250) console.log(obj)}
 */


// сили більше 250  + виробник бмв
/*for (let i = 0; i < cars.length; i++) {
 let obj = cars[i];
 if (obj.brand=='bmw' && obj.power>=250) console.log(obj)}*/

// Сортування


// Yaer
/*
cars.sort(function (x1,x2) {
    if (x1.year < x2.year) return -1;
    if (x1.year > x2.year) return 1;
});

console.log(cars);
*/

// mas
/*
cars.sort(function (x1,x2) {
    if (x1.engenMas < x2.engenMas) return -1;
    if (x1.engenMas > x2.engenMas) return 1;
});

console.log(cars);
*/

// HP

/*
cars.sort(function (x1,x2) {
    if (x1.power < x2.power) return -1;
    if (x1.power > x2.power) return 1;
});

console.log(cars);
*/

// Brand
/*
 cars.sort(function (x1,x2) {
 if (x1.brand < x2.brand) return -1;
 if (x1.brand > x2.brand) return 1;
 });
 console.log(cars);
*/


// model
/*
cars.sort(function (x1,x2) {
    if (x1.model < x2.model) return -1;
    if (x1.model > x2.model) return 1;
});
console.log(cars);
*/


// color
/*cars.sort(function (x1,x2) {
    if (x1.color < x2.color) return -1;
    if (x1.color > x2.color) return 1;
});
console.log(cars);*/


// type
/*
cars.sort(function (x1,x2) {
 if (x1.type < x2.type) return -1;
 if (x1.type > x2.type) return 1;
 });
 console.log(cars);
*/

// engen model
/*
 cars.sort(function (x1,x2) {
 if (x1.engenModel < x2.engenModel) return -1;
 if (x1.engenModel > x2.engenModel) return 1;
 });
 console.log(cars);
*/

/*


for (let i = 0; i < cars.length; i++) {
    let obj = cars[i];
    console.log(obj.engenModel.indexOf('ej') === 0);
}
*/










































