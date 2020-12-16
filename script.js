/**
 * Генерация рандомного массива
 */
function randomArray(length = 10) {
	let myArray = [];
	while (myArray.length < length) {
		let r = Math.floor(Math.random() * 100) + 1;
		if (myArray.indexOf(r) === -1)
			myArray.push(r);
	}
	return myArray;
}

/**
 * Удаляет повторяющиеся элементы
 */
function arrayUnique(array) {
	var a = array.concat();
	for (var i = 0; i < a.length; ++i) {
		for (var j = i + 1; j < a.length; ++j) {
			if (a[i] === a[j])
				a.splice(j--, 1);
		}
	}
	return a;
}

/**
 * Task 1
 * Напишите функцию, которая подсчитывает сумму четных элементов массива
 */
function evenArray(length = 10, output) {

	// создаем массив длиной в length рандомных уникальных элементов
	let myArray = randomArray(length);

	// находим сумму четных элементов
	let sum = 0;
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i] % 2 === 0) {
			sum = sum + myArray[i];
		}
	}

	console.log(sum);
	document.getElementById(output).innerHTML = 'myArray = [' + myArray + ']<br>Even sum: ' + sum;
}

/**
 * Task 2
 * Напишите функцию, которая возвращает общий массив из двух заданных
 */
function arrayMarge(length1 = 10, length2 = 10, output) {
	//let array1 = randomArray(length1);
	let array1 = ['cat', 'cat', 'apple'];
	let array2 = randomArray(length2);
	const array3 = array1.concat(array2);
	const array3u = arrayUnique(array3);
	console.log(array3);
	document.getElementById(output).innerHTML = 'array1 = [' + array1 + ']<br>array2 = [' + array2 + ']<br>array3 = [' + array3 + ']<br>Unique array3= [' + array3u + ']';
}
/**
 * Task 3
 * Напишите функцию перевода строки в верблюжий регистр
 */
function camelCase(text, output) {
	let result = text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0)
			return "";
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});

	console.log(result);
	document.getElementById(output).innerHTML = 'Было = ' + text + '<br>Стало = ' + result;
}
/**
 * Task 4
 * Напишите функцию, которая дополняет нулями целое число до указанной длины
 */
function addZero(n, z = 2, s = '0', output) {

	// s - заполнитель

	let result = (n + '').length <= z ? (['', '-'])[+(n < 0)] + (s.repeat(z) + Math.abs(n)).slice(-1 * z) : n + '';
	document.getElementById(output).innerHTML = 'Было = ' + n + '<br>Стало = ' + result;
}

/**
 * Task 5 + Task 5*
 * Создайте и опишите объект worker.  Выведите его в консоль. 5* + добавьте в него функцию (встроенные методы) : вывести ФИО, начислять доплату 5% если выслуга лет больше 5 лет и 10% если выслуга лет больше 8 лет
 */
//let worker = new Object();
let worker = {
	firstName: "Дмитрий",
	middleName: "Александрович",
	lastName: "Гуев",
	age: 32,
	eyeColor: "hazel",
	length_of_service: 13,
	salary: 20000,
	getFullName: function() {
		return this.firstName + " " + this.middleName + " " + this.lastName;
	},
	getAllowance: function() {
		if (this.length_of_service > 5 && this.length_of_service < 8) {
			return this.salary * 0.05;
		} else if (this.length_of_service > 8) {
			return this.salary * 0.1;
		}
	}
};
console.log('ФИО ' + worker.getFullName());
console.log('Надбавка ' + worker.getAllowance());
