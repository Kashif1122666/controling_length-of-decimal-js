// chapter 30: controling length of decimals

// METHOD WE'RE LOOKING AT
// toFixed(lengthOfDecimal);

// general example
// const testNumber = 45.8976;
// console.log(testNumber.toFixed(2));

// sales tax example
// const itemPrice = 1750.765;
// const salesTax =0.02;
// const salesTaxAmount = itemPrice * salesTax;
// console.log({salesTaxAmount});

// let totalPrice = itemPrice + salesTaxAmount; 
// console.log(totalPrice);

// limiting the length of decimal
// totalPrice = totalPrice.toFixed(2);
// console.log({totalPrice});
// console.table({itemPrice,salesTaxAmount,totalPrice});

// school marks percentage example 
// const totalMarks = 1100;
// const obtainedMarks = 953;

// before limitig the length
// const percentage = ((obtainedMarks/totalMarks) * 100);
// console.log(percentage);

// after limitig the length
// const percentage = ((obtainedMarks/totalMarks) * 100) .toFixed(2);
// console.log(percentage);

// problem
// console.log(1.555.toFixed(2));

// fixing the above problem
// let num = 1.555;

// let str = num.toString();

// if (str.charAt(str.length -1) === "5"){
//    str = str.slice(0, str.length -1) + "6";
// }

// console.log(str);
// num = Number(str);
// num = num.toFixed(2);
// console.log(num);