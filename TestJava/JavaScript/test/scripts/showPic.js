addLoadEvent(prepareShow);
// window.onload = prepareShow;

function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var example_p = document.getElementById("example01");
	example_p.setAttribute("src",source);

	var dessource = whichpic.getAttribute("title");
	var example_d = document.getElementById("des");
	example_d.firstChild.nodeValue = dessource;
}

function prepareShow(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("piclink")) return false;
	var pic = document.getElementById("piclink");
	var links = pic.getElementsByTagName("a");

	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			showPic(this);
			return false;
		}
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