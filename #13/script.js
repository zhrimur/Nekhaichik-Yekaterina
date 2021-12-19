let div = document.createElement("div");
let button1 = document.getElementById("user");
let button2 = document.getElementById("company");
let promise = fetch("https://random-data-api.com/api/users/random_user");
promise
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    button1.classList.add("green");
    button2.classList.add("green");
    button2.classList.toggle("green");
    div.innerHTML = "";
    let p = document.createElement("p");
    p.innerText = `Username: ${json.username}\n First Name: ${json.first_name}\n Last Name: ${json.last_name}`;
    div.appendChild(p);
    document.body.append(div);
  });
button1.addEventListener("click", function clicker() {
  let promise = fetch("https://random-data-api.com/api/users/random_user");
  promise
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      button2.classList.remove("green");
      button1.classList.add("green");
      div.innerHTML = "";
      let p = document.createElement("p");
      p.innerText = `Username: ${json.username}\n First Name: ${json.first_name}\n Last Name: ${json.last_name}`;
      div.appendChild(p);
      document.body.append(div);
    });
});
button2.addEventListener("click", function clicker() {
  let promise = fetch("https://random-data-api.com/api/company/random_company");
  promise
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      button1.classList.remove("green");
      button2.classList.add("green");
      div.innerHTML = "";
      p = document.createElement("p");
      p.innerText = `Business name: ${json.business_name}\n Company statement: ${json.bs_company_statement}\n Buzzword: ${json.buzzword}`;
      div.appendChild(p);
      document.body.append(div);
    });
});
