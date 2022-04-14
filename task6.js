function convertTo(Sentence, count) {
    let myString = Sentence  // my string to convert
    let counter = count  // Specifies my Step
    let splitString = []; // string convert push this array
    for (let i = 0; i < myString.length; i = i + counter) {
        splitString.push(myString.slice(i, i + counter));
    }
    console.log(splitString);
}
convertTo('thisIsTest', 2)