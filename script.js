//find number of months in the finances array:
var totalMonths = (finances.length);

//make a new array of only the profit/loss entry of each element in th finances array:
var profitOrLoss = [];
for (var i = 0; i < totalMonths; i++) {
    profitOrLoss.push((finances[i])[1])
};

//add up all the profits/losses in finances array:
var total = 0;
for (var i = 0; i < totalMonths; i++) {
    total += (finances[i])[1];
}
//console.log(total);

//make a anew array of the differences in the profits:
var profitChanges = [];
for (var j=0; j< profitOrLoss.length-1 ; j++) {
    profitChanges.push(profitOrLoss[j+1]-profitOrLoss[j]);
};

//find the average of all the changes:

var totalChanges = 0;
for (var i = 0; i < profitChanges.length; i++) {
    totalChanges += profitChanges[i];
}
//console.log("total changes in profits/losses: " + totalChanges);
var averageChange = totalChanges/(profitChanges.length)

var min = Math.min.apply(Math, profitChanges);
var max = Math.max.apply(Math, profitChanges);
//console.log("minimum change in profits/losses: " + min);

var minIndex = profitChanges.indexOf(min)
//console.log("which happened in: " + (finances[minIndex])[0])

//console.log("maximum change in profits/losses: " + max);
var maxIndex = profitChanges.indexOf(max)
//console.log("which is entry of: " + profitChanges.indexOf(max));
//console.log("which happened in: " + (finances[maxIndex])[0]);



console.log("Financial Analysis");
console.log("----------------------------");
console.log(`Total Months: ${totalMonths}`);
console.log(`Total profits/losses: ${total}`);
console.log(`Average change: ${averageChange}`);
console.log("Greatest Increase in Prfits: " + (finances[maxIndex])[0] + " ($" + max + ")");
console.log("Greatest Decrease in Prfits: " + (finances[minIndex])[0] + " ($" + min + ")");
