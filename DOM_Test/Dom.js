/**
 * Created by Administrator on 15-2-2.
 */

// var item = document.getElementById("purchases");
//   alert(item);
//    var items = document.getElementsByTagName("li");
//    for (var i = 0; i < items.length; i++)
//        alert(typeof items[i]);
//    var paras = document.getElementsByTagName("p");
//    for(var i=0;i<paras.length;i++){
//        var title_text=(paras[i].getAttribute("title"));
//        if(title_text){//if(title_text!=null){
//            alert(title_text);
//
//        }
//    }
//   var test= document.getElementById("purchases");
//   alert(test.getAttribute("title"));
//   test.setAttribute("title","a list of purchase");
//    alert(test.getAttribute("title"));

var paras =document.getElementsByTagName("p");
for(var i=0;i<paras.length;i++){
    var title_text =paras[i].getAttribute("title");
    if(title_text){
        paras[i].setAttribute("title","brand new text text");
        alert(paras[i].getAttribute("title"));
    }
}
