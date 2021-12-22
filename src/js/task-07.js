const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}
refs.input.addEventListener('input', onFontSizeChange);
function onFontSizeChange() {
    refs.span.style.fontSize = `${refs.input.value}px`;
}