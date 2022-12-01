var counter = 0;


function clicked(){
    counter++;
    if(counter == 1){
        document.getElementById("container").style.backgroundColor="black";
        document.getElementById("Text").style.color="white";
        document.getElementById("Button").style.border="1px solid white";
        document.getElementById("Text").innerHTML = "How exciting :>";
    }else if(counter == 2){
        document.getElementById("container").style.backgroundColor="white";
        document.getElementById("Text").style.color="black";
        document.getElementById("Button").style.border="2px solid black";
        document.getElementById("Text").innerHTML = "This is my First Website!";
        counter = 0;
    }
}

