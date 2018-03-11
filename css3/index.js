$(function(){
    $('#fullpage').fullpage({
        anchors:['page1','page2','page3','page4','page5','page6'],
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function(link, index) {
            switch(index) {
                case index: 
                  $('.section'+index).addClass('isshow');
                  break;
                default: 
                  break;
            }
        },
        onLeave: function(index, nextIndex, direction) {
            switch(index) {
                case index: 
                  $('.section'+index).removeClass('isshow');
                  break;
                default: 
                  break;
            }
        }
    });

    $(".move-area").mousemove(function(event) {
        var eye = $(".eye");
        var x = (eye.offset().left) + (eye.width() / 2);
        var y = (eye.offset().top) + (eye.height() / 2);
        var rad = Math.atan2(event.pageY - y, event.pageX - x);

        // 180 由于css是以x轴正方向顺时针转动，而atan2得出的角度以x轴正方向逆时针转动，所以相差180度
        // 90 因为黑色眼珠一开始就是垂直方向有90度
        var rot = rad * (180 / Math.PI) - 180 - 90;
        eye.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
        });
    });
});