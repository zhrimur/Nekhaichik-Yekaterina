let form = document.getElementById("form");
let span = document.getElementById("span");
let log = document.getElementById("login");
let pass = document.getElementById("password");
let submit = document.getElementById("submit");
let button = document.getElementById("button");
let alphabet = "qwertyuiopasdfghjklzxcvbnm";
let numbers = "123456789";
form.style.display = "none";
span.style.display = "none";
if (
  localStorage.getItem("login") === null ||
  localStorage.getItem("password") === null
) {
  form.style.display = "block";
  log.value = JSON.parse(localStorage.getItem("login"));
  pass.value = JSON.parse(localStorage.getItem("password"));
  submit.addEventListener("click", () => {
    if (log.value.length > 4) {
      localStorage.setItem("login", JSON.stringify(log.value));
    } else {
      alert("Login dolzhen byt bolshe 4 simvolov");
    }
    let numSum = 0;
    let letSum = 0;
    let arrPass = Array.from(pass.value.toLowerCase());
    arrPass.forEach((element) => {
      if (alphabet.search(element) !== -1) {
        letSum++;
      }
    });
    arrPass.forEach((element) => {
      if (numbers.search(element) !== -1) {
        numSum++;
      }
    });
    if (pass.value.length > 4 && letSum !== 0 && numSum !== 0) {
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
