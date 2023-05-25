let button1 = document.querySelector(".button")
console.log(button1)
let resultbeetle = document.querySelector(".resultbeetle")
console.log(resultbeetle)
let resulttruck = document.querySelector(".resulttruck")
console.log(resulttruck)
let resultmclaren = document.querySelector(".resultmclaren")
console.log(resultmclaren)
let resultferrari = document.querySelector(".resultferrari")
console.log(resultferrari)
let questionScreen = document.querySelector(".questions")
console.log(questionScreen)
let message = document.querySelector(".message")
console.log(message)
let retake = document.querySelector(".retake")
console.log(retake)


button1.onclick = function() {
  let answer1 = document.querySelector(".answer1").value;
  console.log(answer1)
  let answer2 = document.querySelector(".answer2").value;
  console.log(answer2)

  if (answer1.toLowerCase() === "a" && answer2.toLowerCase() === "a") {
    resultbeetle.style.display = "block";
    questionScreen.style.display = "none";
    button1.style.display = "none";
    retake.style.display = "block";
  } else if (answer1.toLowerCase()  === "a" && answer2.toLowerCase()  === "b") {
    resulttruck.style.display = "block"
    questionScreen.style.display = "none";
    button1.style.display = "none";
    retake.style.display = "block";
  } else if (answer1.toLowerCase()  === "b" && answer2.toLowerCase()  === "a" ) {
    resultferrari.style.display = "block"
    questionScreen.style.display = "none";
    button1.style.display = "none";
    retake.style.display = "block";
  } else if (answer1.toLowerCase()  === "b" && answer2.toLowerCase()  === "b") {
    resultmclaren.style.display = "block"
    questionScreen.style.display = "none";
    button1.style.display = "none";
    retake.style.display = "block";

  } else {
    message.style.display = "block"
    message.innerHTML = "Choose a Given choice"
    questionScreen.style.display = "none";
    button1.style.display = "none";
    retake.style.display = "block";
  }
  retake.onclick = function() {
    questionScreen.style.display = "block";
    button1.style.display = "block";
    resultbeetle.style.display = "none";
    resultmclaren.style.display = "none";
    resultferrari.style.display = "none";
    resulttruck.style.display = "none";
    message.style.display = "none";
    retake.style.display = "none";
  }
};