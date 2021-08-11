// var obj = {
//   a: () => {
//     console.log(this.prop);
//   },
//   prop: 1,
// };

// obj.a();
// var fn = obj.a.bind(obj);
// fn();

//ошибка визова bind на свойстве "а"

// ==================================

// const obj = {
// 	x:10,
// 	y: 20,
// 	z: 30
// }

// const result = Object.values(obj);
// const result1 = Object.entries(obj);
// console.log(result);
// console.log(result1);

// ==================================

// Promise.reject("a")
//   .catch((p) => p + "b")
//   .catch((p) => p + "c")
//   .then((p) => p + "d")
//   .finally((p) => p + "e")
//   .then((p) => console.log(p));

//abd

//====================================

// var a='hello';
// function b (){
// 	if(false){
// 		var a = 'world'
// 	}else {
// 		var b = 'man'
// 	}
// 	console.log(b);
// 	console.log(a);
// }
// b()

// man underfined

//============================

// const map = new Map();
// console.log(map);

// console.log(map.set("0", "1"));
// console.log(map.set("s2", "2s"));
// console.log(map.set("3s", "s3"));

// const arr = [...map.values()];
// console.log(arr);
// const result = arr.map((value) => parseInt(value, 10));
// console.log(result);
//[1,2, NaN]

// ============================

// Чему равняется контекст в момент вызова функции через оператор new?

// =====================

// const s1 = [ 'a', 'b', 'c']
// const s2 =['d', 'e', 'f']

// const result = s1.concat(s2).join('+');
// console.log(result);

//a+b+c+d+e+f

// ========================
// var a = {}
// (function b(a){
// 	a.a = 10;
// 	a = null;
// })(a);
// console.log(a);

//error

// ==============================

// setTimeout(function timeOut (){
// 	console.log('1');

// }, 0);

// Promise.resolve('2').then(console.log);

// console.log('3');

//321

// ==================

// var a = 'hello';
// function b(){
// 	console.log(a);
// 	var a = 'world'
// 	console.log(a);
// }
// b()

//underfined world

// =======================

// for (var i =0; i<10; i++){
// 	setTimeout(function f(){
// 		console.log(i);
// 	})
// }

// 10 раз 10

// =====================

// Отличие sessionStorage от LocalStorage

// область видимости localStorage распространяется на все вкладки страницы, sessionStorage только на одну

// ==============================

// const meetups = [
//   { name: "JavaScript", isActive: true, members: 100 },
//   { name: "Angular", isActive: true, members: 900 },
//   { name: "Node", isActive: false, members: 600 },
//   { name: "React", isActive: true, members: 500 },
// ];

// const memberOnActiveMeetups = (meetups) =>
//   meetups
//     .filter((meetup) => meetup.isActive)
//     .reduce((sum, meetup) => sum + meetup.members, 0); //правильний

// console.log(memberOnActiveMeetups(meetups));

// =======================

// С помощью чего можно обработать любое динамически изменяемое количество аргументов функции?

// ??????? свойства arguments внутри вызванной функции ???????

// ============================

// let obj = {
//   "0": 1,
//   0: 2,
// };

// console.log(obj["0"] + obj[0]);

//4

// =================

// const obj1 = {
// 	x:10
// }

// const obj2 = Object.create(obj1)

// console.log(obj2.x);//10

// ======================

// Что выведет в консоль 'abc' === new String('abc')?
//  2) Будет ли ответ аналогичен, если === заменить на ==?

// console.log("abc" === new String("abc")); //false
// console.log("abc" == new String("abc")); //true

//false, нет

// =========================
