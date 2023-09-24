function viewImage(imgSrc){
  var popUp = document.getElementsByClassName("pop-up");
  popUp[0].style.display = "block";
  var viewImage = document.getElementById("view-img");
  viewImage.src = imgSrc;
}

function exitViewImage(){
  var popUp = document.getElementsByClassName("pop-up");
  popUp[0].style.display = "none";
}