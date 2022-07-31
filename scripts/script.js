var buttonToMove = document.getElementById("movingButton");
var rectangle = document.getElementById("onSymbolRectancle");
var circle = document.getElementById("onSymbolCircle");
var buttonToClick = document.getElementById("clickedButton");
var centerLight = document.getElementById("centerLightOn");
var light = document.getElementById("lightOn");
var isClicked = false;

function OnOff()
{
    if (isClicked)
    {
        isClicked = false;
        centerLight.classList.remove("centerLightOff");
        light.classList.remove("lightOff");
        buttonToMove.classList.remove("buttonMovesLeft");
        buttonToMove.classList.remove("buttonRight");
        buttonToMove.classList.add("buttonMovesRight");
        buttonToMove.classList.add("buttonLeft");
        circle.classList.add("green");
        rectangle.classList.add("green");
        buttonToClick.classList.add("clicked");
        centerLight.classList.add("centerLightOn")
        light.classList.add("lightOn");
    }
    else
    {
        isClicked = true;
        centerLight.classList.remove("centerLightOn");
        light.classList.remove("lightOn");
        buttonToClick.classList.remove("clicked");
        circle.classList.remove("green");
        rectangle.classList.remove("green");
        buttonToMove.classList.remove("buttonMovesRight");
        buttonToMove.classList.remove("buttonLeft");
        buttonToMove.classList.add("buttonMovesLeft");
        buttonToMove.classList.add("buttonRight");
        centerLight.classList.add("centerLightOff")
        light.classList.add("lightOff");
    }
}

