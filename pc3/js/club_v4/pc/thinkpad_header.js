/**
 * Created by tengys1 on 2017/4/17.
 */
(function ($) {
  $(document).ready(function () {
	var status=false;//true为进入导航，false为离开导航
	var hideInterval;
	var hideMainInterval;
	var bindDomFun = {
	  /**
	   * 显示导航
	   */
	  showCover:function(){
		$(this).children(".headerOver").show();
	  },
	  /**
	   * 隐藏导航
	   */
	  hideCover:function(){
		$(this).children(".headerOver").hide();
	  },
	  /**
	   * 鼠标滑动到导航保持导航不隐藏
	   */
	  setStatus:function(){
		status=true;
	  },
	  /**
	   * 鼠标划出导航隐藏导航
	   */
	 //  hideMainBox:function(){
		// // hideMainInterval=setTimeout(function(){
		//   $(".headerOver").hide();
		// // },200);

	 //  },
	  /**
	   * 显示机型列表
	   */
	  showDiv:function(e){
		clearInterval(hideMainInterval);
		var className=$(e.target).attr("class");
		if(className.indexOf("titleName")>-1){
		  var arr=className.split(" ");
		  var Ulname=arr[1];
		}else{
		  Ulname=className;
		}
		$(".titleName a").css("color","#999999");
		$(".titleName img").hide();
		$(".titleName."+Ulname+" img").show();
		$(".titleName."+Ulname+" a").css("color","#ffffff");
		$(".contentList").hide();
		$("#"+Ulname).show();
	  },
	  /**
	   * 显示场景列表
	   */
	  showTable:function(e){
		//clearInterval(hideInterval);
		$(this).find("table").show();
		$(this).find(".borderImg").show();
	  },
	  /**
	   * 隐藏场景列表
	   */
	  hideTable:function(e){
		var obj=$(this);
		hideInterval=setTimeout(function(){
		  $(obj).find("table").hide();
		  $(obj).find(".borderImg").hide();
		},100);

	  },
	  /**
	   * 回车搜索
	   */
	  searchKeyDown:function(event){
		var keyword = $(this).val();
		if(event.keyCode == 13){
		  if (keyword == '' ) {
			alert('关键词不能为空');
		  } else {
			  window.open("https://club.lenovo.com.cn/search.php?mod=forum&srchtxt="+keyword+"&searchsubmit=yes","_blank");
		  }
		}
	  },
	  /**
	   * 导航搜索
	   */
	  searchKeyWord:function(){
		var keyword = $("#head_keyword").val();
		if (keyword == '' ) {
		  alert('关键词不能为空');
		} else {
			window.open("https://club.lenovo.com.cn/search.php?mod=forum&srchtxt="+keyword+"&searchsubmit=yes","_blank");
		}
	  }
	}

	function IEbug() {
		var version = window.navigator.userAgent.match(/MSIE\s\d+/);
	  	if (!version) {return;}
		var vNumber = version[0].split(" ")[1];
		if(vNumber <= 10){
		    $("#headerOver").css({"paddingTop": 0});
			$("#headerOver").find(".sjx").css({"top": "-14px"});
		}
	}
	function bindDOM(){
	   // $(".productCenter").children("a").bind("mouseenter",bindDomFun.showCover);
	   // $(".productCenter").bind("mouseenter",bindDomFun.showCover);
	   // $(".productCenter").bind("mouseleave",bindDomFun.hideCover);
	   // $(".main").bind("mouseenter",bindDomFun.setStatus);
	   // $(".main").bind("mouseleave",bindDomFun.hideMainBox);
	   $(".titleName").bind("mouseenter",bindDomFun.showDiv);
	   $(".cjSpan").bind("mouseenter",bindDomFun.showTable);
	   $(".cjSpan").bind("mouseleave",bindDomFun.hideTable);
	   $("#head_keyword").bind("keydown",bindDomFun.searchKeyDown);
	   $("#head_search_btn").bind("click",bindDomFun.searchKeyWord);
	   $(".productCenter").hover(bindDomFun.showCover, bindDomFun.hideCover);
	}
	bindDOM();
	IEbug();
  });
})(jQuery)