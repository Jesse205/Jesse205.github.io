$$(function () {
    var vm = new Vue({
        el: "#app",
        data: {
            isTop: true,
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
                    message: `取色神器，更简单更高效
                    图片拼接，拼截图一键搞定
                    短链生成，多种链接任你选
                    电量伪装，想咋改就咋改
                     ……`,
                    icon: 'heart-circle-outline',
                    iconColor: 'indigo'
                },
                {
                    title: '随时随地想用就用',
                    message: `大部分工具支持离线使用
                    网络不通? 不是问题!`,
                    icon: 'wifi-strength-alert-outline',
                    iconColor: 'green'
                },
                {
                    title: '丰富的个性化设置',
                    message: `多种皮肤任你选择
                    支持多种功能拓展
                    自定义首页工具`,
                    icon: 'cog-outline',
                    iconColor: 'pink'
                },
                {
                    title: '精心优化每个小工具',
                    message: `受够了讨厌的流氓广告？
                    氪金软件不给钱不让用？
                    担心工具软件会损害设备？
                    为何不试试 Hello Tool，
                    让您忘掉这些烦恼！`,
                    icon: 'shield-check-outline',
                    iconColor: 'teal'
                }
            ],
            groups: [
                {
                    name: '综合服务',
                    href: 'https://jq.qq.com/?_wv=1027&k=bBMp43GE'
                },
                {
                    name: '软件内测',
                    href: 'https://jq.qq.com/?_wv=1027&k=B9ozUt4U'
                },
                {
                    name: '技术交流',
                    href: 'https://jq.qq.com/?_wv=1027&k=QJH2H9Ox'
                }
            ],
            comments: [
                {
                    name: 'The Gluten Eater',
                    description: 'Web Designer',
                    avatarUrl: './img/avatars/TheGlutenEater.jpg',
                    content: `<mark>软件做得很用心。</mark><br>
                    这个MD简约风格的界面我很喜欢，不像隔壁某木头盒子那样虽然功能多一点但是排版混乱看起来头大。<br>
                    除了有点小bug之外一切都好。<br>
                    开发者人也挺Nice的，还提供了些源码。`
                },
                {
                    name: '像雾像雨又像风',
                    description: 'Geek',
                    avatarUrl: './img/avatars/wlxfxy.png',
                    content: `<mark>真是一个不错的软件,</mark><br>
                     开发者辛苦了,<br>
                     希望能继续坚持下去。`
                },
                {
                    name: 'RiverTwilight',
                    description: 'Web Developer',
                    avatarUrl: './img/avatars/RiverTwilight.jpg',
                    content: `<mark>完美的MaterialDesign风格</mark>`
                },
                {
                    name: '183600',
                    description: 'Geek',
                    avatarUrl: './img/avatars/183600.jpg',
                    content: `希望以后功能再多一些,<br>
                    <mark>目前挺好看的</mark>`
                },
                {
                    name: '柒白『滑稽』',
                    description: 'Duck~',
                    avatarUrl: './img/avatars/qibai.jpg',
                    content: `<mark>一个＊函</span>不好用</mark>？<br>
                    <small>注：这是同类产品，实际用户体验比本产品优秀得多</small>`
                },
                {
                    name: 'OutlinedArc217',
                    description: 'RuntimeError Developer',
                    avatarUrl: './img/avatars/OutlinedArc217.png',
                    content: `<small>3020年，我独自打扫着祠堂。<br>
                    老家的祠堂依旧是老样子，尽管翻新了无数遍。<br>
                    那一千年前的样式依旧透出一丝古朴，典雅。<br>
                    爷爷说，老家的祠堂叫“宅”，是1000年前的那位祖宗居住一生的地方，那里的每一块瓷砖，每一本漫画，每一个手办，都是有千年历史的古董。<br>
                    在祠堂的最中间，存放着一个最古老的东西——一部智能手机。<br>村里面的最老的老人也不知道该如何使用它。<br>
                    那天，我照常独自打扫着祠堂。<br>
                    突然听到身后似乎有什么异样，虽然已经预料到今天会发生一些特别的事情，但我还是吓了一跳。<br>
                    我猛地转过身，</small><br>
                    <mark>只见手机黯淡的屏幕上出现了一行字——<br>
                      [有新文件]HelloTool最新版</mark>`
                }
            ],
            prefersDarkMode: false
        },
        methods: {
            prefersColorSchemeMediaCallback: function (e) {
                this.prefersDarkMode = e.matches
            }
        },
        mounted() {
            this.isTop = document.documentElement.scrollTop <= 0
            window.addEventListener('scroll', () => this.isTop = document.documentElement.scrollTop <= 0)
            let prefersColorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)')
            this.prefersDarkMode = prefersColorSchemeMedia.matches
            if (typeof prefersColorSchemeMedia.addEventListener === 'function') {
                prefersColorSchemeMedia.addEventListener('change', this.prefersColorSchemeMediaCallback);
            } else if (typeof prefersColorSchemeMedia.addListener === 'function') {
                prefersColorSchemeMedia.addListener(this.prefersColorSchemeMediaCallback)
            }
        },
        updated() {
        }
    })
})