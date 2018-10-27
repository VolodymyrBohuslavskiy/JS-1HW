{//1. приймає три числа та виводить та повертає найменьше.
    /*function Min(z,x,c) {
     let v= Math.min(z,x,c);
     console.log(v)
     }
     Min(33,5,12);*/

//2. приймає три числа та виводить та повертає найбільше.
    /*function Max(z,x,c) {
     let v= Math.max(z,x,c);
     console.log(v)
     }
     Max(33,5,99);*/

//3. приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
    /*
     function MinMax_ret(...args) {
     console.log(Math.max(...args));
     maximum = Math.min(...args);
     return maximum
     }

     MinMax_ret(2,4,5,6,12,33,455,678);*/

//4. виводить масив
    /*function OutMasive(...args) {
     console.log(arguments)
     }
     OutMasive(3,5,8,12,34,55,67,89,23,6);*/

//5. повертає найбільше число з масиву
    /*
     function OutMaxOfMasive(...args) {
     let omom = Math.max(...args);
     return console.log(omom)
     }
     OutMaxOfMasive(3,5,8,12,34,55,67,89,23,6);
     */

//6. повертає найменьше число з масиву

    /* function OutMinOfMasive(...args) {
     let omomx = Math.min(...args);
     return console.log(omomx)
     }
     OutMinOfMasive(3,5,8,12,34,2,55,67,89,23,6);*/


//7. виводить масив, але напрямок вивденння(сходження\ спадання) визначається колбеком

    /*let ar = [3, 5, 8, 12, 34, 2, 55, 67, 89, 23, 6];

     function Callback(sor) {
     sor()
     }
     function Up() {
     let upSort = ar.sort(function (a, b) {
     return a - b
     });
     console.log(upSort);
     }
     function Down() {
     let downSort = ar.sort(function (a, b) {
     return b - a
     });
     console.log(downSort);
     }

     Callback(Down);
     Callback(Up);*/

// ----------------------------------------------------------------------------
//                                 class

// 1 створити функцію яка виводить масив

    /*function OutMasive(o) {
     console.log(o)*/
}
//2 стіорити функцію яка заповнює масив рандомними числами та виводить його.

/*function MasOfRan() {
 let x =[(Math.round(Math.random()*100)),(Math.round(Math.random()*100)),(Math.round(Math.random()*100)) ];
 return x
 }
 console.log(MasOfRan());*/

/*function GRM(maxVal, size) {
 function Rand(val, max) {
 let arr = [],
 i = Math.round(Math.random() * size);
 pos = Math.round(Math.random() * (i + 1));
 while (i--) {
 let rnd = Math.round(Math.random() * max);
 arr.push(rnd >= val ? ++rnd : rnd)
 }
 arr.splice(pos, 0, val);
 return arr
 }
 console.log(Rand(Math.round(Math.random() * maxVal), Math.round(Math.random() * maxVal)));
 }*/
// GRM(300,20);


//Для виведення використати попвередню функцію.
// 3 --//-- яка знаходить найбільше число в масиві.Для створення масиву використати попередню функцію

/*
 function MasOfRan() {
 let x =[(Math.round(Math.random()*100)),(Math.round(Math.random()*100)),(Math.round(Math.random()*100))];
 return x
 }
 let mas = MasOfRan();

 console.log(mas);
 console.log(Math.max(...mas));
 */

/*function MasOfRan() {
 let x =[(Math.round(Math.random()*100)),(Math.round(Math.random()*100)),(Math.round(Math.random()*100))];
 return x
 }
 let mas = MasOfRan();

 console.log(mas);
 console.log(Math.max(...mas));*/
// попередню функцію
// 4 --//-- яка скаладає значення елементів масиву та повертає його.

/*function Soeom(x) {
 let SumX=x.reduce(add,0);
 function add(a,b) {
 return a+b
 }
 return SumX
 }
 console.log(Soeom(mas));

 let ler =[12,45,67,878,654,767];
 console.log(Soeom(ler));*/


// -1. Функция-приветстве. Функция принимает коллбек(любой) и исполняет его. Колбек выводит "ПРИВЕТ!"
/*function Callback(x) {
 x()
 }
 function SayHi() {
 console.log('Привет')
 }
 Callback(SayHi);*/

// 2. Функция принимает аргумент и коллбек и выводит этот аргумент через колбек.

/*function One(fun, val) {
 fun();
 console.log(val)
 }
 function Two() {
 }
 One(Two, 2);*/


// 3. Функция принимает 2 числа и колбек,
//     и выводит результат арифметического действия над этими числами.
//     действие описывается в колбеке
/*function Calculator(a,b, callback) {
 let res = callback(a,b);
 return res
 }
 let resultst = Calculator(10,20, function (a,b) {
 return a+b
 });
 console.log(resultst);*/



// 4. Функция принимает масиив и колбек.
//     Вывести данный массив при помощи колбека (по возрастанию и по убыванию)

// let ar = [3, 5, 8, 12, 34, 2, 55, 67, 89, 23, 6];
// function Callback(sor) {
//     sor()
// }
// function Up() {
//     let upSort = ar.sort(function (a, b) {
//         return a - b
//     });
//     console.log(upSort);
// }
// function Down() {
//     let downSort = ar.sort(function (a, b) {
//         return b - a
//     });
//     console.log(downSort);
// }
//
// Callback(Down);
// Callback(Up);

// 4. Функция принимает масиив и колбек.
//     Вывести данный массив при помощи колбека (по возрастанию и по убыванию)
/*let tHis = [2, 7, 9, 0, 12, 22, 57, -22];
 function Action(mas, callback) {
 let sortedMas = mas.sort(callback);
 return sortedMas
 }
 function getSortUP() {
 console.log(Action(tHis, (function (a, b) {
 return a - b
 }))
 );
 }
 function getSortDown() {
 console.log(Action(tHis, (function (a, b) {
 return b - a
 }))
 );
 }
 Action(tHis,getSortUP());
 Action(tHis,getSortDown());*/

// Работа с функциями массивов
// 5.
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

/*let a = [1, 2, 3],
 b=[4, 5, 6];
 function Contact (a,b) {
 let cont=a.concat(b);
 return cont
 }
 console.log(Contact(a, b));*/

// 6.
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 3, 'c', 5, 'e']
/*let old=[1, 2, 3, 4, 5];
 function NewMas(a) {
 a.splice(1,1,'a','b');
 let a2 = a;
 a2.splice(4,1,'c');
 let a3 = a2;
 a3.splice(6,0,'e');
 return a3
 }
 let nEw = NewMas(old);
 console.log(nEw);*/


// 1.функция принимает два числовых массива и колбек
// который должен исполнять действия над этими массивами
// смысл дейсвтий :
//     - перебрать массивы, сложть их значения и вернуть результат для дальнейшего  использования
/*let a = [1, 2, 3, 4, 5],
    b = [5, 4, 3, 2, 1];*/
/*let c = [3, 3, 3],
 d = [1, 1, 1];

 function SunMasive(a, b) {
 let suma = 0,
 sumb = 0;
 for (let i = 0; i < a.length; i++) {
 suma = suma + a[i];
 }
 for (let i = 0; i < b.length; i++) {
 sumb = sumb + b[i];
 }
 let s = suma + sumb;
 return s
 }

 console.log(SunMasive(a, b));
 console.log(SunMasive(c, d));*/

// - перебрать массивы, сложить их ячейки с одинаковым индексом и вернуть единый
// массив для дальнейшего использования.
/*
 function AplusB(a,b) {
 let a_plus_b = [];
 for (let i = 0; i < a.length; i++) {
 a_plus_b.push(a[i] + b[i])
 }
 return a_plus_b
 }
 let x=[1,3],y=[1,3];
 console.log(AplusB(x,y));
 */

// - из двух массивов создать один, который будкт отсортирован в порядке возрастания
// и вернуть его для дальнейшего использования.

/*let c = [23, 44, 11],
 d = [1, 13, 16];

 function Contact (a,b) {
 let cont=a.concat(b);
 cont.sort();
 return cont
 }
 console.log(Contact(c, d));*/


// - из двух массивов создать один,
//     который не будет включать в себя неуникальные элементы
// и вернуть его для дальнейшего использования

/*
let w = [1, 2, 3],
    e = [2, 3, 4];*/

/*
 function Contact (a,b) {
 let cont=a.concat(b);
 return cont
 }
 let c=Contact(w,e);
 console.log(c);


 // для "стрінг" і для 'нам'
 function Unikal(c) {
 let unic = [];

 for (let i = 0; i < c.length; i++) {
 let num = c[i];
 unic[num] = true
 }
 return Object.keys(unic)
 }
 console.log(Unikal(c));
 */

/*
 let r=[12,13,14,15],t=[14,13,12,11];

 function GUval(a,b) {

 function Contact(a, b) {
 let cont = a.concat(b);
 return cont
 }
 let c = Contact(a, b);
 function Unikal(c) {
 let unic = [];

 for (let i = 0; i < c.length; i++) {
 let num = c[i];
 unic[num] = true
 }
 return Object.keys(unic)
 }
 return Unikal(c)
 }

 console.log(GUval(w,e));
 console.log(GUval(a,b));
 console.log(GUval(r,t));
 */

// 2
// Дан массив с числами.
//     Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];*/

/*function checking_nibh(a) {
 for (let i = 0; i < a.length; i++) {
 if (a[i] === a[i - 1]) {
 return 'Yes';
 }
 }
 return 'No'
 }
 console.log(checking_nibh(arr));*/


/*3
 создать функции которые:
 1. Берет массив и находит в нем позицию конкертного числа, которое вы зададите как второй аргумент*/
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];*/

/*function checking_num(arr, num) {
 for (let i = 0; i < a.length; i++) {
 if (a[i] = num) {
 return `Index is: ${arr.indexOf(num)}`
 }
 }
 }
 console.log(checking_num(arr, 5));*/

// 2. берет два массива и складывает их значения по соответствующим индексам и возварщает результирующий массив
// т.е первое число из первого массива + первое чосло из второго массива.

/*let c = [3, 3, 3],
    d = [1, 1, 1];

function SunMasiveV2(a, b) {
    if (a.length === b.length) {
        let suma = 0,
            sumb = 0;
        for (let i = 0; i < a.length; i++) {
            suma = suma + a[i];
        }
        for (let i = 0; i < b.length; i++) {
            sumb = sumb + b[i];
        }
        let s = suma + sumb;
        return s
    }
else {return 'Довжина масивів різна, операці не можлива'}
}
console.log(SunMasiveV2(c, d));*/


// 3. Задание 2, но действие что делать с массивами определить через callback. Проверить работу на
// делении,вічитании,умножении и %

/*let a = [9, 17, 11],
    b = [4, 7, 5];

function Operation(action, a, b) {
    return action(a,b)
}

function AplusB(a,b) {
    let a_plus_b = [];
    for (let i = 0; i < a.length; i++) {
        a_plus_b.push(a[i] % b[i])
    }
    return a_plus_b
}

console.log(Operation(AplusB,a,b));*/