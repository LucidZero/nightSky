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

/*$(document).ready(function(){
        var cw = $('.imageHolders').width();
        if(cw<280){
        $('.imageHolders').css({'height':cw+'px'});
        }
});

$(window).resize(function(){
    var cw = $('.imageHolders').width();
    if(cw<280){
    $('.imageHolders').css({'height':cw+'px'});
    }
});
*/
$(document).ready(function(){
    $("#hidden").hide();
}); //hides row 2

$(".readMore").click(function(){
    $(this).prev().slideToggle(500);
    $(this).text()
    $(this).text() == 'Show More' ? $(this).text('Show Less') : $(this).text('Show More');
});//animates read more  when it goes up and down

