// i. variable
// 1. 3 type variable
const string = "text";
const number = 10;
const boolean = true;

// 2. let and const
let age = 20;
age = 21;

const myName = "Rokib";

// ii. operators
// 3. (+, -, *, /, %)
const number1 = 10;
const number2 = 5;

const add = number1 + number2;
// console.log(add);
const minus = number1 - number2;
// console.log(minus);
const multiply = number1 * number2;
// console.log(multiply);
const divided = number1 / number2;
// console.log(divided);
const remain = number1 % number2;
// console.log(remain);

// iii. conditions
// 4. (<, >, ==, !=, <=, >=, &&, ||), if, else if, else;
const num1 = 100;
const num2 = 200;

if (num1 < num2) {
    // console.log("num1 is small");
}
else {
    // console.log(false);
}
if (num1 > num2) {
    // console.log("num1 is big");
}
else {
    // console.log(false);
}
if (num1 == num2) {
    // console.log("num1 and num2 is equal");
}
else {
    // console.log(false);
}
if (num1 != num2) {
    // console.log("num1 and num2 is not equal");
}
else {
    // console.log(false);
}
if (num1 <= num2) {
    // console.log("num1 is less than or equal num2");
}
else {
    // console.log(false);
}
if (num1 >= num2) {
    // console.log("num1 is greater than or equal num2");
}
else {
    // console.log(false);
}

// 5. &&, ||
if (num1 > num2 && num1 < 300) {
    // console.log(true);
}
else {
    // console.log(false);
};

if (num1 != num2 || num2 <= 200) {
    // console.log(true);
}
else {
    // console.log(false);
};

// 6. if, else if, else
const hisName = "Rokib";
const hisAge = 21;
const hisJob = "Web Developer";

if (hisAge >= 24 && hisAge <= 26) {
    // console.log("he is ready for married");
}
else if (hisAge <= 22 || hisJob == "Web Developer") {
    // console.log("he is ready to go japan");
}
else if (hisName != "Rokib") {
    // console.log("he is not Rokib, so good bye.");
}
else {
    // console.log("money is power");
};

// iv. loop
// 7. (while, for)
let i = 7;
while (i <= 19) {
    if (i % 2 !== 0) {
        // console.log(i);
    }
    i++;
};

// v. array
// 8. length, index[], splice()
const friends = ["rakib", "sofi", "rokib", "masum", "nasir", "asraful"];

// console.log(friends.length);

friends[4] = "aynal";
// console.log(friends);

friends.splice(3, 1, "alom", "abdulla");
// console.log(friends);

// 9. print all element from an arr with loop
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    // console.log(friend);
};

// 10. print above number 80
const numbers = [90, 78, 122, 45, 222, 80, 678, 94];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // if (number > 80) {
    //     console.log(number);
    // }
    if (number <= 80) {
        continue;
    }
    else {
        // console.log(number);
    }
};

// vi. function
// 11. multiply 3 num and return;
function multiplyNum(n1, n2, n3) {
    const result = n1 * n2 * n3;
    return result;
};

const result = multiplyNum(10, 10, 10);
// console.log(result);

// vii. object
// 12. declare a obj and change any property value;
const rakib = {
    gf: "no",
    age: 21,
    address: "bangladesh",
};

// set system 1
rakib.gf = "i have no gf";
// console.log(rakib);

// set system 2
rakib["age"] = "i'm 21";
// console.log(rakib);

// set system 3
const newAddress = "address";
rakib[newAddress] = "japan";
// console.log(rakib);

//

// get system 1
const gf = rakib.gf;
// console.log(gf);

// get system 2
const myAge = rakib["age"];
// console.log(myAge);

// get system 3
const location = "address";
const myAddress = rakib[location];
console.log(myAddress);
