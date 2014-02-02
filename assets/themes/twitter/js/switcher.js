"use strict";

$(function () {

//Zet student standaard aan, misschien een cookie?
    $(".instructor").hide();
    
    //OnClick
    $("#student").click(function (event) {
        event.preventDefault();
        $(".instructor").hide();
    });
    
    $("#teacher").click(function (event) {
        event.preventDefault();
        $(".instructor").show();
    });
    
});