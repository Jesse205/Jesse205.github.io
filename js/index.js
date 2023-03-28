const APPS_URL = "/api/applications.json"

$$(function () {
  var vm = new Vue({
    el: "#app",
    data: {
      isTop: true,
      config: null,
      apps: null,
      menus: [
        {
          title: 'Gitee 主页',
          href: 'https://gitee.com/Jesse205',
          target: '_blank',
          type: 'menu'
        },
        {
          title: 'GitLab 主页',
          href: 'https://gitlab.com/Jesse205',
          target: '_blank',
          type: 'menu'
        },
        {
          title: 'Github 主页',
          href: 'https://github.com/Jesse205',
          target: '_blank',
          type: 'menu'
        },
        {
          type: 'divider'
        },
        {
          title: '发送邮件',
          href: 'mailto:jesse205@qq.com',
          target: '_blank',
          type: 'menu'
        }
      ],
      links: [
        {
          name: "AIDE Pro",
          href: "https://www.aidepro.top/"
        },
        {
          name: "云极客工具",
          href: "https://www.ygktool.com/"
        },
        {
          name: 'MDUI',
          href: 'https://www.mdui.org/'
        },
        {
          name: 'Gitee',
          href: 'https://www.gitee.com/'
        },
        {
          name: 'GitLab',
          href: 'https://gitlab.com/'
        },
        {
          name: 'Github',
          href: 'https://www.github.com/'
        },

        {
          name: 'Vue',
          href: 'https://cn.vuejs.org/'
        }
      ]
    },
    created() {
      fetch(APPS_URL)
        .then(res => res.json())
        .then(json => this.apps = json)
        .catch(error => {
          console.error(error)
        })
    },
    mounted() {
      this.isTop=getTopState(window)
      window.addEventListener('scroll', () => this.isTop=getTopState(window))
      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    },
    updated() {
      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    }
  })
})
