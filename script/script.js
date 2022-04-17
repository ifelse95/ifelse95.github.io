
//footer
let footerHTML = '<br><center><p>Established 11.12.2020 | Hosted on <a href="https://wertercatt.com/">wertercatt.com</a></p><p><a href="./credits.html">credits</a> | <a href="mailto:ifelse95@gmail.com">contact</a> | <a href="https://ifelse95.123guestbook.com/l">guestbook</a></p></center>' ;


if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
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