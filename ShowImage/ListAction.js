/**
 * Created by Administrator on 15-2-6.
 */
$(document).ready(function(){
    $("#btn").click(function(){
    var textInput = $("#input").val();
     var   $li_new=$("<li>"+textInput+"</li>");
        $("ul").append($li_new);
});
});