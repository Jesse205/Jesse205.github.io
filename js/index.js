function addApps(apps) {
    mainListObj = $$("#mainlist");
    for (groupIndex = 0; groupIndex < apps.length; groupIndex++) {
        var group = apps[groupIndex];
        var items = group.items;
        mainListObj.append('<div class="mdui-panel-item mdui-panel-item-open">\
          <div class="mdui-panel-item-header mdui-ripple mdui-p-x-2">\
            <div class="mdui-panel-item-title">' + group.name + '</div>\
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>\
          </div>\
          <div class="mdui-panel-item-body mdui-p-x-2">\
            <div id="' + group.id + '" \
              class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3"></div>\
          </div>\
        </div>');

        var itemsObj = $$("#" + group.id);
        for (itemIndex = 0; itemIndex < items.length; itemIndex++) {
            var content = items[itemIndex];
            itemsObj.append('<div class="mdui-col mdui-p-a-1">\
            <a href="'+ content.src + '" target="_blank">\
              <div class="jesse205-card-outlined jesse205-hoverable jesse205-shadow-transition mdui-card mdui-ripple">\
                <div class="mdui-card-media">\
                  <img src="'+ content.image + '" alt="' + content.name + '" draggable="false" style="aspect-ratio: 16/9;" />\
                  <div class="jesse205-card-media-covered-light mdui-card-media-covered mdui-card-media-covered-transparent">\
                    <div class="mdui-card-primary">\
                      <div class="mdui-card-primary-title">'+ content.name + '</div>\
                      <div class="mdui-card-primary-subtitle">'+ content.summary + '</div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </a>\
          </div>')
        }

    }
    mainListObj.mutation();
}
function addConfig(config) {
    var menus = config.menus;
    
    var menusObj = $$("#menus");
    var moreMenuObj = $$("#menu-more");
    initMenu(menus, menusObj, moreMenuObj);
}
$(document).ready(function () {
    $.getJSON("/api/applications.json", function (data) {
        addApps(data);
    });
    $.getJSON("/api/index.json", function (data) {
        addConfig(data);
    });
    $(window).scroll(function () {
        var appbar = $("#appbar");
        scrollShadowListener(appbar);
    });
});