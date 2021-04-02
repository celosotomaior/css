x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    console.log(x);
    console.log(a);
    var f = function(a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b);
    var x = 10;
}

// c(8, 9, 10);
// console.log(b);
// console.log(x);

var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
}
// bar();
// var foo = 1;
// bar();

var add = (function() {
    var counter = 0;
    return function() {
        return counter += 1;
    }

});

// console.log(add()());
// console.log(add()());
// console.log(add()());

//revealing module pattern
var count = (function() {
    var counter = 0;
    const getCounter = function() {
        return counter;
    }

    const add = function() {
        return counter += 1;
    }

    const reset = function() {
        counter = 0;
    }

    return {
        getCounter,
        add,
        reset
    }

})();

console.log(count.getCounter());
count.add();
console.log(count.getCounter());
console.log(count.add());
count.reset();
console.log(count.getCounter());