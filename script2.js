$(function () {
    //Анімація при кліку на пункти меню
    $('.menu-link').each(function (index, element) {
        $(element).click(function () {
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('html').animate({
                scrollTop: top
            }, 1400)
        })
    })
 
    // Зміна 'стану' dots при click на них
    $('.slider-dots_item').each(function (index, element) {
        $(element).click(function () {
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('html').animate({
                scrollTop: top
            }, 1400)
            $(this).addClass('active');
            $('.slider-dots_item').not(this).removeClass('active');
        })
    })
    // Зміна 'стану' dots при scroll
    $(window).scroll(function () {
        let windowHeight = $(window).height();
        if ($(this).scrollTop() <= windowHeight) {
            $('#one').addClass('active');
            $('#two').removeClass('active');
            $('#three').removeClass('active');
            $('#four').removeClass('active');
            $('#five').removeClass('active');

        }
        else if ($(this).scrollTop() >= windowHeight && $(this).scrollTop() <= windowHeight * 2) {
            $('#one').removeClass('active');
            $('#two').addClass('active');
            $('#three').removeClass('active');
            $('#four').removeClass('active');
            $('#five').removeClass('active');
        }
        else if ($(this).scrollTop() >= windowHeight * 2 && $(this).scrollTop() <= windowHeight * 3) {
            $('#two').removeClass('active');
            $('#three').addClass('active');
            $('#one').removeClass('active');
            $('#four').removeClass('active');
            $('#five').removeClass('active');
        }
        else if ($(this).scrollTop() >= windowHeight * 3 && $(this).scrollTop() < windowHeight * 4) {
            $('#three').removeClass('active');
            $('#four').addClass('active');
            $('#one').removeClass('active');
            $('#two').removeClass('active');
            $('#five').removeClass('active');
        }
        else if ($(this).scrollTop() >= windowHeight * 4) {
            $('#four').removeClass('active');
            $('#five').addClass('active');
            $('#one').removeClass('active');
            $('#two').removeClass('active');
            $('#three').removeClass('active');
        }
    })

    //Ефект при наведенні та відведенні мишки на блоки
    $('.about2').each(function (element, index) {
        $(this).mouseover(function () {
            $(this).css({
                width: "30%",
                height: '320px'
            })
        })
        $(this).mouseout(function () {
            $(this).css({
                width: "25%",
                height: '300px'
            })
        })
    })
    $('.left').each(function (element, index) {
        $(this).mouseover(function () {
            $(this).css({
                textDecoration: 'underline',
                background: 'rgb(67, 46, 25)',
                color: 'white'
            })
        })
        $(this).mouseout(function () {
            $(this).css({
                textDecoration: 'none',
                background: 'antiquewhite',
                color: 'black'
            })
        })
    })
    $('.right').each(function (element, index) {
        $(this).mouseover(function () {
            $(this).css({
                textDecoration: 'underline',
                background: 'black',
                color: 'white'
            })
        })
        $(this).mouseout(function () {
            $(this).css({
                textDecoration: 'none',
                background: 'brown',
                color: 'black'
            })
        })
    })


    //Слайдер для фото
    $('.nxt_b').click(function () {                         //клік на кнопку next
        let currentImage = $('.imgSl.curry')              //фото з класом curry
        let currentImageIndex = $('.imgSl.curry').index()     //index фото з класом curry
        let nextImageIndex = currentImageIndex + 1         // index фото з класом curry (крок в 1)
        let nextImage = $('.imgSl').eq(nextImageIndex)       //КОЖНЕ наступне фото
        currentImage.hide()                                  //при кліку поточне фото зникає
        currentImage.removeClass('curry');                   //далі, видаляється клас curry
        if (nextImageIndex == ($('.imgSl:last').index() + 1)) {    //якщо індекс НАСТУПНОГО фото +1, то
            $('.imgSl').eq(0).show()                         //воно зявляється і
            $('.imgSl').eq(0).addClass('curry')              //йому присвоюється клас curry
        }
        else {
            nextImage.show()                                //якщо ні, то зявляється наступне зображення
            nextImage.addClass('curry')                     //якому присвоюється класс curry
        }
    });
    $('.prv_b').click(function () {                                   //click на кнопку prev
        let currentImage = $('.imgSl.curry')
        let currentImageIndex = $('.imgSl.curry').index()
        let prevImageIndex = currentImageIndex - 1                    //index фото з класом curry (крок в -1)
        let prevImage = $('.imgSl').eq(prevImageIndex)
        currentImage.hide()                                          //при кліку поточне фото зникає
        currentImage.removeClass('curry')                            //далі, видаляється клас curry
        prevImage.show()                                        // фото зявляються у зворотньому на прямку
        prevImage.addClass('curry')                              //їм присвоюється клас curry

    });
})


