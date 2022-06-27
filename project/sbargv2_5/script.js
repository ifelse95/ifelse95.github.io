//sidebar
let sidebarHTML = '<h2>MENU</h2><ul> <li><a href="' + '../../projects.html">Projects Index</a></li>' + 
'<li><a href="' + 'index.html">SBARGv2.5 Index</a></li>' +
'<li><a href="' + 'characters.html">My Characters</a></li>' +
'<li><a href="' + 'biotemplate.html">OC Bio Template</a></li>' +
'<li><a href="' + 'hotel.html">Hotel and  Housing</a></li>' +
'<li><a href="' + 'sbargresources.html">Other Resources</a></li><br><img src="../../img/ifelse95.gif" title="feel free to put my button on your site! just save it to your computer first.">' ;



//footer
let footerHTML = '<hr><br><center><p>Special thanks to shinyJiggly. Established 2020.</p></center>' ;


//element stuff
if (document.getElementById("sidebar")) {
  document.getElementById("sidebar").innerHTML = sidebarHTML;
}

if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}