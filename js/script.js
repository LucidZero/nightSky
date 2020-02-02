$(document).ready(function(){
    $(function() {
    max_length = $("#fname").attr("maxlength");
    $("#fname").on("keyup", function() {
        if(this.value.length >= max_length) {
            $(this).val($(this).val().substr(0, max_length));
        }
    });
});
    $(function() {
    max_length = $("#lname").attr("maxlength");
    $("#lname").on("keyup", function() {
        if(this.value.length >= max_length) {
            $(this).val($(this).val().substr(0, max_length));
        }
    });
});
    $(function() {
    max_length = $("#msg").attr("maxlength");
    $("#msg").on("keyup", function() {
        if(this.value.length >= max_length) {
            $(this).val($(this).val().substr(0, max_length));
        }
    });
});
});
//^^^^^^^^^^^^^ this above is used to make form only go up to maxlenght on phones

//vvvvvv gallery jquery

$(document).ready(function(){
        var cw = $('.frame').width();
        if(cw<280){
        $('.frame').css({'height':cw+'px'});
        }
});

$(window).resize(function(){
    var cw = $('.frame').width();
    if(cw<280){
    $('.frame').css({'height':cw+'px'});
    }
});

$(document).ready(function(){
    $("#hidden").hide();
}); //document.ready

$(".readMore").click(function(){
    $(this).prev().toggle();
    $(this).text()
    $(this).text() == 'Read More' ? $(this).text('Read Less') : $(this).text('Read More');
});

