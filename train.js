// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba bo'ling", // 0–20
//   "to'gri boshliq tanlang va ko'proq hato qiling", // 20–30
//   "o'zingizga ishlashningni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") {
//     callback("insert a number", null);
//   } else if (a <= 20) {
//     callback(null, list[0]);
//   } else if (a > 20 && a <= 30) {
//     callback(null, list[1]);
//   } else if (a > 30 && a <= 40) {
//     callback(null, list[2]);
//   } else if (a > 40 && a <= 50) {
//     callback(null, list[3]);
//   } else if (a > 50 && a <= 60) {
//     callback(null, list[4]);
//   } else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// maslahatBering(55, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else console.log("javob:", data);
// });

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");

// ==========A S Y N CH R O N O U S==========FUNCTIONLARNI QOLLASH======================================================================
//
//
//
//

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba bo'ling", // 0–20
//   "to'gri boshliq tanlang va ko'proq hato qiling", // 20–30
//   "o'zingizga ishlashningni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") {
//     throw new Error("insert a number");
//   } else if (a <= 20) {
//     return list[0];
//   } else if (a > 20 && a <= 30) {
//     return list[1];
//   } else if (a > 30 && a <= 40) {
//     return list[2];
//   } else if (a > 40 && a <= 50) {
//     return list[3];
//   } else if (a > 50 && a <= 60) {
//     return list[4];
//   } else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// than/catch
// console.log("passed here 0");

// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

//
//
// asyn/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
// =====================last====section================================

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba bo'ling", // 0–20
//   "to'gri boshliq tanlang va ko'proq hato qiling", // 20–30
//   "o'zingizga ishlashningni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// // CALLBACK
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") {
//     callback("insert a number", null);
//   } else if (a <= 20) {
//     callback(null, list[0]);
//   } else if (a > 20 && a <= 30) {
//     callback(null, list[1]);
//   } else if (a > 30 && a <= 40) {
//     callback(null, list[2]);
//   } else if (a > 40 && a <= 50) {
//     callback(null, list[3]);
//   } else if (a > 50 && a <= 60) {
//     callback(null, list[4]);
//   } else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");
//
//
//
//
//
//
//
//
//
//
//
// ============********** M I T A S K -1  **********============

// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("a", "mashaqqat"));

// console.log(countLetter("m", "marjona"));

// console.log(countLetter("u", "graduation"));
//
//
//
//============********** M I T A S K -2B  **********============

// function countDigits(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") {
//       count++;
//     }
//   }

//   return count;
// }

// // console.log(countDigits("jdwkueyfgh273y1827smnbdjhf"));

// console.log(countDigits("kwjiw123wrr3656ewff5eer"));
//
//
//
//
//============********** M I T A S K -3C  **********============

// class Shop {
//   constructor(non, lagmon, choy) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.choy = choy;
//   }

//   //zahiramizga nisbattan vaqt ko'rsatgichi
//   getTime() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, "0");
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   //cheffimizdan axborot
//   qoldiq() {
//     console.log(
//       `Ayni vaqtda ${this.getTime()} da ${this.non} ta nonimiz, ${this.lagmon}, ta lagmonimiz, ${this.choy} ta choyimiz mavjud`,
//     );
//   }

//   //kassadan axborot
//   sotish(product, amount) {
//     if (this[product] >= amount) {
//       this[product] -= amount;
//       console.log(`Sotildi: ${amount} ta ${product}`);
//     } else {
//       console.log(`Kechirasiz yetarli ${product} mavjud emas!`);
//     }
//   }

//   qabul(product, amount) {
//     this[product] += amount;
//     console.log(`Qabul qilindi: ${amount} ta ${product}`);
//   }
// }

// //zahirani tekshiramiz
// const shop = new Shop(12, 4, 9);

// shop.qoldiq();

// shop.sotish("choy", 5);
// shop.qabul("non", 9);

// shop.qoldiq();

//
//
//
//
//
//
//============********** M I T A S K -4D  **********============

// function malumotTarkibiniTekshiramiz(kerakligap1, kerakligap2) {
//   let sorted1 = kerakligap1.split("").sort().join("");
//   let sorted2 = kerakligap2.split("").sort().join("");

//   return sorted1 === sorted2;
// }

// console.log(malumotTarkibiniTekshiramiz("marjona", "anojram"));

// console.log(
//   malumotTarkibiniTekshiramiz("salommenAIEngineerman", "EIAnemlomsanginmanree"),
// );

// console.log(malumotTarkibiniTekshiramiz("pilotlikzorkasb", "rozliptosabkw"));
//
//
//
//
//============********** M I T A S K -5E  **********============

// function getReverse(srt) {
//   let result = "";

//   for (let i = srt.length - 1; i >= 0; i--) {
//     result = result + srt[i];
//   }

//   return result;
// }

// // console.log(getReverse("marjona"));

// console.log(getReverse("Im Python Engineer"));

//============********** M I T A S K -6F  **********============

// function findDoublers(str) {
//   let egizakHarf = [];

//   for (let i = 0; i < str.length; i++) {
//     let endi = str[i];

//     if (egizakHarf.includes(endi)) {
//       return true;
//     } else egizakHarf.push(endi);
//   }

//   return false;
// }

// console.log(findDoublers("samarkand"));
// console.log(findDoublers("southseoul"));
// console.log(findDoublers("engineer"));
// console.log(findDoublers("windows"));

//============********** M I T A S K -7G  **********============

function getHighestIndex(arr) {
  const engKatta = Math.max(...arr);
  return arr.indexOf(engKatta);
}

console.log(getHighestIndex([12, 44, 9, 77, 36]));
