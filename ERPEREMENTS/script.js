let element = document.getElementById('awe');
element.onmousemove = function (e) {
    console.log(e.clientX, e.clientY);
this.style.background=`rgb(${e.clientX},${e.clientY},${e.clientX})`
};