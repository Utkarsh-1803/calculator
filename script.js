let screen = document.getElementById('screen');
buttons = document.getElementsByClassName('button');
let screenValue = '';

for(var i = 0; i<buttons.length; i++){
buttons[i].addEventListener('click', function(){
    buttonText = this.innerText;

    if(buttonText=='x'){
buttonText = '*';
screenValue += buttonText;
screen.value = screenValue;
    }

else if(buttonText=='AC'){
screenValue = "";
screen.value = screenValue;
}

else if (buttonText=='='){ 
screen.value = eval(screenValue);
}
    else if (buttonText == "+/-") {
      screen.value = screenValue * -1;
      screenValue = screen.value;
    }
    else if (buttonText == "%") {
      screen.value = screenValue / 100;
    } 

else{
    screenValue += buttonText;
    screen.value = screenValue;
}

});

}
