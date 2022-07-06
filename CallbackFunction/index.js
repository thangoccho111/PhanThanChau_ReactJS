const Name = ["Chau", "Thang", "Tri", "Truc", "Huy"];
const numBer = [2, 9, 20, 25, 100];

//Hàm find
const found = numBer.find((item) => item > 8);
console.log(found);

//Hàm findIndex
const isLargeNumber = (item) => item > 13;
console.log(numBer.findIndex(isLargeNumber));

//Hàm some
const even = (item) => item % 2 === 0;
console.log(numBer.some(even));

//Hàm every
const isBelowThreshold = (item) => item < 40;
console.log(numBer.every(isBelowThreshold));

//Hàm map
const map = numBer.map((item) => item * 2);
console.log(map);

//Hàm filter
const result = Name.filter((item) => item.length > 3);
console.log(result);
