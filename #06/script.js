const animals = [
  { name: "Cow", color: "White", age: "3", voice: "Moo" },
  { name: "Goat", color: "Ginger", age: "2", voice: "Bleat" },
  { name: "Pig", color: "Pink", age: "1", voice: "Oink" },
];

class Animal {
  constructor(name, color, age, voice) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.voice = voice;
  }

  say() {
    alert(`${this.age} year old ${this.color} ${this.name} says ${this.voice}`);
  }
}

function animalsFabric(animals) {
  let objectAnimals = [];
  objectAnimals = animals.map(
    (element) =>
      new Animal(element.name, element.color, element.age, element.voice)
  );

  return objectAnimals;
}
console.log(animalsFabric(animals));
animalsFabric(animals)[0].say();
