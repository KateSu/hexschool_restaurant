$(document).ready(function() {
    /*
        ##          ###    ##    ##  #######  ##     ## ########
        ##         ## ##    ##  ##  ##     ## ##     ##    ##
        ##        ##   ##    ####   ##     ## ##     ##    ##
        ##       ##     ##    ##    ##     ## ##     ##    ##
        ##       #########    ##    ##     ## ##     ##    ##
        ##       ##     ##    ##    ##     ## ##     ##    ##
        ######## ##     ##    ##     #######   #######     ##
    */
    // toggle event on the mobile menu button
    $('#toggle-btn')
        .click(function(e) {
            e.preventDefault();
            $('header').toggleClass('show-menu');
        })
        .blur(function() {
            $('header').toggleClass('show-menu');
        });

    // hover evnet on the mobile menu item
    $('#menu li').hover(function() {
        $('#menu li').removeClass('active');
        $(this).addClass('active');
    }, function() {
        $('#menu li').removeClass('active');
    });

    // animations of menu items in index
    $('#menu').on('click', 'a', function(e) {
        e.preventDefault();
        var _href = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(_href).offset().top }, 700);
    })

    // go-top button shows and hides when window is scrolling
    $(window).scroll(function() {
        function delayClose() {
            setTimeout(function() {
                $('#go-top').stop(true).delay(800).slideUp(700);
            }, 2500);
            clearTimeout(function() {
                setTimeout(function() {
                    $('#go-top').stop(true).delay(800).slideUp(700);
                }, 2500)
            });
        }
        $('#go-top')
            .stop(true)
            .slideDown(500, delayClose());
    });

    // animation for going top
    $('#go-top').click(function(e) {
        e.preventDefault();
        $('hmtl, body').animate({ scrollTop: 0 }, 1000);
    });



    /*
         ######  ##     ##  #######  ########  ########  #### ##    ##  ######
        ##    ## ##     ## ##     ## ##     ## ##     ##  ##  ###   ## ##    ##
        ##       ##     ## ##     ## ##     ## ##     ##  ##  ####  ## ##
         ######  ######### ##     ## ########  ########   ##  ## ## ## ##   ####
              ## ##     ## ##     ## ##        ##         ##  ##  #### ##    ##
        ##    ## ##     ## ##     ## ##        ##         ##  ##   ### ##    ##
         ######  ##     ##  #######  ##        ##        #### ##    ##  ######
    */

    // click event on the product menu to the active item
    $('#product-menu li').click(function (){
        $('#product-menu li').removeClass('active');
        $(this).addClass('active');
    })

    // hover on the heart fonticon
    $('i.addToFav').hover(function() {
        if ($(this).hasClass('added') == false) {
            $(this)
                .removeClass('icon-heart-empty')
                .addClass('icon-heart');
        }
    }, function() {
        if ($(this).hasClass('added') == false) {
            $(this)
                .removeClass('icon-heart')
                .addClass('icon-heart-empty');
        }
    });

    // adding products to favorite list by clicking the heart fonticon
    $('i.addToFav').click(function() {
        $(this)
        if ($(this).hasClass('added') == false) {
            $(this)
                .addClass('added');
        } else {
            $(this)
                .removeClass('icon-heart')
                .removeClass('added')
                .addClass('icon-heart-empty');
        }
    });

    // adding product to cart by clicking addToCart button
    // increasing or decreasing of the number in the orange dot on the cart fonticon
    $('a.addToCart').click(function(e) {
        e.preventDefault();
        $(this).addClass('added');
        var cartNumber = $('a.addToCart.added').length;
        $('#cartNumber').html(cartNumber);
        if (cartNumber >= 10) {
            $('#cartNumber').css('right', '-5px')
        }
    });

});
