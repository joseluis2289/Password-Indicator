const indicator = document.querySelector(".indicator");
const input = document.getElementById("formGroupExampleInput");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
//second part length letters,upper,lower,number
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,``,|,~,(,)]/;

input.addEventListener("keyup", trigger);//keyup event occurs when the user releases a key (on the keyboard).
function trigger() {
  if (input.value != "") {
    indicator.style.display = "block"; //indicator weak,medium,strong
    indicator.style.display = "flex"; //display in a row
    if (
      input.value.length <= 3 &&
      (input.value.match(regExpWeak) ||
        input.value.match(regExpMedium) ||
        input.value.match(regExpStrong))
    )
      no = 1;
    

    if (input.value.length >= 6 &&
      ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
        (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
        (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
    )
      no = 2;

    if (
      input.value.length >= 8 &&
      input.value.match(regExpWeak) &&
      input.value.match(regExpMedium) &&
      input.value.match(regExpStrong)
    )
      no = 3;

    if (no === 1) {
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if (no === 2) {
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    } else {
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if (no === 3) {
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    } else {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }

    //btn
    showBtn.style.display = "block";
    showBtn.onclick = function () {
      if (input.type === "password") {
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      } else {
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    };
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}



document.getElementById("message").style.display = "block"; //Password must contain the following:
input.addEventListener("keyup", () => {
  var lowerCaseLetters = /[a-z]/g;
  if (input.value.match(lowerCaseLetters)) {
    letter.style.display = "none";
  } else {
    letter.style.display = "block";
  }
  var upperCaseLetters = /[A-Z]/g;
  if (input.value.match(upperCaseLetters)) {
    capital.style.display = "none";
  } else {
    capital.style.display = "block";
  }
  var numbers = /[0-9]/g;
  if (input.value.match(numbers)) {
    number.style.display = "none";
  } else {
    number.style.display = "block";
  }
  //VALIDATE LENGTH
  if (input.value.length >= 8) {
    length.style.display = "none";
  } else {
    length.style.display = "block";
  }
  //symbols
  var mySymbols = /.[!@#$%^&*?_``''|""~(,)]/;
  if (input.value.match(mySymbols)) {
    Symbols.style.display = "none";
  } else {
    Symbols.style.display = "block";
  }
});
