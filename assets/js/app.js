var text=document.getElementById("captcha");
var input=document.getElementById("validate");
function captcha(){
	var array="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
	for (var i = 0; i < 7; i++) {
		ram=Math.floor(Math.random()*array.length);
		text.innerHTML+=array.substr(ram, 1);
		text.style.color = randomColors();
	}
}
function randomColors(){
 	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

captcha();
document.getElementById("refresh").addEventListener("click",function(e){
	e.preventDefault();
	text.innerHTML="";
	captcha();
});

document.getElementById("check").addEventListener("click",function(e){
	e.preventDefault();
	if (text.value == input.value) {
		alert("Lo hiciste muy bien !!");
	}
	else {
		alert("Intentalo nuevamente")
	}
});