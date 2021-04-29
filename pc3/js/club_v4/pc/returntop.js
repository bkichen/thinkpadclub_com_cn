(function ($) {
	//发表按钮
    jQuery(document).ready(function(){
        var toptopbox = jQuery(window).height();
        if(toptopbox>1184){
            jQuery('.pcx_toptop1').show();
        }
    });
    jQuery(window).scroll(function(){
        var toptopbox = jQuery('.take_toptopbox1').offset().top;
        if(toptopbox>1165){
            jQuery('.pcx_toptop1').show();
        }else{
            jQuery('.pcx_toptop1').hide();
        }
    });
    //返回顶部
    var ScrollToTop=ScrollToTop||{
		setup:function(){
			var a=jQuery(window).height()/2;
			jQuery(window).scroll(function(){
				(window.innerWidth?window.pageYOffset:document.documentElement.scrollTop)>=a?jQuery("#ScrollToTop").removeClass("Offscreen"):jQuery("#ScrollToTop").addClass("Offscreen")
			});
			jQuery("#ScrollToTop").click(function(){
				jQuery("html, body").animate({scrollTop:"0px"},400);
				return false
			})
		}
	};
    jQuery(document).ready(function(){
        ScrollToTop.setup();
    });
	
	
	
	//发表帖子
    $('#publish').click(function(){
        $(".newpost_mark_wrap").show();
    });

    //关闭发帖
    $("#closeplate").live("click",function(){
        $(".newpost_mark_wrap").hide();
    });

    //点击一级菜单
    $("#firstclass").live("click",function(e){
        $("#firstclass li").removeClass("newpost_inallone_hili");
        $(e.target).parent("li").addClass("newpost_inallone_hili");
        fid=e.target.id;
        var htmls="";
        $.each(JSON.parse($CONFIG.forumList),function(n,value){
            if(fid==n){
                $.each(value.children,function(a,b){
                    htmls+="<li><a href=\"javascript:void(0);\" id='"+b.fid+"'>"+b.name+"</a></li>";
                });
            }
        });
        $("#secondclass").html(htmls);

        //显示面包屑
        $(".newpost_markbox ul li").not(":first").remove();
        var fname = $("#firstclass .newpost_inallone_hili").text();
        var ulhtml = "<li>></li><li><a href='/forum-group-"+fid+"-reply_time-0-1'>"+fname+"</a></li>";
        $(".newpost_markbox ul").append(ulhtml);
    });

    //点击二级菜单
    $("#secondclass").live("click",function(e){
        $("#secondclass li").removeClass("newpost_inallone_hili");
        $(e.target).parent("li").addClass("newpost_inallone_hili");
        sid = e.target.id;

        //显示面包屑
        $(".newpost_markbox ul li:gt(2)").remove();
        sname = $("#secondclass .newpost_inallone_hili a").text();
        var ulhtml = "<li>></li><li><a href='/forum-"+sid+"-0-0-reply_time-0-1'>"+sname+"</a></li>";
        $(".newpost_markbox ul").append(ulhtml);
    });

    //弹窗点击发新帖
    $(".newpost_markbox_btn span a").live("click",function(){
        forum_id = $(".newpost_markbox_inallone #secondclass .newpost_inallone_hili a").attr('id');
        if(forum_id){
            var link = "/forum.php?mod=post&action=newthread&fid=" + forum_id;
            $(this).attr('href', link);
        }
    });
})(jQuery)
