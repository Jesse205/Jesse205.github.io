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
          name: '磷光商店',
          href: 'https://linguang.top/'
        },
        {
          name: '云储',
          href: 'https://yunchu.cxoip.com/'
        },
        {
          name: 'MDUI',
          href: 'https://www.mdui.org/'
        },
        {
          name: 'Vue',
          href: 'https://cn.vuejs.org/'
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
          name: 'GitHub',
          href: 'https://www.github.com/'
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
      this.isTop = document.documentElement.scrollTop <= 0
      window.addEventListener('scroll', () => this.isTop = document.documentElement.scrollTop <= 0)

      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    },
    updated() {
      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    }
  })
})
