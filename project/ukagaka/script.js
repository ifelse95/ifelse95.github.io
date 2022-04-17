//sidebar
let sidebarHTML = '<h2>MENU</h2><ul> <li><a href="' + '../../projects.html">Projects Index</a></li>' + 
'<li><a href="' + 'index.html">Ukagaka Index</a></li>' +
'<li><a href="' + 'how-2-install.html">SSP Setup</a></li>' +
'<li><a href="' + 'ghost.html">My Ghosts</a></li>' +
'<li><a href="' + 'resources.html">Resources</a></li>' ;



//footer
let footerHTML = '<hr><br><center><p>Established November 12, 2020</p><p><a href="./credits.html">credits</a> | <a href="mailto:ifelse95@gmail.com">contact</a> | <a href="./guestbook.html">guestbook</a></p></center>' ;


//element stuff
if (document.getElementById("sidebar")) {
  document.getElementById("sidebar").innerHTML = sidebarHTML;
}

if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}