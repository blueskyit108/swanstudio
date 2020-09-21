$(document).ready(function(){
    $('.btn-drop').click(function(){
        $('.content-category').toggleClass('item-hide');
    });

    $('form.content-category li').click(function(){
        var checkbox = $(this).find('input');
        if(!checkbox.prop("checked")){
            checkbox.prop("checked", !checkbox.prop("checked"));
        }
    });
});
$(document).mouseup(function (e) {
    var container = $(".box-drop-category .content-category");
    var btn = $('.box-drop-category .btn-drop');
    if (!container.is(e.target) && container.has(e.target).length === 0
        && !btn.is(e.target) && btn.has(e.target).length === 0){
        container.addClass('item-hide');
    }
});