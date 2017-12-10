
var w3 = {};
w3.includeHTML = function(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("w3-include-html");
          w3.includeHTML(cb);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};
w3.includeHTML();

	var obj = new Object();
	var error = new Object();
	$.getJSON('https://api.github.com/users/andhikamaheva').done(function (data) {
	obj = data;
	document.getElementById("namae").innerHTML = obj.name;
	document.getElementById("login").innerHTML = obj.login;
	document.getElementById("bio").innerHTML = obj.bio;
	document.getElementById("company").innerHTML = obj.company;
	document.getElementById("location").innerHTML = obj.location;
	document.getElementById("email").innerHTML = obj.email;
	document.getElementById("blog").innerHTML = obj.blog;
	document.getElementById("repos").innerHTML = obj.public_repos;
	document.getElementById("followers").innerHTML = obj.followers;
	document.getElementById("following").innerHTML = obj.following;
	}).error(function (err) {
	error = err;
	});