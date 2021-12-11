const arrayHeader = [
  { name: "Google", href: "http://google.com" },
  { name: "Amazon", href: "http://amazon.com" },
  { name: "eBay", href: "http://ebay.com" },
  { name: "Onliner", href: "http://onliner.by" },
];
const arrayAside = [
  { name: "Google", href: "http://google.com" },
  { name: "Amazon", href: "http://amazon.com" },
  { name: "Yandex", href: "http://yandex.com" },
  { name: "Vk", href: "https://vk.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Youtube", href: "https://youtube.com" },
  { name: "Bing", href: "https://bing.com" },
  { name: "Yahoo", href: "https://yahoo.com" },
];
const arrayFooter = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "Tiktok", href: "https://www.tiktok.com/" },
];
const func = (array) => {
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  array.forEach((element) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = element.name;
    a.href = element.href;
    li.appendChild(a);
    ul.appendChild(li);
  });
  return nav.appendChild(ul);
};
let header = document.createElement("header");
let headerHtml = func(arrayHeader);
header.append(headerHtml);
document.body.append(header);
let aside = document.createElement("aside");
let asideHtml = func(arrayAside);
aside.append(asideHtml);
document.body.append(aside);
let footer = document.createElement("footer");
let footerHtml = func(arrayFooter);
footer.append(footerHtml);
document.body.append(footer);