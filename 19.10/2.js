let Pesson = {
    constructor: function (name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    greet: function () {
        console.log(`Hi my name is ${this.name}, i'm ${this.age}`);
    }};


let first, second, third;

first = Object.create(Pesson).constructor('Jone', 33, 'm');
second = Object.create(Pesson).constructor('Root', 32, 'm');
third = Object.create(Pesson).constructor('Karl', 31, 'm');

first.greet();
second.greet();
third.greet();

console.log(Pesson.isPrototypeOf(first));



let dew = Object.create(Pesson);
dew.constructor = function(name, age, skills) {
    Pesson.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};

dew.develop =function () {
    console.log(`Working ${this.name}!`)
};

let jun;
jun = Object.create(dew).constructor('Nick', 21, 'm', ['html', 'css', 'java']);
console.log();

jun.develop();
jun.greet();



let array =['aa','efwfwfe','fwefwwf','fwfwfwf','fewfwfw','berfd nf','aa','ewfvd','vddfm ','vdfvdvdv','vddvdfvdvf',
    'aavddvf','vdvdsv','csdcscvdfd','dcsdcscdsc','aa','csdscdds','csdsdcd','dfsc'];

console.log(array.indexOf('aa'));











