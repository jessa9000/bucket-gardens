
//=====================================
//Use arrays to generate onclick functions for multiple areas and modules.
var areaList = ["coreopsisArea", "phloxArea", "viburnumArea", "yarrowArea", "baptisiaArea", "juniperArea"];
var modalList = ["modal1", "modal2", "modal3", "modal4", "modal5", "modal6"];
var spanList = ["close1", "close2", "close3", "close4", "close5", "close6"];
var qList = ["q1", "q2", "q3", "q4", "q5", "q6"];
var hiddenPicList = ["hidden-pic1", "hidden-pic2", "hidden-pic3", "hidden-pic4", "hidden-pic5", "hidden-pic6"];

for (i=0; i < areaList.length; i++){
  let area = document.getElementById(areaList[i]);
  let modal = document.getElementById(modalList[i]);
  area.onclick = function() {
    modal.style.display ="block";
  }
  let span = document.getElementById(spanList[i]);
  let q = document.getElementById(qList[i]);
  let hiddenPic = document.getElementById(hiddenPicList[i]);
  span.onclick = function() {
    modal.style.display = "none";
    q.style.display="none";
    hiddenPic.style.display="block";
  }    
}

