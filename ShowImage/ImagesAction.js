/**
 * Created by Administrator on 15-2-5.
 */
var btnSel = 1;
var btnEnd;
function DefaultState() {
    $(document).ready(function () {
        $("#img_2").hide();
        $("#img_3").hide();
        $("#img_4").hide();
    });
}
/*
 function BtnSel_1(){
 $(document).ready(function(){
 $("#btn1").click(
 function(){
 $("#img_1").show();
 $("#img_2").hide();
 $("#img_3").hide();
 $("#img_4").hide();

 }
 );
 });
 }
 function BtnSel_2(){
 $(document).ready(function(){
 $("#btn2").click(
 function(){
 $("#img_1").hide();
 $("#img_2").show();
 $("#img_3").hide();
 $("#img_4").hide();
 }
 );
 });
 }
 function BtnSel_3(){
 $(document).ready(function(){
 $("#btn3").click(
 function(){
 $("#img_1").hide();
 $("#img_2").hide();
 $("#img_3").show();
 $("#img_4").hide();
 }
 );
 });
 }
 function BtnSel_4(){
 $(document).ready(function(){
 $("#btn4").click(
 function(){
 $("#img_1").hide();
 $("#img_2").hide();
 $("#img_3").hide();
 $("#img_4").show();

 }
 );
 });
 }

 window.onload = function () {
 DefaultState();
 BtnSel_1();
 BtnSel_2();
 BtnSel_3();
 BtnSel_4();
 }
 */

console.log('开始 ready');

$(document).ready(function () {

  console.log('开始 绑定 click');

    $("button").click(function (event) {

     console.log('开始响应 click');

        //console.log(event);

        console.log('currentTarget', event.currentTarget);

        console.log('target', event.target);

       var index = $(event.target).attr('data-index');
        $("img").hide();
        $("img[data-index="+index+"]").show();

     console.log(index);

     console.log($('img[data-index=' + index + ']').attr('src'));

     console.log('结束响应 click');

    });

 console.log('结束 绑定 click');

});

console.log('结束 ready');
