$(document).ready(function(){
    $(function() {
        max_length = $("#fname").attr("maxlength");
        $("#fname").attr("onkeypress", "if(this.value.length >= max_length) return false;");
    });
    $(function() {
        max_length = $("#lname").attr("maxlength");
        $("#lname").attr("onkeypress", "if(this.value.length >= max_length) return false;");
    });
    $(function() {
        max_length = $("#msg").attr("maxlength");
        $("#msg").attr("onkeypress", "if(this.value.length >= max_length) return false;");
    });
});


