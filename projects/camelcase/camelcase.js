function myTranslate() {
  var text = document.getElementById("textarea").value.split("");
  text[0] = text[0].toUpperCase();
  for (var i = 1; i < text.length; i++) {
    if (i % 2 == 0) text[i] = text[i].toUpperCase();
  }
  document.getElementById("textarea").value = text.join("");
}

function myCopy() {
  navigator.clipboard.writeText(document.getElementById("textarea").value);
}
