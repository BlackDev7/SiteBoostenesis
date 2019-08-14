// $(document).ready(function () {
//     $('#ex2').on('slide', function(e) {
//         var price = calculatePrice(e.value[0], e.value[1]);
//         console.log(e.value[0] + ' to ' + e.value[1]);
//         $('.price').text(price.toFixed(2));
//     });

//     $('#ex2').slider({
//       tooltip: 'always',
//       tooltip_split: true
//     });

//    $().UItoTop({ easingType: 'easeOutQuart' });

// });

function calculatePrice(startRating, endRating) {
    var ratingBreakpoints = {
        1500: 0.06,
        2000: 0.08,
        2500: 0.10,
        3000: 0.16,
        3100: 0.25,
        3200: 0.26,
        3300: 0.30,
        3400: 0.31,
        3500: 0.34,
        3600: 0.45,
        3700: 0.53,
        3800: 0.58,
        3900: 0.60,
        4000: 0.75,
        4100: 1.10,
        4200: 1.30,
        4300: 1.65,
        4400: 2.50,
        4450: 3.80,
        4500: 4.00,
        4550: 5.00,
        4650: 6.00,
    };
    var i = 0;
    var price = 0;

    for (i = startRating; i <= endRating; i++) {
        for (breakpoints in ratingBreakpoints) {
            if (i <= breakpoints) {
                price += ratingBreakpoints[breakpoints];
                break;
            }
        }
    }

    return price;
}