// Assignment 2
// switch image

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'http://picture.ik123.com/uploads/allimg/191030/12-191030134202.gif') {
      myImage.setAttribute ('src','https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif');
    } else {
      myImage.setAttribute ('src','http://picture.ik123.com/uploads/allimg/191030/12-191030134202.gif"');
    }
}


// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Wecome to Test Web v2, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Wecome to Test Web v2, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
