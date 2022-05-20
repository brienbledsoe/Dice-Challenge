//alert("working")

  var randomNumber1 = Math.floor(Math.random() * 6);
  var randomNumber2 = Math.floor(Math.random() * 6);
  randomNumber1 += 1;
  randomNumber2 += 1;
  var leftDicePicker = "dice" + randomNumber1 + ".png";
  var rightDicePicker = "dice" + randomNumber2 + ".png";
  console.log(document.querySelectorAll("img"));
  var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];
  image1.setAttribute("src", "images/" + leftDicePicker);
  image2.setAttribute("src", "images/" + rightDicePicker);
  console.log("This is image 1: ", image1.getAttribute("src"));
  console.log("This is image 2: ", image2.getAttribute("src"));

  console.log("List of attributes: ", document.querySelector(".img1"));



  if (randomNumber1 > randomNumber2) {
    var headerText = document.querySelector("h1");
    headerText.textContent = "Player 1 wins!"
  }else if(randomNumber1 < randomNumber2){
    var headerText = document.querySelector("h1");
    headerText.textContent = "Player 2 wins!"
  }else{
    var headerText = document.querySelector("h1");
    headerText.textContent = "Draw!"; 
  }
