const { createApp, ref, watchEffect } = Vue

const CONFIG_URL = "/api/aidelua/index.json"
const APPCONFIG_URL = "https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest"
const config = ref(null)
const appConfig = ref(null)
const isTop = ref(true)

createApp({
  data() {
    fetch(CONFIG_URL)
      .then((res) => res.json())
      .then((json) => (config.value = json))
      .catch(function (error) {
        console.error(error)
      })
    fetch(APPCONFIG_URL)
      .then((res) => res.json())
      .then((json) => (appConfig.value = json))
      .catch(function (error) {
        console.error(error)
      })
    return {
      config,
      appConfig,
      isTop
    }
  },
  mounted() {

    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset
      isTop.value = Boolean(scrollTop <= 0)
    })
    mdui.mutation()
  },
  updated() {
    mdui.mutation()
  }
}).mount('#app')


function addConfig(config) {
  var menus = config.menus;
  var screenshot = config.screenshot;
  var developers = config.developers;
  var contact = config.contact;
  var links = config.links;

  var menusObj = $$("#menus");
  var moreMenuObj = $$("#menu-more");
  var screenshotsObj = $$("#screenshots");
  var developersObj = $$("#developers");
  var contactObj = $$("#contact");
  var linksObj = $$("#links");
  //菜单
  initMenu(menus, menusObj, moreMenuObj);

  //开发者
  for (i = 0; i < developers.length; i++) {
    var content = developers[i]
    developersObj.append('<div>\
        <img class="avatar jesse205-card-outlined" src="' + content.avatar + '" draggable="false" alt />\
        <h1 class="mdui-text-center title">' + content.name + '</h1>\
        <p class="mdui-text-center subtitle mdui-text-color-theme-secondary">' + content.summary + '</p>\
      </div>');
  }
  //截图
  for (i = 0; i < screenshot.length; i++) {
    var content = screenshot[i]
    screenshotsObj.append('<div class="screenshot-item mdui-container mdui-col">\
        <h1 class="title mdui-text-color-theme-accent">' + content.title + '</h1>\
        <p class="subtitle mdui-text-color-theme-secondary">' + content.summary + '</p>\
        <img class="screenshot jesse205-card-outlined" src="' + content.src + '" alt />\
      </div>');
  }
  //联系我们
  for (i = 0; i < contact.length; i++) {
    var content = contact[i]
    contactObj.append('<div class="mdui-col">\
        <a class="jesse205-btn-outlined jesse205-btn-withicon jesse205-hoverable mdui-btn mdui-ripple" href="' + content.href + '" target="_blank" mdui-tooltip=\'' + JSON.stringify(content.tooltip) + '\'>\
            <i class="mdui-icon material-icons" src="' + content.iconsrc + '" alt>' + content.icon + '</i>' + content.title + '</a>\
      </div>');
  }
  //友情链接
  for (i = 0; i < links.length; i++) {
    var content = links[i]
    linksObj.append('<div class="mdui-col">\
    <a href="' + content.href + '" target="_blank">\
      <div class="mdui-btn mdui-ripple mdui-text-color-theme-400 ">' + content.name + '</div>\
    </a>\
  </div>');
  }
  contactObj.mutation();
  linksObj.mutation();

}
/* $(document).ready(function () {
  $.getJSON("/api/aidelua/index.json", function (data) {
    addConfig(data);
  });
  $.getJSON("https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest", function (data) {
    $("#download").text("下载 (" + data.tag_name + ")");
    new mdui.Tooltip('#download', {
      content: ("更新日志：\r\n" + data.body).replace(/\r\n/g, "<br>")
    });
  });
}); */