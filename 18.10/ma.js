/*
 console.log('Start');
 let data = 0;

 let myPromise = new Promise(function (resolve, reject) {
 if (data){
 resolve('resolve');
 }
 else{
 reject('reject');
 }
 });
 myPromise.then(function (data) {},function (data) {
 console.log(data)
 });

 console.log('Finish');*/



// Простий і зрозумілий приклад promise
/*let promise = new Promise((resolve, reject) => {
 let value = true;

 if (value) {
 resolve('This value is true')
 }
 else {
 reject('This value is falce')
 }
 });
 promise.then(resolved => console.log('Resolved'), erorr => console.log('Error'));


 setTimeout(()=> {},3000);

 */

// З таймаутом
/*
 let promise = new Promise((resolve, reject) => {

 setTimeout(()=> {
 let value=true;

 if (value) {
 resolve('This value is true')
 }
 else {
 reject('This value is falce')
 }
 },3000);
 });
 promise.then(resolved => console.log('Resolved'), erorr => console.log('Error'));

 setTimeout(()=> {console.log('yoy')},1000);

 promise.then(value =>{console.log(value)});
 */


// ______________________________________________________________________________________________________________________


function getMyPosition() {


    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(pos);
        let cords = {
            lat: pos.coords.latitude, Lng: pos.coords.longitude
        };
        resolve(cords)

    })
}

getMyPosition().then(value =>{console.log(value)});



































