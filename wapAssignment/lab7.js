1. undefined
a .8
b .8
c .9
d .10
e .1

2. Variables that are outside the

function are considered to be in the global scope, and can be accessed inside the

function and outside the

function, whereas local scope are variables that are declared inside a

function or a block, and can only be accessed inside that

function or block.

3.
a) No
b) Yes
c) No
d) Yes
e) Yes

4. a .81
b .25

5. 10
6.
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


7. Counter inside the

function is a free variable.A free variable is a variable which is defined outside the block of execution.Instances created will have access to that free variable by reference even after execution.(closure).

8.
make_adder: function(inc) {
    return counter + inc;
}
9. Wrap the code in “module pattern”.

10.
var student = (function() {
    var name;
    var age;
    var salary;

    function getAge() {
        return this.age;
    }

    function getSalary() {
        return this.salary;
    }

    function getName() {
        return this.name;
    }

    function publicSetAge(newAge) {
        this.age = newAge;
    }

    function publicSetSalary(newSalary) {
        this.salary = newSalary;
    }

    function publicSetName(newName) {
        this.name = newName;
    }

    function publicIncreaseSalary(percentage) {
        this.salary = getSalary() + getSalary() * percentage;
    }

    function publicIncrementAge() {
        this.age += 1;
    }
    return {
        setAge: publicSetAge,
        setSalary: publicSetSalary,
        setName: publicSetName,
        increaseSalary: publicIncreaseSalary,
        increamentAge: publicIncrementAge
    };
})();

11. Student.prototype.address = ”
    default”
Student.prototype.setAddress(newAddress) {
    This.address = newAddress;
}
Student.prototype.getAddress() {
    Return this.address;
}