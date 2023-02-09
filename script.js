//find number of months in the finances array:
var totalMonths = (finances.length);

//make a new array of only the profit/loss entry of each element in th finances array:
var profitOrLoss = [];
for (var i = 0; i < totalMonths; i++) {
    profitOrLoss.push((finances[i])[1])
};
console.log(profitOrLoss);

//add up all the profits/losses in finances array:
var total = 0;
for (var i = 0; i < totalMonths; i++) {
    total += (finances[i])[1];
}
console.log(total);

//make a anew array of the differences in the profits:
var profitChanges = [];
for (var j=0; j< profitOrLoss.length-1 ; j++) {
    profitChanges.push(profitOrLoss[j+1]-profitOrLoss[j]);
};
console.log(profitChanges);

//find the average of all the changes:

var totalChanges = 0;
for (var i = 0; i < profitChanges.length; i++) {
    totalChanges += profitChanges[i];
}
console.log(totalChanges);
var averageChange = totalChanges/(profitChanges.length)



console.log("Financial Analysis");
console.log("----------------------------");
console.log(`Total Months: ${totalMonths}`);
console.log(`Total profits/losses: ${total}`)
console.log(`Average change: ${averageChange}`)
