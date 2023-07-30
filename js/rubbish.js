const CONTENT_URL = "./rubbish.md"

let vm = new Vue({
    data: {
        isTop: true,
        content: null,
        isLoaded: false,
        title: '杰西垃圾',
        menus: [
            {
                title: 'Edde 互联',
                href: '/',
                target: '_blank',
                type: 'menu'
            },
        ],
        zoom: null,
        h3List: null,
        hash: null,
        overview: []
    },
    created() {
        if (content != null) {
            let converter = new showdown.Converter()
            converter.setOption('customizedHeaderId', true)
            converter.setOption('ghCompatibleHeaderId', true)
            converter.setOption('simplifiedAutoLink', true)
            converter.setOption('parseImgDimensions', true)
            converter.setOption('strikethrough', true)
            converter.setOption('tables', true)
            converter.setOption('ghCodeBlocks', true)
            converter.setOption('tasklists', true)
            converter.setOption('smoothLivePreview', true)
            converter.setOption('disableForced4SpacesIndentedSublists', true)
            converter.setOption('requireSpaceBeforeHeadingText', true)
            converter.setOption('openLinksInNewWindow', true)
            converter.setOption('backslashEscapesHTMLTags', true)
            converter.setOption('emoji', true)
            converter.setOption('moreStyling', true)
            converter.setFlavor('github');
            /**
             * @type String
             */
            let contentHTML = converter.makeHtml(content)
            this.content = contentHTML
            this.overview = []

            for (const iterator of contentHTML.matchAll(/\<(h2|h3).*id="(.+?)"\>(.*)\<\/(h2|h3)(?:\b.*)?\>/g)) {
                // console.log(iterator);
                this.overview.push({
                    tag: iterator[1],
                    id: iterator[2],
                    name: iterator[3],
                })
            }
        }
        this.isLoaded = true
    },
    methods: {
        /**
         * 滚动
         *
         * @param {string} hash 
         */
        goto(hash) {
            // location.hash = hash
            location.replace('#' + hash)
        },
        /**
         * 
         * @param {MouseEvent} event 
         */
        handelContentClick(event) {
            switch (event.target.tagName) {
                case 'H1':
                case 'H2':
                case 'H3':
                case 'H4':
                case 'H5':
                case 'H6': {
                    this.goto(event.target.id)
                    break
                }
            }
        },
        onDocumwntScroll() {
            this.isTop = document.documentElement.scrollTop <= 0
            if (this.h3List) {
                for (let index = this.h3List.length - 1; index >= 0; index--) {
                    const element = this.h3List[index];
                    if (this.h3List[index].offsetTop <= document.documentElement.scrollTop + 1) {
                        if (this.hash !== '#' + element.id) {
                            history.replaceState({}, document.title, '#' + encodeURI(element.id))
                            this.hash = '#' + element.id
                        }
                        break
                    }
                }
            }
        },
        onHashChange() {
            this.hash = decodeURI(location.hash)
        }
    },
    mounted() {
        this.isTop = document.documentElement.scrollTop <= 0
        window.addEventListener('scroll', this.onDocumwntScroll)
        window.addEventListener('hashchange', this.onHashChange, false)
        this.onHashChange()
        // mediumZoom('.markdown img')
        this.h3List = document.querySelectorAll('.markdown h3')
        $$("#mainlist").mutation()
        $$("#linkslist").mutation()
    },
    updated() {
        this.zoom = mediumZoom('.markdown img', {
            background: 'rgba(0,0,0,.3)'
        })

        $$("#mainlist").mutation()
        $$("#linkslist").mutation()
    },
    beforeUpdate() {
        if (this.zoom)
            this.zoom.detach()
    },
    watch: {
        hash() {
            this.$nextTick(() => {
                const activeElement = document.querySelector(".mdui-drawer .mdui-list-item-active")
                console.log(activeElement)
                if (activeElement)
                    activeElement.scrollIntoView({ block: "nearest", inline: "nearest" })
            })

        }
    }
})
