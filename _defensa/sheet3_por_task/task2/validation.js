// Task 1: mira si el texto tiene alguna letra mayuscula
// Task 1: checks if the text has at least one capital letter
function hasUpperCase(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            return true;
        }
    }
    return false;
}

// Task 1: mira si el texto tiene alguna letra minuscula
// Task 1: checks if the text has at least one lower case letter
function hasLowerCase(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'a' && text[i] <= 'z') {
            return true;
        }
    }
    return false;
}

// Task 1: pone el campo en rojo (error) o en verde (valid) y escribe el aviso
// Task 1: sets the field to red (error) or green (valid) and writes the message
function setFieldState(fieldId, isOk, message) {
    let field = document.getElementById(fieldId);
    let text = document.getElementById(fieldId + 'Message');
    field.classList.remove('error');
    field.classList.remove('valid');
    if (isOk) {
        field.classList.add('valid');
        text.textContent = '';
    } else {
        field.classList.add('error');
        text.textContent = message;
    }
}

// Task 1: usuario con 5 caracteres, una mayuscula y una minuscula
// Task 1: username with 5 characters, one capital and one lower case letter
function checkUsername() {
    let username = document.getElementById('username').value;
    if (username.length < 5) {
        setFieldState('username', false, 'The username needs at least 5 characters.');
        return false;
    }
    if (hasUpperCase(username) === false || hasLowerCase(username) === false) {
        setFieldState('username', false, 'The username needs a capital letter and a lower case letter.');
        return false;
    }
    setFieldState('username', true, '');
    return true;
}

// Task 1: contrasena con al menos 10 caracteres
// Task 1: password with at least 10 characters
function checkPassword() {
    let password = document.getElementById('password').value;
    if (password.length < 10) {
        setFieldState('password', false, 'The password needs at least 10 characters.');
        return false;
    }
    setFieldState('password', true, '');
    return true;
}

// Task 1: la repeticion tiene que ser igual a la contrasena
// Task 1: the repetition must be the same as the password
function checkRepeat() {
    let password = document.getElementById('password').value;
    let repeat = document.getElementById('confirmPassword').value;
    if (repeat === '' || repeat !== password) {
        setFieldState('confirmPassword', false, 'The passwords are not the same.');
        return false;
    }
    setFieldState('confirmPassword', true, '');
    return true;
}

// Task 1: formulario de login, solo va a customer.html si todo es correcto
// Task 1: login form, it only goes to customer.html if everything is correct
function checkLogin() {
    let usernameOk = checkUsername();
    let passwordOk = checkPassword();
    if (usernameOk && passwordOk) {
        location.href = 'customer.html';
    }
}

// Task 1: formulario de registro, solo va a login.html si todo es correcto
// Task 1: registration form, it only goes to login.html if everything is correct
function checkRegistration() {
    let usernameOk = checkUsername();
    let passwordOk = checkPassword();
    let repeatOk = checkRepeat();
    if (usernameOk && passwordOk && repeatOk) {
        location.href = 'login.html';
    }
}

// Task 1: formulario del perfil, mismas reglas que el registro
// Task 1: profile form, same rules as the registration
function checkProfile() {
    let usernameOk = checkUsername();
    let passwordOk = checkPassword();
    let repeatOk = checkRepeat();
    if (usernameOk && passwordOk && repeatOk) {
        alert('Your profile was updated.');
        location.href = 'customer.html';
    }
}
