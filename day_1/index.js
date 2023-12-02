import fs from 'fs';


function partOne(file) {

    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')

    const values = lines.map((line) => {
        let first = line.split('').find((v) => !isNaN(parseInt(v)))
        let last = line.split('').findLast((v) => !isNaN(parseInt(v)))
        return Number(first + last)
    })

    return values.reduce((s, v) => s + v, 0)
}


// console.log(partOne('./input.txt'))

const firstNumberWordsRegExp = new RegExp([
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
].join('|')); // transform the array in a regular expression


const lastNumberWordsRegExp = new RegExp([
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
].join('|').split('').reverse().join(''));


const wordMap = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}

function partTwo(file) {

    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')

    const values = lines.map((line) => {
        let firstNumberIndex = line
            .split('')
            .findIndex((v) => !isNaN(parseInt(v)))

        let firstWordMatch = line.match(firstNumberWordsRegExp);

        let firstWordNumberIndex = firstWordMatch?.index



        let firstNumber = firstNumberIndex != -1 ? (firstWordMatch ? (firstNumberIndex < firstWordNumberIndex ? line[firstNumberIndex] : wordMap[firstWordMatch[0]]) : line[firstNumberIndex]) : wordMap[firstWordMatch[0]]

        let lastNumberIndex = line.split('').findLastIndex((v) => !isNaN(parseInt(v)))

        let lastWordMatch = line
            .split('')
            .reverse()
            .join('').match(lastNumberWordsRegExp);

        let lastWordNumberIndex = lastWordMatch ? line.length - 1 - lastWordMatch.index : null




        let lastNumber = lastNumberIndex != -1 ? (lastWordMatch ? (lastNumberIndex > lastWordNumberIndex ? line[lastNumberIndex] : wordMap[lastWordMatch[0].split('').reverse().join('')]) : line[lastNumberIndex]) : wordMap[lastWordMatch[0].split('').reverse().join('')]


        console.log(firstNumber, lastNumber)
        return Number(firstNumber + lastNumber)
    })

    return values.reduce((s, v) => s + v, 0)
}

console.log(partTwo('./input.txt'))