$$ = mdui.$;
function getTopState(element) {
    return Boolean((element === window ? window.scrollY : element.scrollTop) <= 0)
}
