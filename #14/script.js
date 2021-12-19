const obj = {
  name: "Ivan",
};
let form = document.getElementById("form");
let span = document.getElementById("span");
let log = document.getElementById("login");
let pass = document.getElementById("password");
let submit = document.getElementById("submit");
let button = document.getElementById("button");
form.style.display = "none";
span.style.display = "none";
if (
  localStorage.getItem("login") === null ||
  localStorage.getItem("password") === null
) {
  form.style.display = "block";
  log.value = JSON.parse(localStorage.getItem("login"));
  pass.value = JSON.parse(localStorage.getItem("password"));
  let alphabet = "йцукенгшщзхъёфывапролджэячсмитьбю";
  let numbers = "123456789";
  submit.addEventListener("click", () => {
    if (log.value.length > 4) {
      localStorage.setItem("login", JSON.stringify(log.value));
    } else {
      alert("Login dolzhen byt bolshe 4 simvolov");
    }
    arr = Array.from(pass.value.toLowerCase());
    smth = arr.forEach((element) => {
      w = alphabet.search(element);
      return w;
    });
    smth2 = arr.forEach((element) => {
      z = numbers.search(element);
      return z;
    });
    if (pass.value.length > 4 && smth != -1 && smth2 != -1) {
      localStorage.setItem("password", JSON.stringify(pass.value));
    } else {
      alert("Parol dolzhen byt bolshe 4 simvolov i soderzhat bukvy i cyfry");
    }
    let x = localStorage.getItem("login");
    let y = localStorage.getItem("password");
    console.log(x);
    console.log(y);
  });
} else {
  span.style.display = "block";
  button.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}
