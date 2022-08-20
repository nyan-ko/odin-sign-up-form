document.querySelectorAll(`input[type="text"]`).forEach(input => {
    input.addEventListener('focusout', validateName);
    input.addEventListener('input', eagerValidate);
});

function validateName(e) {
    const regex = /([^a-z A-Z])/g;
    if (this.value === '') {
        return;
    }
    else if (!regex.test(this.value)) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    }
    else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
}

function eagerValidate(e) {
    const regex = /([^a-z A-Z])/g;
    if (this.value === '') {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
    else if (!regex.test(this.value)) {
        if (this.classList.contains("invalid")) {
            this.classList.remove("invalid");
            this.classList.add("valid");
        }
    }
    else {
        if (this.classList.contains("invalid") || this.classList.contains("valid")) {
            this.classList.add("invalid");
            this.classList.remove("valid");
        }
    }
}
