var arr = [
    null, 
    123, 
    undefined, 
    null, 
    'qwerty', 
    34, 
    65, 
    undefined, 
    null, 
    null, 
    43, 
    'aerg', 
    'пкцйк'
]
//   console.log(typeof arr[4]);

var typeNull = []
var typeNumber = []
var typeString = []
var typeUndefined = []

for(var i = 0; i < arr.length; i++) {
    if(arr[i] === null){
        typeNull.push(arr[i])

    }else if(typeof arr[i] == 'number'){
        typeNumber.push(arr[i])

    }else if(typeof arr[i] == 'undefined'){
        typeUndefined.push(arr[i])

    }else if(typeof arr[i] == 'string'){
        typeString.push(arr[i])

    }
    
}

console.log(typeNull);
console.log(typeNumber);
console.log(typeString);
console.log(typeUndefined);

