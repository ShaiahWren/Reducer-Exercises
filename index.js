console.log('file loaded...');

const numArr = [1,2,3,4];

const reducerCallback = (acc, current) => {
    console.log("acc, currValue", acc, current);
    return acc + current;
}

const totalOne = numArr.reduce(reducerCallback, 0);
const totalTwo = numArr.reduce(reducerCallback, 1);

// console.log("Total is: ", totalTwo);

const letterArr = ['r', 'e', 'd', 'u', 'c', 'e', 'r'];

const word = letterArr.reduce(reducerCallback, 'x');

console.log("The word is:", word);

