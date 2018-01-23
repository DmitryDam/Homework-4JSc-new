// Task 1

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');
      
function addKeyboardLayout (data) {

	let arrAlphabet = data.split('');

	let firstLine = arrAlphabet.slice(0,12);
	let secondLine = arrAlphabet.slice(12,23);
	let thirdLine = arrAlphabet.slice(23,35);

	let stringFirstLine = firstLine.join(" ");
	let stringSecondLine = secondLine.join(" ");
	let stringThirdLine = thirdLine.join(" ");

	row1.innerHTML = `Символы первого ряда клавиатуры - ${stringFirstLine}`;
	row2.innerHTML = `Символы второго ряда клавиатуры - ${stringSecondLine}`;
	row3.innerHTML = `Символы третьего ряда клавиатуры - ${stringThirdLine}`;

	let keyboard = [];

	keyboard.push(firstLine);
	keyboard.push(secondLine);
	keyboard.push(thirdLine);

// Task 2

	const letter1 = document.getElementById('letter1');
	const letter2 = document.getElementById('letter2');
	const letter3 = document.getElementById('letter3');

	function getRandCharInRow (row) {
		let rowLength = row.length;
		let randomRowNumber = Math.floor(rowLength * Math.random());

		for (var i=0; i<rowLength; i++) {
			if (i == randomRowNumber) {
				var randomRowLetter = row[i];
			}
		}

		if (row == firstLine) {
			letter1.innerHTML = `Случайная буква первого ряда - ${randomRowLetter}`;
		}
		if (row == secondLine) {
			letter2.innerHTML = `Случайная буква второго ряда - ${randomRowLetter}`;
		}
		if (row == thirdLine) {
			letter3.innerHTML = `Случайная буква третьего ряда - ${randomRowLetter}`;
		}
	}
// Task 3
	const letterRandom = document.getElementById('letterRandom');
	function getRandCharInAlph () {
		let alphabetNumber = Math.floor(arrAlphabet.length * Math.random());
		// let alphabetNumber = arrAlphabet.length * Math.random();
		// Метод Math.floor() возвращает наибольшее целое число, которое меньше или равно данному числу.
		// Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона 
		// [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1),
		//  которое затем можно отмасштабировать до нужного диапазона. 
		//  Реализация сама выбирает начальное зерно для алгоритма 
		//  генерации случайных чисел; оно не может быть выбрано или 
		//  сброшено пользователем.

		for (var i=0; i<arrAlphabet.length; i++) {
			if (i == alphabetNumber) {
				var alphabetLetter = arrAlphabet[i];
			}
		}
		letterRandom.innerHTML = `Случайная буква алфавита - ${alphabetLetter}`;
	}
    getRandCharInRow (firstLine);
	getRandCharInRow (secondLine);
	getRandCharInRow (thirdLine);
	getRandCharInAlph ();
}
	document.getElementById('getRowNumber').onclick = function () {
	addKeyboardLayout (alphabet);
	}
