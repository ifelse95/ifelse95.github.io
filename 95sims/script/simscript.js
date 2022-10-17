
//footer
let footerHTML = '<p>95sims is not in anyway affiliated with Electronic Arts, this is a fan-made site.<br><a href="../home.html">main site</a> | <a href="https://95sims.tumblr.com/">simblr</a> | <a href="https://www.tumblr.com/95-cc-finds">CC finds</p>' ;


if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

let sidebartextHTML = '<ul> <li><a href="' + 'index.html">Home</a></li>' + 
'<li><a href="' + 'about.html">About</a></li>' +
'<li><a href="' + '../home.html">Main Site</a></li></ul>';

if (document.getElementById("sidebartext")) {
	document.getElementById("sidebartext").innerHTML = sidebartextHTML;
}

let situationsHTML = '<ul> <li><a href="' + 'luka-and-kendall/l-and-k-archive.html">Luka and Kendall</a></li>' + 
'<li><a href="' + 'crimson/crimson-archive.html">Crimson Polycule</a></li>' +
'<li><a href="' + 'kitten/kitten-archive.html">Kitten Household (non-canon)</a></li></ul>';

if (document.getElementById("situations")) {
	document.getElementById("situations").innerHTML = situationsHTML;
}