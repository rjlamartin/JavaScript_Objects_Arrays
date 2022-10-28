console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    //iterate over each value in the array
    //use each number in the sum
    arr.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log(arraySum(numbers));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook = {};

favBook.title = "The Hobbit";
favBook.author = "J.R.R Tolkien";
favBook.pageCount = 295;
favBook.readCount = 1;

console.log(favBook);

favBook.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} pages and has been read ${this.readCount} time.`;
};

console.log(favBook.info());

//Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let result = [];

    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord);
    }

    return result.join(" ");
}

console.log(reverseWords(sentence));


//Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let dataSplit = csvData.split("\n");

const headers = dataSplit[0].split(",");
console.log(headers);
const resultObjects = [];

for (let i = 1; i < dataSplit.length; i++){
    const values = dataSplit[i].split(",");
    console.log("Values: ", values);
    let obj = {};
    obj.name = values[0];
    obj.age = values[1];
    console.log("Object:", obj);
    resultObjects.push(obj);
}

console.log(resultObjects);

