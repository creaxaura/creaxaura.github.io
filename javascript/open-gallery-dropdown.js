function galleryDropdownVisiblity(){
  var content = document.getElementsByClassName("gallery-menu");
  if(content[0].style.display == "none"){
    content[0].style.display = "grid"
    content[0].innerHTML = `<ul>
    <li><a href="art-portfolio.html">Illustration</a></li>
    <li><a href="art-portfolio-chibi.html">Chibi</a></li>
    <li><a href="art-portfolio-chibi-animals.html">Chibi Animals</a></li>
    <li><a href="art-portfolio-sketches.html">Sketches</a></li>
    <li><a href="art-portfolio-emotes.html">Emotes</a></li>
    <li><a href="art-portfolio-pngtuber.html">PNGtuber</a></li>
    <li><a href="art-portfolio-icons.html">Icons</a></li>
    <li><a href="art-portfolio-stickers.html">Stickers</a></li>
    </ul>`
  } else {
    content[0].style.display = "none"
  }
  }