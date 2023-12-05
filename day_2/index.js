import fs from 'fs';

const maxCount = {
    red: 12,
    green: 13,
    blue: 14
}

function partOne(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')
    // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

    return lines.map((line) => {
        return line.split(': ')[1].split('; ').map((set) => {
            const pulls = set.split(', ')
            return pulls.every((pull) => {
                const [count, color] = pull.split(' ')
                return maxCount[color] >= Number(count)
            })
        }).every(p => p)

    }).reduce((s, result, i) => {
        return result ? s + (i + 1) : s
    }, 0)
}

console.log(partOne('./input.txt'))