window.onload = function(){
	var para = document.createElement("p");
	var testdiv_1 = document.getElementById("testdiv");
	testdiv_1.appendChild(para);
	var text = document.createTextNode("Hello World!");
	para.appendChild(text);
}