/**
 *アロー関数
 */

// function func1(str) {
//   return str;
// }

// const func2 = function (str) {
//   return str;
// };

// console.log(func1("func1"));
// console.log(func2("func2"));

// const func3 = (str) => {
//   return str;
// };

// const func4 = (str) => str;

// console.log(func3("func3"));
// console.log(func4("func4"));

// const func5 = (num1, num2) => num1 + num2;

// console.log(func5(5, 5));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "mori",
//   age: 28
// };

// const message = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);

// const {name,age} = myProfile
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// const myProfile = ["mori", "28"];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc =(num1,num2)=> console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

//参照渡しではなく値渡しで渡せる
// const arr6 = [...arr4];
// console.log(arr6);
//結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilter
 */

//const nameArr = ["田中", "山田", "森"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }

//  const nameArr2 = nameArr.map((name)=>{
//    return name;
//  });

//  console.log(nameArr2);
//nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "森") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 参考演算子
 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =　typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています':'許容範囲内です'
// }

// const numArr = [50,60];
// console.log(checkSum(...numArr));
