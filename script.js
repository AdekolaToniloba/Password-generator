const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b",
    "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^",
    "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|",
    ":", ";", "<", ">", ".", "?", "/"
];

let passOneEl = document.getElementById("passwordOne")
let passTwoEl = document.getElementById("passwordTwo")

let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""

    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword

}

function showPassword() {

    passOneEl.textContent = generateRandomPassword()
    passTwoEl.textContent = generateRandomPassword()

}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}

function copyPassword() {
    let copyText = [passOneEl, passTwoEl]

    copyText.getselection();
    copyText.setSelectionRange(0, 99999);

    console.log(copyText.value)
    // navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);
}

