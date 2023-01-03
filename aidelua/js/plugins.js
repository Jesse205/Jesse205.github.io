const { createApp, ref, watchEffect } = Vue

const PLUGINS_URL = "/api/aidelua/plugins.json"
const plugins = ref(null)
const isTop = ref(true)
const menus = [
  {
    "title": "插件文档",
    "href": "https://jesse205.github.io/AideLua/plugin/",
    "target": "_blank",
    "type": "menu"
  },
  {
    "title": "更多插件",
    "href": "https://www.123pan.com/s/G7a9-cdek",
    "target": "_blank",
    "type": "menu"
  }
]

let app = createApp({
  data() {
    fetch(PLUGINS_URL)
      .then((res) => res.json())
      .then((json) => (plugins.value = json))
      .catch(function (error) {
        console.error(error)
      })

    return {
      plugins,
      menus,
      isTop
    }
  },
  mounted() {
    window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset
      isTop.value = Boolean(scrollTop <= 0)
    })
    mdui.mutation()
  },
  updated() {
    mdui.mutation()
  }
})
$$(function () {
  app.mount('#app')
})

navigator.serviceWorker.register('/aidelua/serviceWorker.js', { scope: '/aidelua/' }).then(function (reg) {
  // registration worked
  console.log('Registration succeeded. Scope is ' + reg.scope);
}).catch(function (error) {
  // registration failed
  console.log('Registration failed with ' + error);
});