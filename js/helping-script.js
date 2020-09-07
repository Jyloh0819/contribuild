$(document).ready(function(){ 

    $('#menu-home').click(function(){

        $(location).attr('href', 'index.html');
    })

    $('#menu-who').click(function(){

        $(location).attr('href', 'about.html');
    })

    $('#web-logo').click(function(){

        $(location).attr('href', 'index.html');
    })

    $('#link').click(function(){

        $(location).attr('href', 'https://www.who.int/');
           
    })

    $('.donate-btn').click(function(){

        $(location).attr('href', 'donate.html');
    })


});