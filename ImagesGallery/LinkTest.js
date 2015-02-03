/**
 * Created by Administrator on 15-2-3.
 */

function prepareLinks() {
    window.onload =prepareLinks();
    if(!document.getElementsByTagName) return false ;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");
}

<!--需要加载很多的函数的时候-->
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof  window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
