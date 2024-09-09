document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');

    buttonText.addEventListener('click', () => {
        const value = inputText.value;
        localStorage.setItem('storedData', value);
        window.location.href = 'data.html';
    });
});