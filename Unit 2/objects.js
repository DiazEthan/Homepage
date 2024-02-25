const saving = new savingIncome(1000, 0.1, 0.01);
total = saving.totalEarn();

console.log(total);



const saving2 = new savingIncome(2000, .002, 0.5);
console.log(saving2);

total2 = saving2.totalEarn();
fee2 = saving2.calculateFee();
console.log(total2);
console.log(fee2);
