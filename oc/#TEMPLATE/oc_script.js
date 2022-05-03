//header
let headHTML = '<a href="' + 'index.html">Index</a> ' + 
'<a href="' + 'categories.html">Categories</a> ' +
'<a href="' + 'home.html">Homepage</a> ' ;



//element stuff
if (document.getElementById("head")) {
  document.getElementById("head").innerHTML = headHTML;
}

