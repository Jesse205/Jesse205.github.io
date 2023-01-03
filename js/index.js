const { createApp, ref, watchEffect } = Vue

const APPS_URL = "/api/applications.json"
const CONFIG_URL = "/api/index.json"
const apps = ref(null)
const config = ref(null)
const isTop = ref(true)
let app = createApp({
  data() {

    fetch(APPS_URL)
      .then((res) => res.json())
      .then((json) => (apps.value = json))
      .catch(function (error) {
        console.error(error)
      })

    fetch(CONFIG_URL)
      .then((res) => res.json())
      .then((json) => (config.value = json))
      .catch(function (error) {
        console.error(error)
      })

    return {
      apps,
      config,
      isTop
    }
  },
  mounted() {
    window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset
      isTop.value = Boolean(scrollTop <= 0)
    })
    $$("#mainlist").mutation()
    $$("#linkslist").mutation()
  },
  updated() {
    $$("#mainlist").mutation()
    $$("#linkslist").mutation()
  }
})
$$(function () {
  app.mount('#app')
})
