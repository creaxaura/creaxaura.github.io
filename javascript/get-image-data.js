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

function grabImage(dataName){
fetch(dataName)
  .then(data => data.text())
  .then(file => getImages(file, dataName))
}


function getImages(file, dataName){
  var fileNames = file.split("\n");
  var placePut = document.getElementsByClassName("gallery");
  
  var rowAmount = fileNames.length / 4;
  for(let i = 0; i < rowAmount; i++){
    var currentRow = document.createElement("div");
    currentRow.className = "gallery-row";
    for(let k = 0; k < 4; k++){

      var sizeNum = (i * 4) + k;

      if(sizeNum >= fileNames.length){
        break;
      } else {
        var currentButton = document.createElement("button")
        currentButton.className = "clear-button";
  
        currentImageName ="images/portfolio/"+ fileNames[sizeNum];
        if (dataName == "art_portfolio_icon_images.txt" || dataName == "art_portfolio_emote_images.txt"){

          currentButton.innerHTML = "<button class='clear-button' onClick='viewImage(this.value);' value='" + currentImageName + "' > <img class='small-gallery-img' src='" + currentImageName + "'/></button>";
          currentRow.append(currentButton);

        } else if (dataName == "art_portfolio_pngtuber_images.txt"){
          currentButton.innerHTML = "<button class='clear-button' onClick='viewImage(this.value);' value='" + currentImageName + "' > <img class='gallery-img' src='" + currentImageName + "'/></button>";
          currentRow.append(currentButton);
        }else {
          currentButton.innerHTML = "<button class='clear-button' onClick='viewImage(this.value);' value='" + currentImageName + "' > <img class='long-gallery-img' src='" + currentImageName + "'/></button>";
          currentRow.append(currentButton);
        }
      }
    }

    placePut[0].append(currentRow);
  }
}