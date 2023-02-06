const { createApp, ref, watchEffect } = Vue

const CONFIG_URL = "/api/aidelua/index.json"
const APPCONFIG_URL = "https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest"


let app = createApp({
  setup() {
    const config = ref(null)
    const appConfig = ref(null)
    const isTop = ref(true)
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
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset
      this.isTop = Boolean(scrollTop <= 0)
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
  console.log('Registration succeeded. Scope is ' + reg.scope);
}).catch(function (error) {
  console.log('Registration failed with ' + error);
});