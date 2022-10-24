function addConfig(config) {
  var menus = config.menus
  var screenshot = config.screenshot
  var developers = config.developers
  var contact = config.contact
  var links = config.links

  var toolbarObj = $("#toolbar")
  var moreMenuObj = $("#menu-more")
  var screenshotsObj = $("#screenshots")
  var developersObj = $("#developers")
  var contactObj = $("#contact")
  var linksObj = $("#links")

  for (i = 0; i < menus.length; i++) {
    var content = menus[i]
    if (content.type == "menu") {
      toolbarObj.append('<a href="' + content.href + '" class="mdui-btn jesse205-btn-icon-text mdui-hidden-xs-down" targrt="' + content.targrt + '">' + content.title + '</a>')
      moreMenuObj.append('<li class="mdui-menu-item">\
      <a href="' + content.href + '" class="mdui-ripple" targrt="' + content.targrt + '">' + content.title + '</a>\
    </li>')
    } else if (content.type == "divider") {
      moreMenuObj.append('<li class="mdui-divider"></li>')
    }
  }
  //开发者
  for (i = 0; i < developers.length; i++) {
    var content = developers[i]
    developersObj.append('<div>\
        <img class="avatar jesse205-card-outlined" src="' + content.avatar + '" draggable="false" alt />\
        <h1 class="mdui-text-center title">' + content.name + '</h1>\
        <p class="mdui-text-center subtitle mdui-text-color-theme-secondary">' + content.summary + '</p>\
      </div>')
  }
  //截图
  for (i = 0; i < screenshot.length; i++) {
    var content = screenshot[i]
    screenshotsObj.append('<div class="screenshot-item mdui-container mdui-col">\
        <h1 class="title mdui-text-color-theme-accent">' + content.title + '</h1>\
        <p class="subtitle mdui-text-color-theme-secondary">' + content.summary + '</p>\
        <img class="screenshot jesse205-card-outlined" src="' + content.src + '" alt />\
      </div>')
  }
  //联系我们
  for (i = 0; i < contact.length; i++) {
    var content = contact[i]
    contactObj.append('<div class="mdui-col">\
        <a class="jesse205-btn-outlined jesse205-btn-withicon jesse205-hoverable mdui-btn mdui-ripple" href="' + content.href + '" target="_blank" mdui-tooltip=\'' + JSON.stringify(content.tooltip) + '\'>\
            <' + content.icontag + ' class="mdui-icon material-icons" src="' + content.iconsrc + '" alt>' + content.icon + '</' + content.icontag + '>' + content.title + '</a>\
      </div>')
  }
  //友情链接
  for (i = 0; i < links.length; i++) {
    var content = links[i]
    linksObj.append('<div class="mdui-col">\
    <a href="' + content.href + '" target="_blank">\
      <div class="mdui-btn mdui-ripple mdui-text-color-theme-400 ">\
        <span class="mdui-chip-title">' + content.name + '</span>\
      </div>\
    </a>\
  </div>')
  }

}
$(document).ready(function () {
  $.getJSON("/api/aidelua/index.json", function (data) {
    addConfig(data)
  });
  $.getJSON("https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest", function (data) {
    $("#download").text("下载 (" + data.tag_name + ")");
    new mdui.Tooltip('#download', {
      content: ("更新日志：\r\n" + data.body).replace(/\r\n/g, "<br>")
    });
  });
  $(window).scroll(function () {
    var appbar = $("#appbar")
    var toolbar = $("#toolbar")
    var topp = $(document).scrollTop();
    scrollShadowListener(appbar)
    if (topp > 0) {
      toolbar.removeClass("toolbar-top")
    } else {
      toolbar.addClass("toolbar-top")
    }
  })
});