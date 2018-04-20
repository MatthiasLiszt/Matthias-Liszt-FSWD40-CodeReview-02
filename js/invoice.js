var ProductOne = { name: "Trip to London", price: 2360 };
var ProductTwo = { name: "Trip to Amsterdam", price: 1189 };

function priceCalculation() {
    var sum = ProductOne.price + ProductTwo.price;
    var o0 = '<p>If you want to buy ';
    var o1 = 'a <b>Flight to London</b>'
    var o1b = 'a <b>Flight to Amsterdam</b>,';
    var o2a = ' it costs:</p> <p>';
    var o2b = ' EUR</p>';

    if (localStorage.productTwo == 'true' && localStorage.productOne != 'true') {
        document.write(o0 + o1b + o2a + ProductTwo.price + o2b);

    }
    if (localStorage.productOne == 'true' && localStorage.productTwo != 'true') {
        document.write(o0 + o1 + o2a + ProductOne.price + o2b);

    }
    if (localStorage.productOne == 'true' && localStorage.productTwo == 'true') 
    	{ document.write(o0 + o1 + ' and ' + o1b + o2a + sum + o2b); }
    console.log('invoice localStorage ' + localStorage.productOne + ' ' + localStorage.productTwo);


}