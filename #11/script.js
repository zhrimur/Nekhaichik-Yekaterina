const formArray = [
  { type: "text", name: "text", placeholder: "Text" },
  { type: "password", name: "password", placeholder: "Пароль" },
  { type: "login", name: "login", placeholder: "Логин" },
];
let form = document.createElement("form");
let formCreator = (array) => {
  array.forEach((element) => {
    let input = document.createElement("input");
    input.name = element.name;
    input.type = element.type;
    input.placeholder = element.placeholder;
    form.appendChild(input);
  });
  return form;
};
form = formCreator(formArray);
document.body.append(form);
