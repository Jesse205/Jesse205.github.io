
const APPS_URL = "/api/applications.json"
const CONFIG_URL = "/api/index.json"

$$(function () {
  var vm = new Vue({
    el: "#app",
    data: {
      isTop: true,
      config: null,
      apps: null,
    },
    created() {
      fetch(APPS_URL)
        .then(res => res.json())
        .then(json => this.apps = json)
        .catch(error => {
          console.error(error)
        })

      fetch(CONFIG_URL)
        .then(res => res.json())
        .then(json => this.config = json)
        .catch(error => {
          console.error(error)
        })
    },
    mounted() {
      window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset
        this.isTop = Boolean(scrollTop <= 0)
      })
      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    },
    updated() {
      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    }
  })
})
