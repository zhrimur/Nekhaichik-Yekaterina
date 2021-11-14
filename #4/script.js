/*N.04 Домашнее задание VOWELS
Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
Функция должна вернуть функцию(аргумент принимает либо гласные которые нужно вывести либо ничего,
если ничего то выводим все гласные), которая выведет в консоль все гласные и вернет их число.*/
let stringVowels = "уеёыаоэяиюУЕЁЫАОЭЯИЮ";
function getVowels(string) {
  return function Vowels(vowel) {
    let vowelsCounter = 0;
    if (vowel === undefined) {
      for (let i = 0; i < string.length; i++) {
        if (stringVowels.search(string[i]) > -1) {
          vowelsCounter++;
        }
      }
      console.log(vowelsCounter);
    } else {
      if (stringVowels.search(vowel) > -1) {
        vowel = vowel.toUpperCase() + vowel.toLowerCase();
        for (let i = 0; i < string.length; i++) {
          if (vowel.search(string[i]) > -1) {
            vowelsCounter++;
          }
        }
        console.log(vowelsCounter);
      } else {
        console.log("Укажите гласную или оставьте скобки пустыми");
      }
    }
  };
}
let count = getVowels("Это пример фразы");
count();
count("ж");
count("а");
count("Э");
