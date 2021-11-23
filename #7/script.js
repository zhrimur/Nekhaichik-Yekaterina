String.prototype.getVowels = function (vowel) {
  let stringVowels = "уеёыаоэяиюУЕЁЫАОЭЯИЮ";
  let vowelsCounter = 0;
  if (vowel === undefined) {
    for (let i = 0; i < this.length; i++) {
      if (stringVowels.search(this[i]) > -1) {
        vowelsCounter++;
      }
    }
  } else {
    if (stringVowels.search(vowel) > -1) {
      vowel = vowel.toUpperCase() + vowel.toLowerCase();
      for (let i = 0; i < this.length; i++) {
        if (vowel.search(this[i]) > -1) {
          vowelsCounter++;
        }
      }
    } else {
      console.log("Укажите гласную или оставьте скобки пустыми");
    }
  }
  return vowelsCounter;
};
