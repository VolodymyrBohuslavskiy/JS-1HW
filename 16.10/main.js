function OO(st) {
    if (st < 10){
        console.log(st);
    st++;
    OO(st);}
}
OO(-10);