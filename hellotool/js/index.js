$$(function () {
    var vm = new Vue({
        el: "#app",
        data: {
            isTop: true,
            config: null,
            apps: null,
            menus: [
                {
                    title: '主页',
                    href: '#hero',
                    target: '_self',
                    type: 'menu'
                },
                {
                    title: '特性',
                    href: '#introduce',
                    target: '_self',
                    type: 'menu'
                },
                {
                    title: '支持',
                    href: '#services',
                    target: '_self',
                    type: 'menu'
                },
                {
                    title: '评价',
                    href: '#testimonials',
                    target: '_self',
                    type: 'menu'
                },
                {
                    title: '关于',
                    href: '#about',
                    target: '_self',
                    type: 'menu'
                },
            ],
            introduce: [
                {
                    title: '精心优化每个小工具',
                    message: '取色神器，更简单更高效\n图片拼接，拼截图一键搞定\n短链生成，多种链接任你选\n电量伪装，想怎么改就怎么改\n ……',
                    icon: 'heart-circle-outline',
                    iconColor: 'indigo'
                },
                {
                    title: '随时随地想用就用',
                    message: '大部分工具支持离线使用\n网络不通? 不是问题!',
                    icon: 'wifi-strength-alert-outline',
                    iconColor: 'green'
                },
                {
                    title: '丰富的个性化设置',
                    message: '多种皮肤任你选择\n支持多种功能拓展\n自定义首页工具',
                    icon: 'cog-outline',
                    iconColor: 'pink'
                },
                {
                    title: '精心优化每个小工具',
                    message: '受够了讨厌的流氓广告？\n氪金软件不给钱不让用？\n担心工具软件会损害设备？\n为何不试试 Hello Tool，\n让您忘掉这些烦恼！',
                    icon: 'shield-check-outline',
                    iconColor: 'teal'
                }
            ]
        },
        created() {

        },
        mounted() {
            this.isTop = getTopState(window)
            window.addEventListener('scroll', () => this.isTop = getTopState(window))
        },
        updated() {
        }
    })
})