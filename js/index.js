function addApps(apps) {
    applicationsObj=$("#applications")
    for (i = 0; i < apps.length; i++) {
        var content = apps[i]
        applicationsObj.append('<div class="mdui-col mdui-p-a-1">\
            <a href = "'+ content.src + '" target="_blank" >\
            <div class=" jesse205-card jesse205-hoverable jesse205-shadow-transition mdui-card mdui-ripple">\
                <div class="mdui-card-media">\
                    <img src="'+ content.image + '" alt="'+ content.name + '" />\
                    <div class="mdui-card-media-covered">\
                        <div class="mdui-card-primary">\
                            <div class="mdui-card-primary-title">'+ content.name + '</div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
          </a>\
        </div>')
    }
}
$(document).ready(function () {
    $.getJSON("/api/applications.json", function (data) {
        addApps(data)
    });
    $(window).scroll(function(){
        var appbar=$("#appbar")
        scrollShadowListener(appbar)
    })
});