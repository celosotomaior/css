// /**
//  * W1D5 – Lab Assignment 5 / Homework
//  */

// /**
//  * 1. Define a function max() that takes two numbers as arguments and returns the largest of them.
//  *  Use the if-then-else construct available in Javascript.
//  */

// function max(n1, n2) {
//     return n1 > n2 ? n1 : n2;
// }

// /**
//  * 2. Define a function maxOfThree() that takes three numbers as arguments and returns the 
//  *   largest of them.
//  */

// const maxOfThree = function(n1, n2, n3) {
//     return Math.max(n1, n2, n3);

// }

// /**
//  * 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and 
//  * returns true if it is a vowel, false otherwise.
//  */

// // const isVowel = (letter) => {
// //       let elment = letter.charAt(0)
// //       if(elment === "a" || elment === "e" ||
// //       elment === "i"  || elment === "o"  || elment === "u" ) return true;

// //       else
// //         return false;

// // };
// const isVowel = function(letter) {
//     let r = false;
//     letter = letter.tolower();
//     switch (letter) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             r = true;
//             brake;
//     }
//     return r;
// };

// /**
//  * 4.Define a function sum() and a function multiply() that sums and multiplies
//  *   (respectively) all the numbers in an input array of numbers. For example, 
//  *   sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. 
//  *   Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
//  */

// const sum = (arry) => {
//     const summ = arry.reduce((x, y) => x + y) // reduce ( (accumlator, current) => acc + currnt )
//     return summ;
// }

// const multiply = (arry) => {
//     const prdct = arry.reduce((x, y) => x * y) // reduce ( (accumlator, current) => acc + currnt )
//     return prdct;
// }

// /**
//  * 5. Define a function reverse() that computes the reversal of a string. For example, 
//  *    reverse("jag testar") should return the string "ratset gaj".
//  */

// function reverse(string) {
//     let i = string.length - 1;
//     let result = string.charAt(i--);
//     while (i >= 0)
//         result += string.charAt(i--);
//     return result;
// };

// /**
//  * 6. Write a function findLongestWord() that takes an array of words and returns the
//  *    length of the longest one.
//  */

// function findLongestWord(arry) {
//     let maxlength = arry[0].length;
//     let maxindex = 0;
//     for (i = 1; i < arry.length; i++) {
//         let length = arry[i].length;
//         maxindex = length > maxlength ? i : maxindex;
//     }
//     return arry[maxindex];
// }

// /**
//  * 7. Write a function filterLongWords() that takes an array of words and 
//  *   an integer i and returns a new array containing only those words that 
//  * were longer than i characters.
//  */

// function filterLongWords(arry, i) {
//     return arry.filter(element => element.length > i);
// };

// /**
//  * 8. Write a function named, computeSumOfSquares, that takes as input,
//  *  an array of numbers and calculates and returns the sum of the squares
//  *  of each number in the input array. E.g. computeSumOfSquares([1,2,3])
//  *  should be computed as 12 + 22 +32 = 14. Note: Write your Javascript 
//  * code without using Imperative programming. i.e. Do NOT use any explicit 
//  * looping construct; instead use functional programming style/approach.
//  */

// function computeSumOfSquares(arry) {
//     const arry2 = arry.map(element => element * element);
//     const sumr = arry2.reduce((x, y) => x + y);
//     return sumr;
// };

// /**
//  * 9. Write a function named, printOddNumbersOnly, that takes as input,
//  *  an array of integral numbers and it finds and prints only the numbers 
//  * which are odd.
//  */

// function printOddNumbersOnly(arry) {
//     return arry.filter(element => element % 2 != 0);
// }

// /**
//  * 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes 
//  * as input, an array of integral numbers and calculates and returns the 
//  * sum of the squares of only the even numbers in the input array.
//  *  E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed 
//  * as 22 +42 = 20.
//  */
// function computeSumOfSquaresOfEvensOnly(arry) {
//     let arry2 = arry.filter(element => element % 2 === 0)
//     let sum = arry2.reduce((x, y) => x * x + y * y);
//     return sum;
// }

// /**
//  * 11. Using the Array.reduce(…) function, re-implement your functions,
//  * sum(…) and multiply(…) (defined in Problem 4 above) without using 
//  * Imperative programming. i.e. Do NOT use any explicit looping construct;
//  * instead use functional programming style/approach. 
//  */

// const sum2 = (arry) => {
//     const summ = arry.reduce((x, y) => x + y) // reduce ( (accumlator, current) => acc + currnt )
//     return summ;
// }

// const multiply2 = (arry) => {
//     const prdct = arry.reduce((x, y) => x * y) // reduce ( (accumlator, current) => acc + currnt )
//     return prdct;
// }

// /**
//  * 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, 
//  * an array of numbers and finds and returns the second biggest of the numbers. For example, 
//  * findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12])
//  *  should return 12. (Note: Do not use sorting!)
//  */
// function findSecondBiggest(ary) {

//     let maxIndex = 0;
//     let secondMaxIndex = ary[0] > ary[1] ? 1 : 0;
//     let max = ary[maxIndex];
//     let secondMax = ary[secondMaxIndex];

//     for (i = 0; i < ary.length; i++) {
//         let element = ary[i];
//         if (max < element) {
//             max = element;
//             maxindex = i;
//         }
//     }

//     for (i = 0; i < ary.length; i++) {
//         let element = ary[i];
//         if (secondMax < element && maxIndex != i) {
//             secondMax = element;
//             secondMax = i;
//         }
//         return [secondMax, max];
//     }
// };


// /**
//  * 13. Write a function named printFibo, that takes as
//  * input, a given length, n, and any two starting numbers a and b, and it prints-out 
//  * the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given 
//  * length, beginning with a and b. (e.g. printFibo(n=1, 
//  * a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1),
//  *  prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), 
//  * prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), 
//  * prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), 
//  * prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
//  */


// function printFibo(n, a, b) {
//     let counter = 0;
//     let out = [a, b];
//     while (counter < n - 2) {
//         out.push(out[counter] + out[counter + 1]);
//         counter++;
//     }

//     console.log(out);
// }

// /**
//  * 14 . should be dne on assign#4 Form
//  */

// /**
//  * 15. Using JavaScript and HTML and CSS, implement a webpage that displays a working, 
//  * ticking counter Clock, that counts/displays the current Date and time of the browser host, 
//  * in the format: 2019-11-4 12:16:01  
//  */

// function getCurrentDate() {
//     const currentDate = new Date().toLocaleString();
//     const h1Time = document.getElementById("h1Time");
//     h1Time.innerText = currentDate;
// }

// function startclock() {
//     setInterval(getCurrentDate, 1000);
// }
// startclock();


//Question 1
function max(n1, n2) {
    if (n1 > n2) return n1;
    else return n2;
}
console.log(max(1, 2));

//Question 2
function maxOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) return n1;
    else if (n2 > n1 && n2 > n3) return n2;
    else return n3;
}
console.log(maxOfThree(1, 2, 3));

//Question 3
function isVowelOption1(x) {
    var listOfVowels = "aAeEiIoOuU";
    return x.length == 1 && listOfVowels.indexOf(x) > -1;
}
console.log(isVowelOption1('a'));

//Testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee TODO
function isVowelOption2(x) {
    var lowerX = x.toLowerCase();
    var result = false;
    switch (lowerX) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            result = true;
            break;
    }
    return result;
}
console.log(isVowelOption2('a'));

//Question 4
function sum(array) {
    var result = 0;
    for (let index = 0; index < array.length; index++) {
        result += array[index];
    }
    return result;
}
console.log(sum([1, 2, 3]));

function multiply(array) {
    var result = null;
    if (array.length >= 1) {
        result = array[0];
        for (let index = 1; index < array.length; index++) {
            result *= array[index];
        }
    }
    return result;
}
console.log(multiply([1, 2, 3]));

//Question 5
function reverseV1(string) {
    var result = '';
    for (let index = string.length - 1; index >= 0; index--) {
        result += string[index];
    }
    return result;
}
console.log(reverseV1('abcde'));

function reverseV2(string) {
    var result = [];
    for (let index = string.length - 1; index >= 0; index--) {
        result.push(string[index]);
    }
    return result.join("");
}
console.log(reverseV2('abcde'));

//Question 6
function findLongestWord(array) {
    var longest = 0;
    for (let index = 0; index < array.length; index++) {
        if (longest < array[index].length) longest = array[index].length;
    }
    return longest;
}
console.log(findLongestWord(['a', 'ab', 'abc', 'abcd', 'abcde']));

//Question 7
function filterLongWords(array, wordSize) {
    var newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].length > wordSize) newArray[newArray.length++] = array[index];
    }
    return newArray;
}
console.log(filterLongWords(['a', 'ab', 'abc', 'abcd', 'abcde'], 3));

function filterLongWordsFunc(array, wordSize) {
    return array.filter(word => word.length > wordSize);
}
console.log(filterLongWordsFunc(['a', 'ab', 'abc', 'abcd', 'abcde'], 3));


//Question 8
function computeSumOfSquares(array) {
    var result = array.reduce((x, y) => x + Math.pow(y, 2));
    return result;
}
console.log(computeSumOfSquares([1, 2, 3, 4]));

//Question 9
function printOddNumbersOnly(array) {
    console.log(array.filter(function(element, index, array) {
        return element % 2 !== 0;
    }));
}
console.log(printOddNumbersOnly([1, 2, 3, 4]));

//Question 10
function computeSumOfSquaresOfEvensOnly(array) {
    return array.filter(element => element % 2 === 0).map(e => e * e).reduce((x, y) => x + y);
}
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4]));

//Question 11
function sumFunctionalWay(array) {
    var result = array.reduce((x, y) => x + y);
    return result;
}
console.log(sumFunctionalWay([1, 2, 3, 4]));

function multiplyFunctionalWay(array) {
    if (array.length < 1)
        throw new Error('Invalid Input');
    var result = array.reduce((x, y) => x * y, 1); //this one if to specify that the first element should be one to avoid 0 if is the first element of the array
    return result;
}
console.log(multiplyFunctionalWay([1, 2, 3, 4]));

//Question 12
function findSecondBiggest(array) {
    if (array.length < 2)
        throw new Error('Invalid size. Must have at least two elements');

    let biggest = (array[0] > array[0]) ? array[0] : array[1];
    let secondBiggest = (biggest === array[0]) ? array[1] : array[0];

    for (let index = 2; index < array.length; index++) {
        if (array[index] > biggest) {
            secondBiggest = biggest;
            biggest = array[index];
        } else if (array[index] > secondBiggest) {
            secondBiggest = array[index];
        }
    }
    return secondBiggest;
}
console.log(findSecondBiggest([1, 2, 3, 4]));

//Question 13
function printFibo(n, a, b) {
    if (n === 0) return;
    if (n === 1) return a;
    else if (n === 2) return `${a}, ${b}`;
    else {
        let counter = 0;
        let out = [a, b];
        while (counter < n - 2) {
            out.push(out[counter] + out[counter + 1]);
            counter++;
        }
        return out;
    }
}
console.log(printFibo(5, 0, 1));

//Try 13 using recursion
//Try 13 using Functional Programming

//Question 14 (see webform pages)

//Question 15
function getCurrentDate() {
    const currentDate = new Date().toLocaleString();
    const h1Time = document.getElementById("h1Time");
    h1Time.innerText = currentDate;
}
setInterval(getCurrentDate, 1000);