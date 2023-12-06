import fs from 'fs';


function partOne(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')
    let total = 0

    for (let line of lines) {
        let [cardId, data] = line.split(': ')
        let [winningStr, pickedStr] = data.split('|')
        let winningNumbers = []
        let pickedNumbers = []

        let match
        let pattern = /\d+/g

        while ((match = pattern.exec(winningStr)) !== null) {
            winningNumbers.push(match[0])
        }

        while ((match = pattern.exec(pickedStr)) !== null) {
            pickedNumbers.push(match[0])
        }

        let count = 0

        for (let winningNum of winningNumbers) {
            if (pickedNumbers.includes(winningNum)) {
                count++
            }
        }

        total += (count !== 0) ? Math.pow(2, count - 1) : 0
    }

    return total

}

console.log(partOne('./input.txt'))

function partTwo(file) {

}