var romanNumeral = function(value) {

    var allRomanNumerals = {'I': 1, 'V': 5};
    var valueRoman = [];

    for (var i = 1; i <= value; i++) {
        valueRoman.push('I');

    if (valueRoman.join("") === "IIII") {
        valueRoman.splice(1, valueRoman.length, "V");
    }

    }
    return valueRoman.join("");

    // 4 => if greater than 3, then take the next roman numeral value and subtract the value of the previous roman numeral from it,
    // 5 - 1 = 4

};

// $(document).ready(function() {
//
//     $('form#').submit(function(event) {
//
//
//         $('#result').show();
//         event.preventDefault();
//
//     });
//
// });
