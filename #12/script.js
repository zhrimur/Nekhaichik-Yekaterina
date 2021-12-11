let url = "https://random-data-api.com/api/restaurant/random_restaurant";
let div = document.createElement("div");
const promise = fetch(url);
promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    objHours = data.hours;
    console.log(objHours);
    x = Object.keys(objHours);
    console.log(x);
    let newArr = [];
    x.forEach((element) => {
      if (objHours[element].is_closed === false) {
        objHours[element].day = element;
        newArr.push(objHours[element]);
        console.log(newArr);
      }
    });
    newArr.forEach((element) => {
      let p = document.createElement("p");
      string = String(element.day);
      p.innerText += `${string.toUpperCase()}\n Opens at: ${element.opens_at}\n Closes at: ${element.closes_at}`;
      div.appendChild(p);
    });
  });
  document.body.append(div);
