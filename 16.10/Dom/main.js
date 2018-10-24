/*
 let x=Math.round(Math.random()*100);

 console.log(x);*/
/*
 let lis= document.getElementsByClassName('list');
 console.log(lis);

 lis.style.background =`#ff8b20`;*/


/*let send1 = document.getElementById('send1');

 send1.onclick=function (eventObj) {
 console.log(eventObj);

 };*/


// ONE COUB
document.getElementById('fil').onclick = (function (x) {
    console.log(x.clientX, x.clientY);
    this.style.background = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
});

// Tree coub )
document.getElementById('d3').addEventListener('click', function (e) {
        console.log('Big');
        this.style.background = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    }, false
);
document.getElementById('d2').addEventListener('click', function (e) {
        console.log('Midle');
        this.style.background = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    }, false
);
document.getElementById('d1').addEventListener('click', function (e) {
        console.log('Litle');
        this.style.background = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    }, true
);


// Enter of Text
let w1 = document.getElementById('w1');
document.getElementById('q1').oninput = function () {

    w1.innerText = this.value;
};

let w2 = document.getElementById('w2');
document.getElementById('q2').oninput = function () {
    w2.innerText = this.value;
};

let w3 = document.getElementById('w3');
document.getElementById('q3').oninput = function () {
    w3.innerText = this.value;
};

/*
 let map;
 function initMapX() {
 navigator.geolocation.getCurrentPosition(function (pos){
 map = new new google.maps.Map(document.getElementById('map'),{
 center:{lat:pos.cords.latitude, lng:pos.cords.latitude},
 zoom: 4
 })

 })
 }*/

/*
 function initMap(ads) {
 let uluru = {lat: -25.344, lng: 131.036};

 let map = new google.maps.Map(document.getElementById('map'), {
 zoom: 4,
 center: uluru
 });

 }
 */


let cl = new Promise((reslove, reject) => {
    setTimeout(function () {
        let started = true;
        if (started) reslove('room is clean');
        else reject('WTF?')
    }, 1500);
cl.then(value =>{console.log(value)})
});






