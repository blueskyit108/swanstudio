

jQuery(document).ready(function ($) {
    $(".sb-toggle-left").click(function(){
        $('.wrapper').toggleClass('wrap-inner');
    });

    $(".inner").click(function(){
        $('.wrapper').removeClass('wrap-inner');
    });
    /**/



/* show hide slidershow item tv, film, .. on page home*/

    $('#tv-tabs .tab-panel').hide();
    $('#tv-tabs .tab-panel:first').show();
    $('#tv-tabs .control:first').addClass('active');
    $('#tv-tabs .control').click(function(){
        var currentTab = $(this).attr('href');
        $('#tv-tabs .tab-panel').hide();
        $('#tv-tabs .control').removeClass('active');
        $(this).addClass('active');
        $(currentTab).show();
    });

    $('#film-tabs .tab-panel').hide();
    $('#film-tabs .tab-panel:first').show();
    $('#film-tabs .control:first').addClass('active');
    $('#film-tabs .control').click(function(){
        var currentTab = $(this).attr('href');
        $('#film-tabs .tab-panel').hide();
        $('#film-tabs .control').removeClass('active');
        $(this).addClass('active');
        $(currentTab).show();
    });
	
	 $('#kids-tabs .tab-panel').hide();
    $('#kids-tabs .tab-panel:first').show();
    $('#kids-tabs .control:first').addClass('active');
    $('#kids-tabs .control').click(function(){
        var currentTab = $(this).attr('href');
        $('#kids-tabs .tab-panel').hide();
        $('#kids-tabs .control').removeClass('active');
        $(this).addClass('active');
        $(currentTab).show();
    });

	 $('#video-tabs .tab-panel').hide();
    $('#video-tabs .tab-panel:first').show();
    $('#video-tabs .control:first').addClass('active');
    $('#video-tabs .control').click(function(){
        var currentTab = $(this).attr('href');
        $('#video-tabs .tab-panel').hide();
        $('#video-tabs .control').removeClass('active');
        $(this).addClass('active');
        $(currentTab).show();
    });


/*
    $('.content').hide();
    $('.content:first').show();
    $('span.control:last').addClass('last');
    $('span.control').click(function(){
        var parent = $(this).parent().parent();
        console.log(parent);
        if(!$(this).hasClass('active')){
            $('span.control').removeClass('active');
            $(this).addClass('active');
            $('.content').hide().removeClass('active');
            $('.content', parent).show().addClass('active');
        } else {
            $(this).removeClass('active');
            $('.content', parent).hide().removeClass('active');
        }
    });
	
*/







});
jQuery(document).ready(function ($) {
    var options = {
        $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
        $AutoPlayInterval: 2000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1                                 //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
    };

    //Make the element 'slider1_container' visible before initialize jssor slider.
    $("#slider1_container").css("display", "block");
    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        if (parentWidth) {
            jssor_slider1.$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});

$(document).ready(function(){
    var slider = $(".bxslider").bxSlider({
        autoControls: true,
        pause: 3000,
        slideMargin: 20
    });
    var slider_item = $(".bxslider_item").bxSlider({
        mode: 'fade',
        pager: false,
        touchEnabled:false
    });

});


(function($) {
    $(document).ready(function() {
        $.slidebars();
    });
}) (jQuery);


