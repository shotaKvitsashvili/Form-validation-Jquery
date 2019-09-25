$(document).ready(function () {
    //Variables for what to include
    var upperCase = new RegExp('[A-Z]');
    var lowerCase = new RegExp('[a-z]');
    var numbers = new RegExp('[0-9]');
    //Warning messages and labels' size
    $("input").focusout(function () {
        $(".warning").css({ 'opacity': '0', 'z-index': '-1' });
        $(".password-warning").css({ 'opacity': '0', 'z-index': '-1' });
        if ($(this).val().length <= 0) {
            $(this).prev().css({ 'font-size': '11px', 'top': '0', 'color': '#19192f', 'top': '10px', 'font-size': '16px', 'color': '#635d5d' });
        }
    })
    $("label").click(function () {
        $(this).css({ 'font-size': '11px', 'top': '0', 'color': '#19192f' });
    })
    $("input").focus(function () {
        $(this).prev().css({ 'font-size': '11px', 'top': '0', 'color': '#19192f' });
    })
    $("#username").focus(function () {
        $(".warning").css('opacity', '1');
        $(".warning").css('z-index', '99');
        $(".warning").html("Must contain: At least 1 uppercase letter, 1 lowercase letter, 1 number, must be at least 6 characters long");
    })
    $("#username").keyup(function () {
        if ($("#username").val().match(upperCase) && $("#username").val().match(lowerCase) && $("#username").val().match(numbers) && $("#username").val().length >= 6) {
            $(".warning").css({ 'opacity': '0', 'z-index': '-1' });
            $(".success-check").html('<i class="fa fa-check"></i>');
        }
        else {
            $(".warning").html("Must contain: At least 1 uppercase letter, 1 lowercase letter, 1 number, must be at least 6 characters long");
            $(".success-check").empty();
            $(".warning").css({ 'opacity': '1', 'z-index': '99' });
        }
    });
    $("input").keydown(function (e) {
        if (e.keyCode == 32 && $(this).val().indexOf('') >= 0) {
            alert('no space allowed')
            return false;
        } // Name shouldn't include space
    })
    $("#password").focus(function () {
        $(".password-warning").css({ 'opacity': '1', 'z-index': '99' });
        $(".password-warning").html('Must contain at least 1 number. Must be at least 6 characters long');
    })
    $("#password").keyup(function () {
        if ($("#password").val().match(numbers) && $("#password").val().length >= 6) {
            $(".password-warning").css({ 'opacity': '0', 'z-index': '-1' });
            $(".password-success-check").html('<i class="fa fa-check"></i>');
        }
        else {
            $(".password-warning").css({ 'opacity': '1', 'z-index': '99' });
            $(".password-success-check").empty();
        }
    })
    $("#password-confirm").keyup(function () {
        if ($("#password").val() === $("#password-confirm").val()) {
            $(".password-success-confirm").html('<i class="fa fa-check"></i>')
        }
        else {
            $(".password-success-confirm").empty()
        }// Passwords match
    });
    //On submit prevent everything will be submitted correctly 
    $("#submit-button").click(function (event) {
        if ($("input").val().length <= 6) {
            event.preventDefault();
            alert('Please fill the fields correctly')
        }
        if($("#password").val() !== $("#password-confirm").val()){
            alert('Passwords do not match');
            event.preventDefault();
        }
    })
    //Prevent form to be submitted on enter key
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});