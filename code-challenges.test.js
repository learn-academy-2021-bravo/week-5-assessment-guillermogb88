// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe ( "vowelReplacer", () => {
    let secretCodeWord1 = "Lackadaisical"
    let secretCodeWord2 = "Gobbledygook"
    let secretCodeWord3 = "Eccentric"
    it("replaces vowels with numbers " ,() => {
    //write the expectation of the function 
    expect(vowelReplacer(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(vowelReplacer(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(vowelReplacer(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"





// b) Create the function that makes the test pass.
// i need to create a function that takes in a string 
const vowelReplacer = (string) => {
    // need to make the string into an array so its easy to work on -- go find string method that turns string into an array
    //.split look up syntax
    let newString = (string.split) 
   
    //new string will equal array.map
    //map over the array (look up syntax)
    //return vowels replaced with numbers 
    // then we would need a method to remove the letters
    //then use a different method to add the numbers where the vowels were
    // couldnt figure out the syntax for the rest of the problem
    return newString
}
console.log(vowelReplacer(secretCodeWord3))




// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
describe ( "wordsA", () => {
    let arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
    let arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
    it("returns all the word with the letter a" ,() => {
    //write the expectation of the function 
    expect(wordsA(arrayOfWords1)).toEqual(["Apple", "Banana"])
    expect(wordsA(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])
    })

})

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Orange", "Apricot", "Peach"]




// b) Create the function that makes the test pass.

// need to create an if else function maybe? that will remove the word if it recognizes the letter "A" in the string 
//need a method that'll remove 
// i belive by trying to acess the indexs and if they stricly equal the character of A then remove them. 
const wordsA = (string) => {

    if(index[0,1,2,3,4,5] === "A")
    returns = ""
    else 


}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe ( "fullHouse", () => {
    let hand1 = [5, 5, 5, 3, 3]
    let hand2 = [5, 5, 3, 3, 4]
    let hand3 = [5, 5, 5, 5, 4]
    it("tells yous wether hand is a full house or not " ,() => {
    //write the expectation of the function 
    expect(fullHouse(hand1)).toEqual("true")
    expect(fullHouse(hand2)).toEqual("false")
    expect(fullHouse(hand3)).toEqual("false")
    })

})

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false





// b) Create the function that makes the test pass.
//not even sure where to start with this one 