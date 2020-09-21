$(document).ready(function(){
    var slider = $(".bxslider").bxSlider({
        auto:true,
        controls: false,
        captions: true,
        touchEnabled: true,
        onSlideAfter: function() {
            slider.stopAuto();
            slider.startAuto();
        }
    });
    var slider_item = $(".bxslider_item").bxSlider({
        mode: 'fade',
        pager: false,
        touchEnabled:false
    });
	$('.icon-menu').click(function(){
		$('.body').toggleClass('wrap-inner');
	});
    $('.box-inner').click(function(){
        $('.body').removeClass('wrap-inner');
    })




    /*Show hide tab detail film*/


    $('#tv-tabs .tab-panel').hide();
    $('#tv-tabs .tab-panel:first').show();
    $('#tv-tabs .control:first').addClass('active');
    $('#tv-tabs .control').click(function(){
        var currentTab = $(this).attr('href');
        $('#tv-tabs .tab-panel').hide();
        $('#tv-tabs .control').removeClass('active');
        $(this).addClass('active');
		$('.bxslider_film li.list-set').addClass('fix-width');
        $(currentTab).show();
    });

    $('.account-mn .par-item').click(function(){
        $('.account-mn').toggleClass('box-hide');
    })



    /*active checked item*/
    $('.tv-info table tr').click(function(){
        var checkbox = $(this).find('input');
        checkbox.prop("checked", !checkbox.prop("checked"));
        $(this).toggleClass('active');
    });



  /*  var divCount = $(".list-set li").length;
    alert(divCount);
*/



});


(function($) {
    $(document).ready(function() {
        $.slidebars();
    });
}) (jQuery);


