import fs from 'fs'


function partOne(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')

    let total = 0

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        let numbers = []

        let match
        let pattern = /\d+/g

        while ((match = pattern.exec(lines[lineIndex])) !== null) {
            numbers.push({ start: match.index, end: pattern.lastIndex, number: match[0] })
        }


        for (let number of numbers) {
            let partOfSum = false
            for (let i = lineIndex - 1; i <= lineIndex + 1; i++) {
                for (let j = number.start - 1; j <= number.end; j++) {
                    if (i >= 0 && i < lines.length && j >= 0 && lines[lineIndex].length > j) {
                        if (isNaN(parseInt(lines[i][j])) && lines[i][j] != '.') {
                            partOfSum = true
                        }
                    }
                }

            }

            if (partOfSum) {
                console.log(number)
                total += parseInt(number.number)
            }

        }

    }

    return total
}

console.log(partOne('./input.txt'))

function partTwo(file) {

}

