const CONTENT_URL = "./rubbish.md"

let vm = new Vue({
    data: {
        isTop: true,
        content: null,
        isLoaded: false,
        title: '杰西垃圾',
    },
    created() {
        /*const xhr = new XMLHttpRequest()
        xhr.open('GET', CONTENT_URL, false)
        xhr.send();*/

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
            let contentHTML = converter.makeHtml(content)
            this.content = contentHTML
        }
        this.isLoaded = true

        /*fetch(CONTENT_URL)
            .then(res => res.text())
            .then(text => {
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
                let contentHTML = converter.makeHtml(text)
                this.content = contentHTML
                // document.querySelector('.markdown').innerHTML = contentHTML
                // let h1Element = document.querySelector('.markdown h1')
                // document.querySelector('.markdown').removeChild(h1Element)
                // this.title = h1Element.innerHTML

            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                this.isLoaded = true
            })*/
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
            console.log(event.target.tagName);
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
        }
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
