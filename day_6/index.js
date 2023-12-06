import fs from 'fs'

function partOne(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')

    console.log(lines)

    let times = []
    let distances = []
    let total = 1

    let match
    let pattern = /\d+/g

    while ((match = pattern.exec(lines[0])) !== null) {
        times.push(parseInt(match[0]))
    }

    while ((match = pattern.exec(lines[1])) !== null) {
        distances.push(parseInt(match[0]))
    }

    for (let i = 0; i < times.length; i++) {
        let waysToWin = 0
        for (let buttonLength = 0; buttonLength < times[i]; buttonLength++) {
            if ((times[i] - buttonLength) * buttonLength > distances[i]) {
                waysToWin++
            }
        }
        total *= waysToWin
    }

    return total
}



function partTwo(file) {

    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')

    let times = []
    let distances = []
    let total = 1

    let match
    let pattern = /\d+/g

    while ((match = pattern.exec(lines[0])) !== null) {
        times.push(match[0])
    }

    while ((match = pattern.exec(lines[1])) !== null) {
        distances.push(match[0])
    }

    let time = parseInt(times.join(''))
    let distance = parseInt(distances.join(''))


    let waysToWin = 0
    for (let buttonLength = 0; buttonLength < time; buttonLength++) {
        if ((time - buttonLength) * buttonLength > distance) {
            waysToWin++
        }
    }


    return waysToWin
}

console.log(partTwo('./input.txt'))