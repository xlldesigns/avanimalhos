//Header Links
function navtofb(){window.open("http://facebook.com/199509190059467");}
function navtoyt(){window.open("https://www.youtube.com/watch?v=Sjd3tiLUgOA");}
function navtotw(){window.open("http://twitter.com/hdanimalcare");}
function navtoph(){window.location.href='tel:661-272-1616';}
function navtogg(){window.open("http://plus.google.com/115532304551817112923");}
function navtoma(){window.open("https://www.google.com/maps/place/3243+E+Palmdale+Blvd,+Palmdale,+CA+93550/@34.5808429,-118.0719333,17z/data=!3m1!4b1!4m5!3m4!1s0x80c257ca6d42069d:0x1c9e654bc11b3b51!8m2!3d34.5808429!4d-118.0697446");}
function cooking(){window.location.href='cooking.html';}
function meetteam(){window.location.href='meetteam.html';}
function services(){window.location.href='services.html';}
function appointment(){window.location.href='contact.html';}

//Rotator1
document.getElementById("rotator").addEventListener("load", rotator());

var step = 1;

function rotator(){
	var rot = document.getElementsByClassName("rotator");
	
	setTimeout(function(){
		for(var o = 0; o < rot.length; o++){
			rot[o].style.display="none";
		}
		rot[step].style.display="block";
		step++;
		if(step < rot.length){   
			rotator();            
		}else{
			step = 0;
			rotator();
		}
	}, 3000)
}

//Newsletter
function checknewsl(){
	var first = document.getElementById('first').value;
	var last = document.getElementById('last').value;
	var email = document.getElementById('email').value;
	
	if(first == ''){
		alert('Please enter your first name');
		return false;
	}else if(last == ''){
		alert('Please enter your last name');
	}else if(email == ''){
		alert('Please enter your email');
	}else{
		return true;
	}
}