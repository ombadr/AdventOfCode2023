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


console.log(partOne('./input.txt'))