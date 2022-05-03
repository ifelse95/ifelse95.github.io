//header
let headHTML = '<a href="' + '../index.html">Index</a> ' + 
'<a href="' + '../categories.html">Categories</a> ' +
'<a href="' + '../../home.html">Homepage</a> ' ;



//element stuff
if (document.getElementById("head")) {
  document.getElementById("head").innerHTML = headHTML;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 