$(document).ready(function(){ 

    $('#menu-who').click(function() {

        $(location).attr('href', 'about.html');
    })

    $('#menu-how').click(function(){

        $(location).attr('href', 'helping.html');
    })

    
    $('.donate-btn').click(function(){

        $(location).attr('href', 'donate.html');

        
    })


});