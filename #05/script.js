let array = [
  { name: "Ivan", salary: 1000 },
  { name: "Anton", salary: 2000 },
  { name: "Valeriya", salary: 500 },
  { name: "Vadim", salary: 1000 },
  { name: "Alexei", salary: 500 },
  { name: "Alina", salary: 3000 },
];
const salarySum = (array) =>
  array.reduce((previousValue, currentValue) =>
    previousValue.salary !== undefined
      ? previousValue.salary + currentValue.salary
      : previousValue + currentValue.salary
  );
console.log(salarySum(array));
