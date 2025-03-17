const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const userPassword = event.target.elements.password.value.trim();
    const userEmail = event.target.elements.email.value.trim();
    const userData = {};

    if(userPassword === '' || userEmail === '') {
        alert (`All form fields must be filled in`);
    } else {
        userData.email = userEmail;
        userData.password = userPassword;
        console.log(userData);
    }
    event.target.reset();  
}
