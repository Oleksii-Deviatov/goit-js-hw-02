// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только
//     слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  let word = string.split(" ")[0];
  for (let i = 0; i < string.split(" ").length; i += 1) {
    if (string.split(" ")[i].length > word.length) {
      word = string.split(" ")[i];
    }
  }
  return word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
