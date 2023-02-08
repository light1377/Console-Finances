var totalMonths = (finances.length);
var total = 0;

for (var i=0 ; i < totalMonths ; i++){
    total += (finances[i])[1];
}

console.log(total)

console.log("Financial Analysis")
    console.log("----------------------------")
console.log(`Total Months: ${totalMonths}`);

