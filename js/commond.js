$(function() {
	$(window).resize(infinite);
	function infinite() {
		var htmlWidth = $("html").width();
		if(htmlWidth >= 640) {
			$("html").css({"font-size": "24px"});
		} else {
			$("html").css({"font-size": 24 / 640 * htmlWidth + "px"});
		}
	} infinite();
    // 返回首页
    // 返回顶部
    function disblok() {
        var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        if(top >= 150) {
            $(".top").animate({"width": "13%"})
        } else {
            $(".top").css({"width": "0"})
        }
    }
    // 函数调用
    $(window).scroll(function() {
        disblok();
    })
    // 回到顶部
    var timer = null;
    function toTop() {
        var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        clearTimeout(timer);
        window.scrollBy(0, -100);
        timer = setTimeout(toTop, 30);
        if(top == 0) {
            clearTimeout(timer);
        }
    }
    $(".top").on("touchend", function(event) {
        event.preventDefault()
        toTop()
    })
    // 子页全屏图片等于屏幕高度；
    $(".z-mile-center").height($(window).height());
    $(".z-call").height($(window).height());
    $(".commercial-block-top-lhai").height($(window).height());
    $(".tupian").height($(window).height());
    $(".z-supporting-center").height($(window).height());
})