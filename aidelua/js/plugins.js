function addPlugins(plugins) {
  var pluginsObj = $$('#plugins')
  for (i = 0; i < plugins.length; i++) {
    var content = plugins[i];
    var description = content.description;
    description = (description) ? description : '暂无介绍';
    pluginsObj.append('<div class="mdui-col mdui-p-a-1">\
    <div class="jesse205-card-outlined jesse205-hoverable jesse205-shadow-transition mdui-card mdui-p-a-1">\
        <div class="mdui-card-menu">\
            <span>14.8KB</span>\
        </div>\
        <div class="mdui-m-a-1">\
            <div class="" style="font-size: 16px;">' + content.name + '</div>\
            <div class="mdui-text-color-theme-secondary">v' + content.versionName + '｜' + content.updateDate + '</div>\
        </div>\
        <div class="mdui-m-a-1">' + description + '</div>\
        <div class="mdui-m-a-1 mdui-text-color-theme-secondary">开发者：' + content.developer + '</div>\
        <a href="' + content.url + '" class="mdui-m-a-2 mdui-btn mdui-btn-icon mdui-color-theme" \
            style="bottom: 0; right: 0; position: absolute;">\
            <i class="mdui-icon material-icons">file_download</i>\
        </a>\
    </div>\
</div>');
  };
};

$(document).ready(function () {
  $$.ajax({
    method: 'GET',
    url: '/api/aidelua/plugins.json',
    success: function (data) {
      addPlugins(JSON.parse(data));
    }
  });
  $(window).scroll(function () {
    var appbar = $("#appbar")
    scrollShadowListener(appbar)
  })
});