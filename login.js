document.querySelectorAll(`input[type="text"]`).forEach(input => {
    input.addEventListener('focusout', validateName);
    input.addEventListener('keyup', eagerValidate);
});

function validateName(e) {
    const regex = /([a-zA-Z])/g;
    if (regex.test(this.value)) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    }
    else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
}

function eagerValidate(e) {
    const regex = /([a-zA-Z])/g;
    if (this.classList.contains("invalid")) {
        if (regex.test(this.value)) {
            this.classList.remove("invalid");
            this.classList.add("valid");
        }
    }
    else if (this.value === '') {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
}
