function validasiForm() {
  var a = document.forms["form"]["email"].value;
  var b = document.forms["form"]["nama"].value;
  var c = document.forms["form"]["subyek"].value;
  var d = document.forms["form"]["pesan"].value;
  if (a == ""||b == ""||c == ""||d == "") {
    window.alert("Tolong isi semua form");
    return false;
  }
  } 