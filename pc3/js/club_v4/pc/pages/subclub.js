/*seajs.use(['jquery','progress','layer','touchSlide','totop'],function($) {

    $('#progress').progress({
        default: 90
    });


    $("#indexBanner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});

    $("#slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});

    $(".slideTxtBox").slide({trigger:"click"});




    $(".btn").click(function(){
        //页面层

        layer.open({
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['300px', '295px'], //宽高
            content: $("#box")
        });
    })

});*/
/*define(function(require, exports, module) {
    var $ = require('jquery');
    var progress  = require("progress");
    var layer = require('layer');
    var touchSlide  = require("touchSlide");

    exports.init=function(){
        $('#progress').progress({
            default: 90
        });

        $("#indexBanner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
        $("#slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
        $(".slideTxtBox").slide({trigger:"click"});

        $(".btn").click(function(){
            layer.open({
                type: 1,
                skin: 'layui-layer-rim', //加上边框
                area: ['300px', '295px'], //宽高
                content: $("#box")
            });
        })

    }

})*/
seajs.use("//js1cdn.clubstatic.lenovo.com.cn/pc3/js/club_v4/pc/pages/sourse/slide",function(a){
    a.init();
});
seajs.use("//js1cdn.clubstatic.lenovo.com.cn/pc3/js/club_v4/pc/pages/sourse/tab",function(a){
    a.init();
});

seajs.use("//js1cdn.clubstatic.lenovo.com.cn/pc3/js/club_v4/pc/pages/sourse/pop",function(a){
    a.init();
});
seajs.use("//js1cdn.clubstatic.lenovo.com.cn/pc3/js/club_v4/pc/pages/sourse/progress",function(a){
    a.init();
});

seajs.use("//js1cdn.clubstatic.lenovo.com.cn/pc3/js/club_v4/pc/pages/sourse/totop",function(a){
    a.init();
});
