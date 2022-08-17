function inlineToggle(obj) {
    if ($(obj).css('display') == 'none') {
        $(obj).slideToggle();
        $(obj).css({
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center'
        })
    } else if (obj.style.display == 'inline-flex') {
        $(obj).slideToggle();
    }
}

export { inlineToggle };