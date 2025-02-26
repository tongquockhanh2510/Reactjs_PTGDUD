
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsData1 = calcAverage(44, 23, 71);
const koalasData1 = calcAverage(65, 54, 49);

const dolphinsData2 = calcAverage(85, 54, 41);
const koalasData2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins!');
  }
};

// Step 4: Determine the winner for both datasets
console.log('Results for Data 1:');
checkWinner(dolphinsData1, koalasData1);

console.log('Results for Data 2:');
checkWinner(dolphinsData2, koalasData2);
