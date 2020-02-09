$(document).ready(function(){
    $(function() {
    maxLength = $("#fname").attr("maxlength");
    $("#fname").on("keyup", function() {
        if(this.value.length >= maxLength) {
            $(this).val($(this).val().substr(0, maxLength));
        }
    });
});
    $(function() {
    maxLength = $("#lname").attr("maxlength");
    $("#lname").on("keyup", function() {
        if(this.value.length >= maxLength) {
            $(this).val($(this).val().substr(0, maxLength));
        }
    });
});
    $(function() {
    maxLength = $("#msg").attr("maxlength");
    $("#msg").on("keyup", function() {
        if(this.value.length >= maxLength) {
            $(this).val($(this).val().substr(0, maxLength));
        }
    });
});
});
//^^^^^^^^^^^^^ this above is used to make form only go up to maxlength on phones

//vvvvvv gallery jquery
/*
$(document).ready(function(){
        var cw = $('#gallery').width();
        console.log(cw);
        
        if(cw<=280){

            $('.frame').css({'width':cw-'10p'});
        }
});
$(window).resize(function(){
    var cw = $('#gallery').width();
    if(cw<=280){

        $('.frame').css({'width':cw-'10px'});
    }
});
*/
$(document).ready(function(){
    $('#galleryFoot').css({"margin-top": "300px"});
});
$(document).ready(function(){
    $(".hidden").hide();
});
$(document).ready(function(){
    $(".hidden2").hide();
}); //hides row 2 and row 3

var counter=0;

$(".readMore").click(function(){
    
    counter+=1;
    if($(this).text() == 'Show Less') { 

        if(counter%2!=0){
        $('.hidden2').slideToggle(500);

        $('#galleryFoot').css({"margin-top": "300px"});
    }
    else{

    $('.hidden').slideToggle(500);
    $(this).text() == 'Show Less' ? $(this).text('Show More') : $(this).text('Show Less');

    $('#galleryFoot').css({"margin-top": "300px"});
    }

    }
    else{

    if(counter%2!=0){
    $('.hidden').slideToggle(500);

    $('#galleryFoot').css({"margin-top": "300px"});
    }
    else{
    
    $('.hidden2').slideToggle(500);
    $(this).text() == 'Show More' ? $(this).text('Show Less') : $(this).text('Show More');
    $('#galleryFoot').css({"margin-top": "250px"});
}
}
});

