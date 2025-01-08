let weightMark = 78
let heightMart = 1.69
let weightJohn = 92
let heightJohn = 1.95

let weightMark2 = 9595
let heightMart2 = 1.88
let weightJohn2 = 8585
let heightJohn2 = 1.76
//chỉ số BMI
function tinhBMI(weight, height){
    return weight/(2*height)
}

//tính BMI cho dữ liệu
let BMIMark = tinhBMI(weightMark, heightMart);
let BMIJohn = tinhBMI(weightJohn, heightJohn);
let markHigherBMI = BMIMark >BMIJohn;

let BMIMark2 = tinhBMI(weightMark2, heightMart2);
let BMIJohn2 = tinhBMI(weightJohn2, heightJohn2);
let markHigherBMI2 = BMIMark2 >BMIJohn2;

//Dữ liệu 11
console.log('Bộ dữ liệu test 1'); 
console.log('BMI của Mark:',BMIMark.toFixed(2));
console.log('BMI của Joh:',BMIJohn.toFixed(2));
if(markHigherBMI){
    console.log('BMI của Mark hơn John'); 
} else{
    console.log('BMI của John hơn MarkMark'); 
}

//bộ dữ liệu test 2
console.log('Bộ dữ liệu test 2'); 
console.log('BMI của Mark:',BMIMark2.toFixed(2));
console.log('BMI của Joh:',BMIJohn2.toFixed(2));
if(markHigherBMI2){
    console.log('BMI của Mark hơn John'); 
} else{
    console.log('BMI của John hơn MarkMark'); 
}

