/*
 1. Функция-приветстве. Функция принимает коллбек(любой) и исполняет его. Колбек выводит "ПРИВЕТ!"

 function one(g) {
 g();
 }
 function two() {
 console.log('Hello !');
 }
 one(two);

 2. Функция принимает аргумент и коллбек и выводит этот аргумент через колбек.

 function two(arg, collback){
 collback(arg)}
 two(2,function three (a) {
 console.log(a)
 });


 3. Функция принимает 2 числа и колбек,
 и выводит результат арифметического действия над этими числами.
 действие описывается в колбеке

 function outer (a, b, collback) {
 let result = collback(a, b);
 return result;
 }

 let res = outer(2,2,function (a, b) {
 return a/b
 });

 console.log(res);

 4. Функция принимает масиив и колбек.
 Вывести данный массив при помощи колбека (по возрастанию и по убыванию)

 function masive([a, b, c, d, e, r, t], calback) {
 let sort1 = calback([a, b, c, d, e, r, t]);
 return sort1.sort()
 }
 let sort2 = masive([5,3,4,2,8,7,9],function (b,) {
 return b
 });
 console.log(sort2);

 function masive([a, b, c, d, e, r, t], calback) {
 let sort1 = calback([a, b, c, d, e, r, t]);
 return sort1.sort()
 }
 let sort2 = masive([5,3,4,2,8,7,9],function (b,) {
 return b
 });
 console.log(sort2.reverse());


 Работа с функциями массивов
 5.
 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

 let mas1=[1, 2, 3];
 let mas2=[4, 5, 6];

 let mas3= mas1.concat(mas2);

 console.log(mas3);

 6.
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 3, 'c', 5, 'e']
 */

//




/*створити метод який :
1. приймає три числа та виводить та повертає найменьше.

 let x= Math.min(1, 2, 3);

 console.log(x);

2. приймає три числа та виводить та повертає найбільше.

 let x= Math.max(1, 2, 3);

 console.log(x);

3. приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
4. виводить масив
5. повертає найбільше число з масиву
6. повертає найменьше число з масиву
7. виводить масив, але напрямок вивденння(сходження\ спадання) визначається колбеком*/

let masNum = [1, 2, 3, 4, 5];

 masNum.splice(1, 1, 'a','b');


console.log(masNum);

