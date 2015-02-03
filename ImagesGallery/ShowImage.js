/**
 * Created by Administrator on 15-2-2.
 */
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;      //检查
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    if(placeholder.nodeName != "IMG") return false;                 //检查

    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){                       //检查
            description.childNodes[0].nodeValue = text;
        }

        //description.firstChild.nodeValue = text;
    }
    return true;
}

//function countBodyChildren(){
//    var body_element = document.getElementsByTagName("body")[0];
//   // alert(body_element.childNodes.length);
//    alert(body_element.nodeType);
//}
//
//window.onload = countBodyChildren;

function prepareGallery(){

    if(!document.getElementsByTagName || !document.getElementsByTagName) return false ;
    if(!document.getElementById("imagegallery")) return false ;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0; i<links.length ; i++){
        links[i].onclick = function () {
            return showPic(this) ? false : true ;
            //showPic(this);
            //return !showPic(this); //false ;
        }
       // links.onkeypress =links[i].onclick();
    }
}


window.onload = function(){
    prepareGallery();
}
