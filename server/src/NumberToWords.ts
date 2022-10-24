enum Range {
  TEN = 10,
  ONE_HUNDRED = 100,
  ONE_THOUSAND = 1000,
  ONE_MILLION = 1000000,
}

const BELLOW_TWENTY = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const BELLOW_HUNDRED = [
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

class NumberToWordsStatic {
  convert(number?: number, words?: string[]): string {
    if (!words) {
      words = [];
    }

    let word, remainder;
    if (words && words.length) {
      if (number === 0) {
        return words.join(" ");
      } else if (
        ["hundred", "thousand"].some(
          (suffix) => words && words[words.length - 1].endsWith(suffix)
        )
      ) {
        words.push("and");
      }
    }

    if (number) {
      if (number < 20) {
        remainder = 0;
        word = BELLOW_TWENTY[number];
      } else if (number < Range.ONE_HUNDRED) {
        remainder = number % Range.TEN;
        word = BELLOW_HUNDRED[Math.floor(number / Range.TEN) - 1];
      } else if (number < Range.ONE_THOUSAND) {
        remainder = number % Range.ONE_HUNDRED;
        word =
          this.convert(Math.floor(number / Range.ONE_HUNDRED)) + " hundred";
      } else if (number < Range.ONE_MILLION) {
        remainder = number % Range.ONE_THOUSAND;
        word =
          this.convert(Math.floor(number / Range.ONE_THOUSAND)) + " thousand";
      }
    }

    if (word) {
      words.push(word);
    }
    return this.convert(remainder, words);
  }
}
export const NumberToWords = new NumberToWordsStatic();
