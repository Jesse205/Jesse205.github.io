applications = [
    {
        "name": "Aide Lua",
        "summary": "为更方便的移动开发",
        "image": "images/aidelua_card.png",
        "src": "https://gitee.com/Jesse205/AideLua"
    },
    {
        "name": "Edde Lua",
        "summary": "为更好开发看的物理环境",
        "image": "images/aidelua_card.png",
        "src": "https://gitee.com/Jesse205/AideLua/blob/master/README_eddelua.md"
    },
    {
        "name": "哈兔Box",
        "summary": "简洁蓝白风工具箱",
        "image": "images/aidelua_card.png",
        "src": "//hellotool.jesse205.com"
    },
    {
        "name": "畅玩6X工具箱",
        "summary": "不止为畅玩6X开发",
        "image": "images/aidelua_card.png",
        "src": "."
    },
    {
        "name": "百度一下Lite",
        "summary": "特别简洁的浏览器主页",
        "image": "images/aidelua_card.png",
        "src": "./baiduhomelite"
    }
]
function addApps(apps) {
    for (i = 0; i < apps.length; i++) {
        var content = apps[i]
        //console.log("<li class=\"item\">{0}---{1}</n>".format(content.title,content.date));
        //console.log('<li class="item"><div class="itemLeft"><a href="https://vp.fact.qq.com/article?id={id}">{title}</a></div>             <div class="itemRight">{date}</div>    </li>'.format({"id":content.id,"title":content.title,"date":content.date}));
        //$(".menu").append("<a href='" + b[i] + ".html' style='margin:8px;'>" + a[i] + "</a>")
        $("#applications").append('<div class="mdui-col mdui-p-a-1">\
            <a href = "'+ content.src + '" target = "_blank" >\
            <div class="mdui-card jesse205-card mdui-hoverable mdui-ripple">\
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
    addApps(applications)
    $(window).scroll(function(){
        var appbar=$("#appbar")
        //获取当前滚动条高度
        var topp = $(document).scrollTop();

        if(topp > 0){
            appbar.removeClass("mdui-shadow-0")
            appbar.addClass("jesse205-shadow-4")
        }else{
            appbar.removeClass("jesse205-shadow-4")
            appbar.addClass("mdui-shadow-0")
        }
    })
});