$(document).ready(function(){ 

    $('#menu-home').click(function(){

        $(location).attr('href', 'index.html');
    })

    $('#menu-who').click(function(){

        $(location).attr('href', 'about.html');
    })

    $('#menu-how').click(function(){

        $(location).attr('href', 'helping.html')
    })

    $('#web-logo').click(function(){

        $(location).attr('href', 'index.html');
    })

    $('#back-btn').click(function(){

        $(location).attr('href', 'index.html');
    })

    $('#menuToggle input').click(function(){

        $('#menu').css(
            {
                'display': 'block'
            }
        )
    })

    $('.area-1').click(function(){

        $('.area-container-1').css(
            {
                'width': '33vw'
            }

        )

        $('.area-container-2').css(
            {
                'width': '10vw',
                'transform': 'translateX(740px) translateY(-277px)'
            }

        )

        $('.area-container-3').css(
            {
                'width': '10vw',
                'transform': 'translateX(920px) translateY(-625px)'
            }

        )

        $('.area-container-4').css(
            {
                'width': '10vw'
            }

        )

        $('#area-2-text').css(
            {
                'display': 'none'
            }
        )

        $('#area-3-text').css(
            {
                'display': 'none'
            }
        )

        $('#area-4-text').css(
            {
                'display': 'none'
            }
        )

        $("#area-2").css(
            {
                'transform': 'translateY(35px) translateX(-20px)'
            }
        )

        $("#area-3").css(
            {
                'transform': 'translateY(33px) translateX(-17px)'
            }
        )

        $("#area-4").css(
            {
                'transform': 'translateY(35px) translateX(-10px)'
            }
        )

        $('.amount-btn').css(
            {
                'display':'block'
            }
        )
    })

    $('.area-1-mobile').click(function(){

        $('.area-container-1-mobile').css(
            {
                'width': '83.5vw',
                'height': '250px'
            }
        )

        $('.area-container-2-mobile').css(
            {
                'width':'18vw',
                'height': '65px', 
                'transform': 'translateX(31px) translateY(38px)'
            }
        )

        $('.area-container-3-mobile').css(
            {
                'width':'18vw',
                'height': '65px',
                'transform': 'translateX(156px) translateY(-28px)'
            }
        )

        $('.area-container-4-mobile').css(
            {
                'width':'18vw',
                'height': '65px',
                'transform': 'translateX(277px) translateY(-95px)'
            }
        )

        $('#area-1-text-mobile').css(
            {
                'transform': 'translateX(110px) translateY(-93px)',
                'width':'46vw'
            }
        )

        $('#area-2-text-mobile').css(
            {
                'display': 'none'
            }
        )

        $('#area-3-text-mobile').css(
            {
                'display': 'none'
            }
        )

        $('#area-4-text-mobile').css(
            {
                'display': 'none'
            }
        )

        $("#area-2-mobile").css(
            {
                'width': '13vw',
                'transform': 'translateX(6px) translateY(-19px)'  
            }
        )

        $("#area-3-mobile").css(
            {
                'width': '13vw',
                'transform': 'translateX(8px) translateY(-20px)'
            }
        )

        $("#area-4-mobile").css(
            {
                'width': '13vw',
                'transform': 'translateX(8px) translateY(-17px)'   
            }
        )

        $('#proceed-btn').css(
            {
                'transform': 'translateX(26px) translateY(-87px)'
            }
        )

        $('#total-amount').css(
            {
                'display':'block'
            }
        )

        $('.amount-btn').css(
            {
                'display':'block'
            }
        )
            
    

    });

    //input-output

    $('#amount-1').click(function(){

        var amountOne = '25';
        sessionStorage.setItem('totalAmount', JSON.stringify(amountOne));

        $('#output-amount').empty();
        $('#output-amount').append('$' + amountOne);

    })

    $('#amount-2').click(function(){

        var amountOne = '50';
        sessionStorage.setItem('totalAmount', JSON.stringify(amountOne));

        $('#output-amount').empty();
        $('#output-amount').append('$' + amountOne);

    })

    $('#amount-3').click(function(){

        var amountOne = '100';
        sessionStorage.setItem('totalAmount', JSON.stringify(amountOne));

        $('#output-amount').empty();
        $('#output-amount').append('$' + amountOne);
    })

    //redirect page 
    $('#proceed-btn').click(function(){

        if($('#other').val() != "" ){
            
                var totalAmount = $('#other').val();
                 //save to session storage 
                sessionStorage.setItem('totalAmount', JSON.stringify(totalAmount));
            }
    
        $(location).attr('href', 'output.html');
    });
   



});