/*alert("Check");*/

// Button Press Section
var buttons = document.querySelectorAll(".key");
var melody = [];
var melodyText = ["a","a","a","a","a","a","a","a"];
// const dnbMelody = "h,f,h,g,h,j,h,k";
const dnbMelodyE = "m,b,m,n,m,c,m,v";

for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function () {
    // console.log(this.innerHTML);
  var buttonInnerHTML = this.innerHTML;
  makeSoundE(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

    });
}

// Detecting Keyboard Event
document.addEventListener("keydown", function (event) {
  if (event.repeat) return;
  // makeSound(event.key);
  // makeSoundA(event.key);
  makeSoundE(event.key);
  buttonAnimation(event.key);
  // alert("Key was pressed");
});

// function makeSound (key) {
//
//   key = key.toLowerCase();
//
//   switch (key) {
//     case "f":
//       var c4 = new Audio('Sounds/C4.mp3')
//       c4.play();
//       break;
//
//     case "g":
//       var eb4 = new Audio('Sounds/Eb4.mp3')
//       eb4.play();
//       break;
//
//     case "h":
//       var f4 = new Audio('Sounds/F4.mp3')
//       f4.play();
//       break;
//
//     case "j":
//       var ab4 = new Audio('Sounds/Ab4.mp3')
//       ab4.play();
//       break;
//
//     case "k":
//       var bb4 = new Audio('Sounds/Bb4.mp3')
//       bb4.play();
//       break;
//
//     default:
//       console.log(key);
// }
// }

// function makeSoundA (key) {
//
//   key = key.toLowerCase();
//   // A4-E4-A4-G4, A4-C4-A4-D4
//   //  y-r-y-t,y-w-y-e
//
//   switch (key) {
//     case "y":
//       var a4 = new Audio('Sounds/A4.mp3')
//       a4.play();
//       break;
//
//     case "r":
//       var e4 = new Audio('Sounds/E4.mp3')
//       e4.play();
//       break;
//
//     case "t":
//       var g4 = new Audio('Sounds/G4.mp3')
//       g4.play();
//       break;
//
//     case "w":
//       var c4 = new Audio('Sounds/C4.mp3')
//       c4.play();
//       break;
//
//     case "e":
//       var d4 = new Audio('Sounds/D4.mp3')
//       d4.play();
//       break;
//
//     default:
//     break;
//
//       console.log(key);
// }
// }

function makeSoundE (key) {

  key = key.toLowerCase();
  // E5-B4-E5-D5, E5-G4-E5-A4
  //  y-r-y-t,y-w-y-e

  switch (key) {
    case "m":
      var e5 = new Audio('Sounds/E5.mp3')
      e5.play();
      break;

    case "b":
      var b4 = new Audio('Sounds/B4.mp3')
      b4.play();
      break;

    case "n":
      var d5 = new Audio('Sounds/D5.mp3')
      d5.play();
      break;

    case "c":
      var g4 = new Audio('Sounds/G4.mp3')
      g4.play();
      break;

    case "v":
      var a4 = new Audio('Sounds/A4.mp3')
      a4.play();
      break;

    default:
    break;

      console.log(key);
}
}

function buttonAnimation(currentKey) {
  currentKey = currentKey.toLowerCase();
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function() {
     activeButton.classList.remove("pressed")
      }, 100);
  melodyPlayed(currentKey);
  highlightMelody(currentKey);
}

function melodyPlayed(currentKey) {

    melody.push(currentKey);
    melody.join();
    console.log("You played " + melody);
    var m = melody.join();
    // console.log(melody);
    document.getElementById("victory").innerHTML = "";
    if (m == dnbMelodyE) {
      console.log("Wow, remarkable!");
      var applause = new Audio('Sounds/applause.wav')
      applause.play();
      document.getElementById("victory").innerHTML = "Wow, remarkable!";
      // melody.length=0;
    }
    if(melody.length === 8) {
      melody.shift();
      }
    }

    function highlightMelody(currentKey) {
      melodyText.shift();
      melodyText.push(currentKey);
      var oneKey = melodyText.slice(7);
      var twoKeys = melodyText.slice(6);
      var threeKeys = melodyText.slice(5);
      var fourKeys = melodyText.slice(4);
      var fiveKeys = melodyText.slice(3);
      var sixKeys = melodyText.slice(2);
      var sevenKeys = melodyText.slice(1);
      var allKeys = melodyText.slice(0);

      console.log(melodyText)

      if (allKeys.join() == dnbMelodyE) {
        document.getElementById("V").classList.add("played");
      }
      else if (sevenKeys.join() == "m,b,m,n,m,c,m") {
        document.getElementById("M4").classList.add("played");
        document.getElementById("V").classList.remove("played");
      }
      else if (sixKeys.join() == "m,b,m,n,m,c") {
        document.getElementById("C").classList.add("played");
        document.getElementById("M4").classList.remove("played");
        document.getElementById("V").classList.remove("played");
      }
      else if (fiveKeys.join() == "m,b,m,n,m") {
        document.getElementById("M3").classList.add("played");
        document.getElementById("C").classList.remove("played");
        document.getElementById("M4").classList.remove("played");
        document.getElementById("V").classList.remove("played");
      }
      else if (fourKeys.join() == "m,b,m,n") {
        document.getElementById("N").classList.add("played");
        document.getElementById("M3").classList.remove("played");
        document.getElementById("C").classList.remove("played");
        document.getElementById("M4").classList.remove("played");
        document.getElementById("V").classList.remove("played");
      }
      else if (threeKeys.join() == "m,b,m") {
        document.getElementById("M2").classList.add("played");
        document.getElementById("N").classList.remove("played");
        document.getElementById("M3").classList.remove("played");
        document.getElementById("C").classList.remove("played");
        document.getElementById("M4").classList.remove("played");
        document.getElementById("V").classList.remove("played");
      }
      else if (twoKeys.join() == "m,b") {
        document.getElementById("B").classList.add("played");
        document.getElementById("M2").classList.remove("played");
        document.getElementById("N").classList.remove("played");
        document.getElementById("M3").classList.remove("played");
        document.getElementById("C").classList.remove("played");
        document.getElementById("M4").classList.remove("played");
        document.getElementById("V").classList.remove("played");
      }
      else if (oneKey.join() == "m") {
        document.getElementById("M1").classList.add("played");
        document.getElementById("B").classList.remove("played");
        document.getElementById("M2").classList.remove("played");
        document.getElementById("N").classList.remove("played");
        document.getElementById("M3").classList.remove("played");
        document.getElementById("C").classList.remove("played");
        document.getElementById("M4").classList.remove("played");
        document.getElementById("V").classList.remove("played");
      }
      else {
        document.getElementById("M1").classList.remove("played");
        document.getElementById("B").classList.remove("played");
        document.getElementById("M2").classList.remove("played");
        document.getElementById("N").classList.remove("played");
        document.getElementById("M3").classList.remove("played");
        document.getElementById("C").classList.remove("played");
        document.getElementById("M4").classList.remove("played");
        document.getElementById("V").classList.remove("played");
       }

    }
