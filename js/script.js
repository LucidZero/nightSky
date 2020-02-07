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

    $('#galleryFoot').css({"margin-top": "600px"});
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
    $('#galleryFoot').css({"margin-top": "150px"});
}
}
});

