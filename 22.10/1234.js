function First (x) {
 x()
}
function Second() {
   console.log('Hi from callback')
}


First(Second);
