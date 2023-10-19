function getRandomBetween(min, max) { //повертає випадкове число від мінімального до максимального
	return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomFrom(...args) { //повертає випадковий елемент серед усіх аргументів, які передаються в ф-цію
	const index = Math.floor(Math.random() * args.length);
	return args[index];
}

function isUnderPoint(point, element) { //перевіряє чи точка знаходиться над елементом
	const { left, top, width, height } = element.getBoundingClientRect();//метод getBoundingClientRect() 
	//дає координати та розміри 
	const { x, y } = point;
	//Якщо обидві умови (для x та y) виконуються, то це означає, що точка знаходиться 
	//над елементом, і функція повертає true
	return left <= x && x <= left + width && top <= y && y <= top + height;
}

function addListener(element, ...args) {//функція навішує обробник події 
	element.addEventListener(...args);
	return () => element.removeEventListener(...args);//і повертає і-цю яка цей обробник знімає
}

function getRandomSeveral(array = [], size = 1) { //функція для вибору кількості рандомних пустих клітинок 
//по яких компютер не буде стріляти в залежності від рівня middle-20
	array = array.slice();//робимо копію масиву який передаєм
//перевіряємо якщо з нього потрібна вибірка більше ніж довжина масиву
	if (size > array.length) {
		size = array.length;//заміняємо її довжиною масиву 
	}

	const result = [];

	while (result.length < size) { //поки довжина результату буде менше потрібного розміру(middle-20)
		const index = Math.floor(Math.random() * array.length);//будемо брати випадковий індекс з залишкоу масиву array
		const item = array.splice(index, 1)[0];//зменшувати його на 1 індекс і цей конкрутний елемент
		result.push(item);//кладемо в result
	}

	return result;

}