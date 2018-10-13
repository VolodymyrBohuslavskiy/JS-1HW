/*function calculator(a,b, action) {
let res;
if (action=='+')res=a+b;
if (action=='-')res=a-b;
if (action=='*')res=a*b;
if (action=='/')res=a/b;
if (action=='%')res=a%b;
return res;
}
let x=calculator(9,2,'%');
console.log(x);*/

// function declaration
/*
function abb(a,b) {
return a+b;
}
function minus(a,b) {
return a-b;
}
function multy(a,b) {
return a*b;
}
function calculator(a,b, action) {
    console.log(arguments);
 let res;
 if (action=='+')res=abb(a,b);
 if (action=='-')res=minus(a,b);
 if (action=='*')res=multy(a,b);

 return res;
 }
 let x=calculator(5,5,'*');
 console.log(x);*/


// function expresion

/*
let foo =function (x,y) {
return x+y*x;
};
console.log(foo(100,200));
*/

/*
let user = {
    name:'Vasil',
    greeting:function () {console.log('Hello '+this.name)

}
};
user.greeting();
*/




/*
let user = {
    name:'Vasil',
    greeting:function () {console.log(`hello my name is ${this.name}`)

    }
};
user.greeting();
*/
let users=[
    {name:'Petro', age:31, status:true},
    {name:'Ivan', age:45, status:false},
    {name:'Yra', age:25, status:false},
    {name:'Andrew', age:30, status:true},
    {name:'Andrew', age:23, status:false},
    {name:'Miron', age:31, status:true},
    {name:'Andrew', age:29, status:true},
    {name:'Vasia', age:58, status:true},
    {name:'Vova', age:59, status:true},
    {name:'Slavic', age:44, status:true},
    {name:'Gunior', age:20, status:true},
];
/*let usersfilter = users.filter(function (user, index, array){
  // if (user.age<26)return true;
    console.log(user,array, index);
    return user.age>30;

});
console.log(usersfilter);*/

/*
let  sort = users.sort(function (curent, nextUser){
    // console.log(curent, nextUser);
return curent.age - nextUser.age;
});
console.log(sort);
*/


//сортування як попереднє

//let a=parseInt(prompt('Число А'));
//let b=parseInt(prompt('Число B'));
//let c=parseInt(prompt('Число C'));
//
//let numbers=[a,b,c];
//numbers.sort(function (a,b) {
//return a-b;
//});
//alert(numbers)


/*let map = users.map(function (user) {
user.age = user.age+11;
return user
});
console.log(map);*/
/*
let x= users.find(function (user) {
    return user.name='Yra';
});
console.log(x);*/

/*
let x=users.some(function (user) {
  return user.status;
});
console.log(x);*/


/*let x=users.every(function (user) {
 return user.age>=20
 });
 console.log(x);*/

/*
let x = [10, 20, 30, 40, 50, 60, 70, 80, 90].reduce(function (a, b) {
    console.log(a,"+",b);
    return a+b
});
console.log(x);
*/


/*function outer(callBack) {
    callBack();
}
outer(function () {
console.log('J-ch, o kurva !')
});*/

/*function calculator(a,b,calldack) {
    let result =calldack(a,b);
    return result
}

let rs = calculator(10,20,function (a, b) {
  return(10/20)
});
console.log(rs);*/


/*function colc(a,b,CB) {
let res = CB(a,b);
return res;
}

let rs = colc(2,3, function (x,y) {
     return 2+3

});
console.log(rs);*/

/*function first(i) {
console.log(1);
 i()
}
function second() {
console.log(2)
}
first(second);*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
function one(x) {
console.log(1);
x();
}
function two() {
console.log(2)
}
one(two);
*/



/*
class User {
    constructor(name,age, statuse, tel){
  this.name=name,
      this.age=age,
      this.statuse=statuse,
      this.tel=tel

    }
}

let user1=new User('Vasia', 56, true, 102);
let user2=new User('Pidor', 69, false, 103);

console.log(user1);
console.log(user2);



*/


/*lass User{

    constructor(name, age, surmame, tel) {
        this.name = name;
        this.age = age;
        this.surmame = surmame;
        this.tel = tel;

    }
    gr(){
        return `hello, my name is ${this.name}`
    }
}

let user1=new User('Pidor','Gnoynuy','Remni','0996565552');
let user2=new User('Petro','Gordiy','Ass','09922222222');

console.log(user1.gr());*/

// let obj1 = {
//     name:'Vasia',
//     surname:'Pups',
//     age:31,
//     status:false
// };
//
// let obj2 = {
//     name:'Petya',
//     surname:'Zalups',
//     age:33,
//     status:true
// };

/*class Pidors {
    constructor(name, surname, age, status) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.status = status;
    }
    gr(){
        return`hello, my name is ${this.name}`};

}
let user1 = new Pidors('Vasia','Pups',31,true);

let user2 = new  Pidors('Petya','Zalups',33,false);

console.log(user2.gr());*/














