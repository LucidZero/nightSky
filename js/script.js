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

$(function(){
    $("#firstName").text().charAt(0). toUpperCase();
    
    $("#lastName").text().charAt(0). toUpperCase();
});


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

