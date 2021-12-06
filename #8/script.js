let header = document.createElement("header");
header.className = "header";
document.body.append(header);
let aside = document.createElement("aside");

let nav = document.createElement("nav");
nav.className = "header_block";
nav.innerHTML = "COMPANY  LOGO";

let arr = ["Google", "Amazon", "eBay", "Onliner"];

let arrHref = [
  "http://google.com",
  "http://amazon.com",
  "http://ebay.com",
  "http://onliner.by",
];
const asideArray = [
  { name: "Google", href: "http://google.com" },
  { name: "Amazon", href: "http://amazon.com" },
  { name: "Yandex", href: "http://yandex.com" },
  { name: "Vk", href: "https://vk.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Youtube", href: "https://youtube.com" },
  { name: "Bing", href: "https://bing.com" },
  { name: "Yahoo", href: "https://yahoo.com" },
];
let nav2 = document.createElement("nav");
let ul = document.createElement("ul");
ul.className = "header_item";
for (i = 0; i <= arr.length - 1; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerText = arr[i];
  a.href = arrHref[i];
  li.className = "header_item_li";
  li.appendChild(a);
  ul.appendChild(li);
}
let ul2 = document.createElement("ul");
class Aside {
  constructor(name, href) {
    this.name = name;
    this.href = href;
  }
  funcAside() {
    let a = document.createElement("a");
    a.href = this.href;
    a.innerText = this.name;
    let li = document.createElement("li");
    li.appendChild(a);
    ul2.appendChild(li);
    return ul2;
  }
}
asideArray.forEach((item) => {
  item = new Aside(item.name, item.href);
  ul2 = item.funcAside();
});
nav2.appendChild(ul2);
aside.appendChild(nav2);
document.body.appendChild(aside);
nav.appendChild(ul);
header.appendChild(nav);
