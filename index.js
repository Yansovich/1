// 1

const stringTask = `Все избранные статьи отмечены маленькой золотой звёздочкой в верхнем правом углу своей страницы, 
а также шаблоном внизу статьи и на странице обсуждения.`

function countOccurrences(text, searchText) {
    let occurrences = []
    let index = text.indexOf(searchText)

    while (index !== -1) {
        occurrences.push(index)
        index = text.indexOf(searchText, index + 1)
    }
    return occurrences
}

console.log(countOccurrences(stringTask, 'статьи'))

// 2

// let allOccurrences = []
// let i = ''

// function findAllOccurrences ( ) {
//     for (let i in stringTask) {
//         if (i === '0') continue
//         console.log('in', stringTask[i]);
//     }

// }
// console.log(findAllOccurrences(stringTask, 'статьи'))

function findAllOccurrences (param, searchText) {}


// 3

const stringTask1 = '123Q'
const stringTask2 = '//jlklhh123Q.'

function checkAllCharactes(str1, str2) {
    const requiredSymbolLength = str1.length
    let counter = 0
    for (let char of str1) {
        if (!str2.includes(char)) {
            console.log('checkAllCharactes', false);
            return false
        } else {
            console.log('checkAllCharactes', true);
            counter++
        }
    }
    return counter === requiredSymbolLength
}

console.log(checkAllCharactes(stringTask1, stringTask2));
