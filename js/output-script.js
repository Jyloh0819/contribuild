$(document).ready(function(){ 

    var totalAmount = JSON.parse(sessionStorage.getItem('totalAmount'));

    $('.output-amount').empty();
    $('.output-amount').append('$' + totalAmount);


});