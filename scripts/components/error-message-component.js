const generalMessage = 'Upss.. coś poszło nie tak ☹';
function displayError(message = generalMessage) {
    const template = `
        <p>${message}</p>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
    console.error(message);
}
