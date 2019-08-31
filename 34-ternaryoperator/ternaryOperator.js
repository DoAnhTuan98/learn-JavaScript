function tossCoin() {
    var value = Math.random();
    var result = (value < 0.5)? 'mat ngua' : 'mat sap';
    console.log(result);
}
tossCoin();
