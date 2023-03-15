/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const double = itemsObject.map(({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
});
console.log(double);

const greater = itemsObject.filter(({ quantity, price }) => {
  return quantity > 2 && price > 300;
});
console.log(greater);

const totalValue = itemsObject.reduce((acc, { price, quantity }) => {
  return acc + price * quantity;
}, 0);
console.log(totalValue);

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
const newstring = string
  .replace(/\s+|\W+/g, " ")
  .trim()
  .toLocaleLowerCase();
console.log(newstring);

/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

/*
const expectedReturnArray = [
    { uuid: 1, role: 'manager', name: null },
    { uuid: 2, role: 'associate', name: 'test' },
    { uuid: 3, role: null, name: 'test3' },
    { uuid: 4, role: 'engineer', name: null },
    { uuid: 5, role: null, name: 'test5' },
    { uuid: 6, role: 'pm', name: null },
  ];
*/
for (const i of first) {
  for (const j of second) {
    i.role = null;
    if (i.uuid === j.uuid) {
      i.role = j.role;
    }
  }
}
for (const k of second) {
  if (k.uuid !== 2) {
    k.name = null;
  }
}
const newArray = [...first, ...second];
const returnArray = newArray.splice(0, 6).sort((a, b) => {
  return a.uuid - b.uuid;
});

returnArray.forEach((element) => {
  console.log(
    `{ uuid: ${element.uuid}, role: ${element.role}, name: ${element.name} }`
  );
});
//console.log(returnArray);
