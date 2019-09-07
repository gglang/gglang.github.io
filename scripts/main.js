var myImage = document.querySelector('img');
myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/westie.jpg') 
    {
        myImage.setAttribute('src', 'images/westie2.jpg')
    }
    else 
    {
        myImage.setAttribute('src', 'images/westie.jpg')
    }
};

var myHeader = document.querySelector('h1');
var myButton = document.querySelector('button');
myButton.onclick = setUserName;
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeader.textContent = "Welcome Westie appreciator, " + myName;
}

var storedName = localStorage.getItem('name');
if(storedName !== null) {
    myHeader.textContent = 'Welcome Westie appreciator, ' + storedName;
} else {
    setUserName();
}