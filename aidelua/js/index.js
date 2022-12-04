const { createApp, ref, watchEffect } = Vue

const CONFIG_URL = "/api/aidelua/index.json"
const APPCONFIG_URL = "https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest"
const config = ref(null)
const appConfig = ref(null)
const isTop = ref(true)

var app = createApp({
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
})
$$(function () {
  app.mount('#app')
})