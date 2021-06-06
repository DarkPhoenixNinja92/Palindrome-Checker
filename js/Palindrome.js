function reverseInput() {
    let userInput = document.getElementById("user-input").value;
    let inputReversed = userInput.split("").reverse().join("");

    if (inputReversed == userInput) {
        document.getElementById("result").innerHTML = userInput + " is a Palindrome";
    } else {
        document.getElementById("result").innerHTML = userInput + " is not a Palindrome";
    }
}