function dropdownVisiblity(){
  var content = document.getElementsByClassName("dropdown-options");
  if(content[0].style.display == "none"){
    content[0].style.display = "grid"
    var dropUL = document.getElementById("drop-ul");
    dropUL.innerHTML = `<li><a href="/">Home</a></li>
    <li><a href="portfolio/">Portfolio</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="/commissions/">Commissions</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="stream-info.html">Stream Info</a></li>
    <li><a href="shop/">Shop</a></li>`
  } else {
    content[0].style.display = "none"
  }
  }
