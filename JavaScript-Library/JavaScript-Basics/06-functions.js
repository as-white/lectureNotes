//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

hello(); // invokes the function hello.
hello();
hello();
hello();

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractAnyTwoNumbers(x, y){
    console.log(x - y);
}

subtractAnyTwoNumbers(6, 3);
subtractAnyTwoNumbers(5, 7);
subtractAnyTwoNumbers(12, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;

    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

function getTheSum(x, y){
    let theSum = x + y;

    return theSum; 
}
console.log(getTheSum(250, 30)); // = 280

function getFullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(getFullName("Jimin", "Park")); // Jimin Park

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));
