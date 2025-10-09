function sum() {
    var x = 0;
    for (var i = 0; i < arguments.length; ++i) {
        x += arguments[i];
    }
    console.log(x);
}

sum(1, 2); // returns 3
sum(1, 2, 3); // returns 6
