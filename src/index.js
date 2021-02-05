module.exports = function toReadable(number) {
    let ones = [
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
    ];
    let teens = [
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
    let doubles = [
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

    let string;
    number = number.toString();

    if (number > 99) {
        if (number[1] === "0" && number[2] != "0") {
            string = ones[number[0]] + " hundred " + ones[number[2]];
        } else if (number[1] == "1" && number[2] !== "0") {
            string = ones[number[0]] + " hundred " + teens[number[2] - 1];
        } else if (number % 100 != 0 && number % 10 != 0) {
            string =
                ones[number[0]] +
                " hundred " +
                doubles[number[1] - 1] +
                " " +
                ones[number[2]];
        } else if (number % 100 != 0 && number % 10 == 0) {
            string = ones[number[0]] + " hundred " + doubles[number[1] - 1];
        } else {
            string = ones[number[0]] + " hundred";
        }
    } else if (number > 19) {
        if (number % 10 != 0) {
            string = doubles[number[0] - 1] + " " + ones[number[1]];
        } else {
            string = doubles[number[0] - 1];
        }
    } else if (number > 9) {
        if (number % 10 != 0) {
            return teens[number[1] - 1];
        } else {
            return doubles[0];
        }
    } else if (number != 0) {
        return ones[number[0]];
    } else {
        return ones[0];
    }
    return string;
};
