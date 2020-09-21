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
 });
