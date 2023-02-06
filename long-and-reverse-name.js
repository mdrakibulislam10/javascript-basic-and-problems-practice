function longName(name1, name2) {
    let largest = "";
    let largestRevers = "";
    if (name1.length > name2.length) {
        largest = name1;
    }
    else {
        largest = name2;
    }

    for (let i = largest.length - 1; i >= 0; i--) {
        const letter = largest[i];
        largestRevers += letter;
    }
    return largestRevers;
};

const long = longName("Rakib", "Asraful");
console.log(long);