
//Animation on acknowledgments page.

document.getElementById("funButton").addEventListener("click", growPlant);


function growPlant(){

    let myButton = document.getElementById("funButton");

    if (myButton.innerHTML == "Click here to grow your plant."){
        myButton.innerHTML = "Click again.";
        document.getElementById("grow1").style.display ="none";
        document.getElementById("grow2").style.display ="block";
    }
    else if (myButton.innerHTML == "Click again."){
        myButton.innerHTML = "Click again...";
        document.getElementById("grow2").style.display ="none";
        document.getElementById("grow3").style.display ="block";
    }
    else if (myButton.innerHTML == "Click again..."){
        myButton.innerHTML = "Thank you for visiting!";
        document.getElementById("grow3").style.display ="none";
        document.getElementById("grow4").style.display ="block";
    }
    else {
      myButton.innerHTML = "Click here to grow your plant.";
      document.getElementById("grow4").style.display ="none";
      document.getElementById("grow1").style.display ="block";
    };

  };



