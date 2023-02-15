// Обьект
var user = {
    name: 'Aidana',
    surname: 'Bekova',
    secondNumber: null,
    address: {
        sity: 'Bishkek',
        street: undefined,
        car: {
            d: {
                f: {
                    d: 'sd'
                }
            }
        }
    },
    isMarried: false
}

// добавление
user.laptop = 'mac'
console.log(user);

// delete
delete user.laptop
console.log(user);

// методы обьекта
console.log(Object.keys(user)); //['name', 'surname', 'secondNumber', 'address', 'isMarried']

console.log(Object.values(user)); // ['Aidana', 'Bekova', null, {…}, false]

console.log(Object.entries(user));

//Результат в консоли: [Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Aidana']
// 1: (2) ['surname', 'Bekova']
// 2: (2) ['secondNumber', null]
// 3: (2) ['address', {…}]
// 4: (2) ['isMarried', false]
// length: 5

console.log(user.hasOwnProperty('name'));