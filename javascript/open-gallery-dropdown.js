function galleryDropdownVisiblity(){
  var content = document.getElementsByClassName("gallery-menu");
  if(content[0].style.display == "none"){
    content[0].style.display = "grid"
    content[0].innerHTML = `<ul>
    <li><a href="illustration.html">Illustration</a></li>
    <li><a href="chibi.html">Chibi</a></li>
    <li><a href="chibi-animals.html">Chibi Animals</a></li>
    <li><a href="sketches.html">Sketches</a></li>
    <li><a href="emotes.html">Emotes</a></li>
    <li><a href="pngtuber.html">PNGtuber</a></li>
    <li><a href="icons.html">Icons</a></li>
    </ul>`
  } else {
    content[0].style.display = "none"
  }
  }