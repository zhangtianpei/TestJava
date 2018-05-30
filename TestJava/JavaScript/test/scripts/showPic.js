addLoadEvent(prepareShow);
// window.onload = prepareShow;

function showPic(whichpic){
	if(!document.getElementById("example01")) return false;
	var source = whichpic.getAttribute("href");
	var example_p = document.getElementById("example01");
	if(example_p.nodeName != "IMG") return false;
	example_p.setAttribute("src",source);
	if(document.getElementById("des")){
		var dessource = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var example_d = document.getElementById("des");
		if(example_d.firstChild.nodeType == 3){
			example_d.firstChild.nodeValue = dessource;	
		}
		
	}
	return true;
}

function prepareShow(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("piclink")) return false;
	var pic = document.getElementById("piclink");
	var links = pic.getElementsByTagName("a");

	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			return showPic(this) ? false : true;
			// return false;
		}
		// links[i].onkeypress = links[i].onclick;
	}
}

function addLoadEvent(fn){
            var oldEvents = window.onload;
            if(typeof oldEvents != 'function'){
                window.onload = fn;
            }else{
                window.onload = function(){
                    oldEvents();
                    fn();
                }
            }
}