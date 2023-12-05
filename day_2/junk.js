import fs from 'fs';

// Read the file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const gamesData = data.split('\n');

    console.log(gamesData)

    const newString = gamesData[0].replace('Game 1: ', '') // remove the first part Game 1 from the array

    let withoutSemicolumns = newString.replace(/;/g, '')

    let withoutCommas = withoutSemicolumns.replace(/,/g, '')

    let finalArray = withoutCommas.split(' ')


    console.log(finalArray)


    const rules = {
        'blue': 2,
        'red': 10,
        'green': 10
    }

    for (let i = 0; i < finalArray.length; i += 2) {
        let totVal = finalArray[i]
        let color = finalArray[i + 1]

        let pairObj = {
            color: color,
            totVal: parseInt(totVal, 10)
        }

        console.log(pairObj)

        switch (pairObj.color) {
            case 'blue':
                if (pairObj.totVal > rules['blue']) {
                    console.log('Blue is above')
                }
                break
            case 'red':
                if (pairObj.totVal > rules['red']) {
                    console.log('Red is above')
                }
                break
            case 'green':
                if (pairObj.totVal > rules['green']) {
                    console.log('Green is above')
                }
                break
            default:
                console.log('Nothing found')
        }



        // console.log(totVal, color)
    }

});

// if there is a string that is above remove the full string from the file
// sum all the game ids from the corrected file


