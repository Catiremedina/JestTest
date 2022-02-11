// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


    // import function from app.js
    const { fromEuroToDollar } = require('./app.js')
    //start test
    test("One euro should be 1.206 dollars", function(){
   
        // we expect 2 to be 2.4 dollars
    expect(fromEuroToDollar(2)).toBe(2.4); 
})


    // import function from app.js
    const { fromDollarToYen } = require('./app.js')
//start test
    test("One dollar should be 106.58 yens", function(){
    
    // We expect 1.2 dollares to be 127.9 yen
    expect(fromDollarToYen(1.2)).toBe(127.9); 
})


// import function from app.js
    const { fromYenToPound } = require('./app.js')
//start test
    test("One Yen should be 0.00625 Pounds", function(){
    
    // we expect 127.9 yen to be 0.8 Pounds
    expect(fromYenToPound(127.9)).toBe(0.8); 
})