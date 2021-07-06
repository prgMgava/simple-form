const inputs = document.querySelectorAll('.input');

function isFocus () {
    const parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function dosntIsFocus () {
    const parent = this.parentNode.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus');
    }
}

inputs.forEach( input => {
    input.addEventListener('focus', isFocus);
    input.addEventListener('blur', dosntIsFocus);
})