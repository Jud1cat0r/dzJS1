//задание 1


// function showList(array) {
// 	array.sort((a, b) => a.status < b.status ? 1 : -1);
// 	for (let i of array) {
// 		console.log(i);
// 	}
// }

// function addList(shoppingList, element) {
// 	let flag = false;
// 	for (let i of shoppingList) {
// 		if (i.name == element.name) {
// 			i.count += element.count;
// 			flag = true;
// 		}
// 	}
// 	if (!flag) shoppingList.push(element);
// }

// function buy(shoppingList, element) {
// 	for (let i of shoppingList) {
// 		if (i.name == element) {
// 			i.status = false;
// 			break;
// 		}
// 	}
// }

// let shoppingList = [{ name: "картошка", count: 10, status: true }, { name: "хлеб", count: 1, status: false }, { name: "курица", count: 5, status: true }];
// let el1 = { name: "капуста", count: 1, status: true };
// let el2 = "картошка";
// addList(shoppingList, el1);
// buy(shoppingList, el2);
// showList(shoppingList);





//задание 2

// function showCheck(array) {
// 	for (let i of array) console.log(i.name, " : ", i.count, "x", i.price, "= ", (i.count * i.price));
// }

// function summCheck(array) {
// 	let summ = 0;
// 	for (let i of array) {
// 		summ += (i.price * i.count);
// 	}
// 	return summ;
// }

// function maxPrice(array) {
// 	let max = 0;
// 	for (let i of array) {
// 		if (i.price > max) max = i.price;
// 	}
// 	return max;
// }

// function srPrice(array) {
// 	return summCheck(array) / array.length;
// }

// let check = [{ name: "картошка", count: 10, price: 3 }, { name: "хлеб", count: 1, price: 12 }, { name: "курица", count: 5, price: 7 }];

// showCheck(check);
// console.log(summCheck(check));
// console.log(maxPrice(check));
// console.log(srPrice(check));





//задание 3
//не совсем понял про массив

// let st={
// 	color:'red',
// 	'font-size':'50px',
// 	'text-align':'center',
// 	'text-decoration':'underline'
// };

// let st1 = genStrStyleFromObj(st);

// function genStrStyleFromObj(obj){
// 	let strSt = '';
// 	let nameSt='';
// 	let valueSt='';
// 	for ([nameSt, valueSt] of Object.entries(obj)){
// 		 strSt += `${nameSt}: ${valueSt};`;
// 	}
// 	return strSt;
// }

// document.write(`<p style="${st1}">TEXT</p>`)






//задание 4

// function showAudience(array) {
// 	for (let i of array) console.log("Название: ", i.name, "Количество мест: ", i.place, "Факультет: ", i.faculty);
// }

// function searchFaculty(array, fac) {
// 	for (let i of array) {
// 		if (i.faculty == fac) return i.name;
// 	}
// 	return "not audience";
// }

// function searchGroup(array, gr) {
// 	for (let i of array) {
// 		if (i.faculty == gr.faculty) return i.name;
// 	}
// 	return "not audience";
// }

// function sortPlace(array) {
// 	array.sort((a, b) => a.place > b.place ? 1 : -1);
// }

// function sortName(array) {
// 	array.sort((a, b) => a.name > b.name ? 1 : -1);
// }


// let audience = [{ name: "audience3", place: 19, faculty: "maths" }, { name: "audience2", place: 17, faculty: "literature" }, { name: "audience1", place: 11, faculty: "chemistry" }];
// let group = {
// 	name: "Group B-12",
// 	count: 14,
// 	faculty: "maths"
// }



