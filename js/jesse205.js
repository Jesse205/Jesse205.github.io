$$ = mdui.$;
function scrollShadowListener(appbar,scrollTop) {
    //获取当前滚动条高度
    
    if (scrollTop > 0) {
        appbar.removeClass("mdui-shadow-0")
        appbar.addClass("jesse205-shadow-4")
    } else {
        appbar.removeClass("jesse205-shadow-4")
        appbar.addClass("mdui-shadow-0")
    }
}


function initMenu(menusList,menusObj,moreMenuObj) {
    for (i = 0; i < menusList.length; i++) {
        var content = menusList[i];
        if (content.type == "menu") {
            menusObj.append('<a href="' + content.href + '" class="jesse205-btn-icon-text mdui-btn mdui-hidden-xs-down" targrt="' + content.target + '">' + content.title + '</a>')
            moreMenuObj.append('<li class="mdui-menu-item">\
          <a href="' + content.href + '" class="mdui-ripple" targrt="' + content.target + '">' + content.title + '</a>\
        </li>');
        } else if (content.type == "divider") {
            moreMenuObj.append('<li class="mdui-divider"></li>');
        }
    }
}