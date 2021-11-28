let body = document.getElementsByTagName("body");
let aside = document.createElement("aside");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let element;
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
    ul.appendChild(li);
    return ul;
  }
}
asideArray.forEach((item) => {
  item = new Aside(item.name, item.href);
  ul = item.funcAside();
});
nav.append(ul);
aside.append(nav);
document.body.append(aside);
