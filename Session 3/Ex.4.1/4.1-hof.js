//Rewrite the following functions using map, filter and reduce.

const person = (firstName, lastName, age, salary) => {
  const FirstName = () => firstName;
  const LastName = () => lastName;
  const Age = () => age;
  const Salary = () => salary;
  return {
    FirstName,
    LastName,
    Age,
    Salary,
  };
};

const p1 = person("Rares", "Bunea", 66, 100);
const p2 = person("Daniela", "Porcescu", 70, 200);
const p3 = person("Dumitru", "Bunea", 9, 300);
const p4 = person("Elena", "Porcescu", 10, 400);

var persons = [p1, p2, p3, p4];

//function for MAP
function names(persons) {
  let ns = [];
  for (let i = 0; i < persons.length; i++) {
    ns.push(person[i].name);
  }
  return ns;
}
// map
let mappedNames = persons.map((x) => x.FirstName());
console.log(mappedNames);

//function to FILTER
function adults(persons) {
  let as = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      as.push(persons[i]);
    }
  }
  return as;
}

// filter
let filterAdults = persons.filter((x) => x.Age() >= 18);
console.log(filterAdults.map((x) => x.FirstName()));

// function to filter
function oldest_person(persons) {
  let oldest = null;
  for (let i = 0; i < persons.length; i++) {
    if (!oldest || persons[i].age > oldest.age) {
      oldest = person[i];
    }
  }
  return oldest;
}

//filter
let oldest = null;
let filterOldestPerson = persons
.map((x) => x.Age())
.filter(y => y == !oldest)
.filter(z => z > y);

console.log(filterOldestPerson);

// function to reduce and filter
function total_salaries_of_seniors(employees) {
  let total = 0;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 60) {
      total += persons[i].salary;
    }
  }
  return total;
}

// reduce
let reducedSalaryTotal = persons
  .filter((x) => x.Age() >= 10)
  .map((x) => x.Salary())
  .reduce((a, b) => a + b);

console.log(reducedSalaryTotal);
