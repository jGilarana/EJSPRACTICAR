// METODO FOREACH
var clase = [
    {

        nombre: 'jorge',
        edad: 18,
        alturacm: 200
    },

    {
        nombre: 'yeray',
        edad: 18,
        alturacm: 150
    },
    {
        nombre: 'Alvaro',
        edad: 18,
        alturacm: 300
    }]

clase.forEach(function (obj) {

    if (obj.edad == 18) { obj.edad = 24 }

    console.log(clase)
}
) * /


var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

var students = [{ name: 'Luis', email: 'luis@reboot' }, { name: 'Luigi', email: 'luigi@reboot' }];


numbers.forEach(function (item, index) {



    var jorge = numbers[item];


    console.log('El número de la posicion ' + index + ' es ' + item)


})




strings.forEach(function (item, index) {

    console.log('El número de la posicion ' + index + ' es ' + item)

})


students.forEach(function (item, index) {



    console.log('El número de la posicion ' + index + ' es ' + item.name)

})




// EJS PRUEBA .MAP

var notas = [2, 3, 4, 5, 6, 7]

let newNotas = notas.map(function (elem, index) {
    console.log(index)
    return elem ** elem

})

console.log(newNotas)




var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

var students = [{ name: 'Luis', email: 'luis@reboot' }, { name: 'Luigi', email: 'luigi@reboot' }];


let newNumbers = numbers.map(function (num) {

    return num ** 2

})

console.log(newNumbers)


let newStrings = strings.map(function (str) {

    return str.toUpperCase()


})

console.log(newStrings)



let newStudents = students.map(function (obj) {

    return obj.email

})

console.log(newStudents)


// ejs .sort

var notas = [7, 10, 14, -3, 15, 22, 4]

console.log(notas.sort())



var notasOrd = notas.sort(function (numDown, numUp) {

    return numUp - numDown
})
console.log(notasOrd)

var notasOrd = notas.sort(function (numDown, numUp) {

    return numDown - numUp
})
console.log(notasOrd)


//.filter


var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

var students = [{ name: 'Luis', email: 'luis@reboot', money: 200 }, { name: 'Luigi', email: 'luigi@reboot', money: 9 }];


var newNumbers = numbers.filter(function (num) {

    return num > 15
})

console.log(newNumbers)


var newStrings = strings.filter(function (str) {

    return str.length > 5
})

console.log(newStrings)

var newStudents = students.filter(function (obj) {

    return obj.money > 10
})
console.log(newStudents)

var mails = newStudents.map(function (a) {

    return a.email
})

console.log(mails)


var jorge = [7,9,1,2]


var sara = jorge.reduce(function(a, b) {
  
  return a + b
})
sara





