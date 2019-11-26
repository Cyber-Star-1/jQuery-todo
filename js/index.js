$("ul").on("click", "li",function () { 
    $(this).toggleClass("done");
});
$("ul").on("click","span",function (e) {
    $(this).parent().fadeOut(500 ,function(){
        $(this).remove()
    });
    e.stopPropagation()
});
$("input[type = 'text']").keypress(function (e) { 
    if(e.which === 13){
       var inputText= $(this).val();
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+inputText +"</li>");
    }
});
$(".fa-plus").click( function () { 
    $(this).toggleClass("rotate");
    $("input").slideToggle();
 })
