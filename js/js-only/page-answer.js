$(document).ready(function(){
    //show hide tab answer
    $('.box-toggle .content').hide();
    $('.box-toggle span.drop-item:first').addClass('active');
    $('.box-toggle .content:first').show().addClass('active');
    $('.box-toggle span.drop-item:last').addClass('last');
    $(".box-toggle span.drop-item").click(function(){
        var parent = $(this).parent();
        console.log($(this).html());
        if(!$(this).hasClass('active')){
            $('.box-toggle span.drop-item').removeClass('active');
            $(this).addClass('active');
            $('.content').hide().removeClass('active');
            $('.content', parent).show().addClass('active');
        } else {
            $(this).removeClass('active');
            $('.content', parent).hide().removeClass('active');
        }
    });
});
