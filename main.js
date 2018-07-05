function enableInvert() {
  alert("White on Black time!");
  var x = document.getElementById("page");
  x.classList.remove("sepia");
  x.classList.remove("murica");
  x.classList.add("invert");
}

function enableSepia() {
  alert("Sepia theme has been Enabled.");
  var x = document.getElementById("page");
  x.classList.remove("invert");
  x.classList.remove("murica");
  x.classList.add("sepia");
}

function enableMurica() {
  alert("Murica! theme has been Enabled.");
  var x = document.getElementById("page");
  x.classList.remove("invert");
  x.classList.remove("sepia");
  x.classList.add("murica");
}

function enableReturn() {
  alert("Going back to normal!");
  var x = document.getElementById("page");
  x.classList.remove("invert");
  x.classList.remove("sepia");
  x.classList.remove("murica");
}
