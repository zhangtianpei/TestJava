addLoadEvent(prepareShow);
// window.onload = prepareShow;
addLoadEvent(addImgAndP);

// 把点击的图片展现出来
function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var example_p = document.getElementById("example01");
	example_p.setAttribute("src",source);

	var dessource = whichpic.getAttribute("title");
	var example_d = document.getElementById("des");
	example_d.firstChild.nodeValue = dessource;
}

// 点击图片链接时的操作
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

// 增加window.onload事件
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

// 在图片list后面插入示例图片以及文字说明的节点
function addImgAndP(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("piclink")) return false;
	var imgpara = document.createElement("img");
	imgpara.setAttribute("id","example01");
	imgpara.setAttribute("src","images/example.jpg");
	imgpara.setAttribute("alt","Example Image");
	var despara = document.createElement("p");
	despara.setAttribute("id","des");
	var text01 = document.createTextNode("chose a picture!!!");
	despara.appendChild(text01);

	var piclink = document.getElementById("piclink");
	insertAfter(imgpara,piclink);
	insertAfter(despara,imgpara);

	// document.getElementsByTagName("body")[0].appendChild(imgpara);
	// document.getElementsByTagName("body")[0].appendChild(despara);
}

// 在元素后插入新元素
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild = targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
