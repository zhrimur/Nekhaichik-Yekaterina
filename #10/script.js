let ul = document.getElementById("ul");
let selected;
ul.addEventListener("mousedown", function (event) {
  let target = event.target;
  if (!(event.metaKey || event.ctrlKey)) {
    selected = ul.querySelectorAll(".selected");
    selected.forEach((element) => {
      element.classList.remove("selected");
    });
    target.classList.add("selected");
    target.classList.toggle("selected");
  }
  target.classList.toggle("selected");
});
