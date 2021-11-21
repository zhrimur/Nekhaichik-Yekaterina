let animal = {
  eats: true,
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");
alert(rabbit.eats);

let murderer = {
  kills: true,
};
function Killer(name) {
  this.name = name;
}
Killer.prototype = murderer;
let felix = new Killer("Felix");
alert(felix.kills);
let getSomeAge = () => {
  return 100;
};
Killer.prototype.getSomeAge = getSomeAge();
let adam = new Killer("Adam");
alert(adam.getSomeAge);
