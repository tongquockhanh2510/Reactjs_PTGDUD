
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100)); 

const bills = [125, 555, 44];

const tips = bills.map(calcTip);

const total = bills.map((bill, index) => bill + tips[index]);

console.log("Hóa đơn:", bills);
console.log("Tiền tip:", tips);
console.log("Tổng giá trị:", total);
