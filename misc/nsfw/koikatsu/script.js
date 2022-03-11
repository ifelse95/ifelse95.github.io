//sidebar
let sidebarHTML = '<h2>MENU</h2><ul> <li><a href="' + 'index.html">Index</a></li>' + 
'<li><a href="' + 'gallery.html">Galleries</a></li>' +
'<li><a href="' + 'kk-cards.html">Cards</a></li>' +
'<li><a href="' + 'kk-scenes.html">Scenes</a></li>' +
'<li><a href="' + 'kk-tex.html">Overlays/ME</a></li>' +
'<li><a href="' + 'kk-coord.html">Outfits</a></li><br>' ;



//element stuff
if (document.getElementById("sidebar")) {
  document.getElementById("sidebar").innerHTML = sidebarHTML;
}
