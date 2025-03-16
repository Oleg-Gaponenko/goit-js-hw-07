const userName = document.querySelector('#name-input');

const message = document.querySelector('#name-output');

userName.addEventListener('input', (event) => {
    const trimmedUserName = event.target.value.trim();
    if (trimmedUserName === '') {
        message.textContent = 'Anonymous';
    } else {
        message.textContent = trimmedUserName;
    }
});