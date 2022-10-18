$$ = mdui.$;
function scrollShadowListener(appbar) {
    //获取当前滚动条高度
    var topp = $(document).scrollTop();
    if (topp > 0) {
        appbar.removeClass("mdui-shadow-0")
        appbar.addClass("jesse205-shadow-4")
    } else {
        appbar.removeClass("jesse205-shadow-4")
        appbar.addClass("mdui-shadow-0")
    }
}
