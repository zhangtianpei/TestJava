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