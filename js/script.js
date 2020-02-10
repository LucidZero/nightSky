/* VVVVVVVVVV makes max lenght work on android VVVVVVVV */
$(document).ready(function(){
    $(function() {
    maxLength = $("#firstName").attr("maxlength");
    $("#firstName").on("keyup", function() {
        if(this.value.length >= maxLength) {
            $(this).val($(this).val().substr(0, maxLength));
        }
    });
});
    $(function() {
    maxLength = $("#lastName").attr("maxlength");
    $("#lastName").on("keyup", function() {
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

/* VVVVVV show more show less VVVVVV*/ 
$(document).ready(function(){
    $(".hidden").hide();
});
$(document).ready(function(){
    $(".hidden2").hide();
}); //hides rows 2 and row 3

var counter=0;

$(".readMore").click(function(){
    counter+=1;
    if($(this).text() == 'Show Less') { 
        if(counter%2!=0){
        $('.hidden2').slideToggle(500);
    }
    else{
    $('.hidden').slideToggle(500);
    $(this).text() == 'Show Less' ? $(this).text('Show More') : $(this).text('Show Less');
    }
    }
    else{
    if(counter%2!=0){
    $('.hidden').slideToggle(500);
    }
    else{
    $('.hidden2').slideToggle(500);
    $(this).text() == 'Show More' ? $(this).text('Show Less') : $(this).text('Show More');
}
}
});



/*vvvvvv REGEX vvvvvv*/
$(document).ready(function(){
    $("#emailAlert").hide();
});

$("#submit").attr("disabled", true);
$("#email").on("keyup", function(){
var regex=/^(\w+)\@([a-z]+)\.([a-z]{3})$/g;
var textEmail=$("#email").val();
    if(regex.test(textEmail)){

        $("#emailAlert").hide();
    $("#submit").attr("disabled", false);

    $("#submit").css({"cursor": "pointer"});
    }
    else{
        
    $("#emailAlert").show();
        $("#submit").attr("disabled", true);
        $("#submit").css({"cursor": "default"});

    }
});



/*vvvvvv Slider on index page vvvvvv*/
    var sliderMargin=0;
setInterval(function(){
    //every xxxxms switch to the next slider on 200vw go to 0vw and like that in circles
    if (sliderMargin > -200){
    sliderMargin-=100;
    console.log(sliderMargin);
    $("#flexBoxIndex").css({"margin-left":sliderMargin+"vw"});
    }
    else{
    sliderMargin=0; 
    $("#flexBoxIndex").css({"margin-left":sliderMargin+"vw"});
    }
},7000);