document.addEventListener('DOMContentLoaded', main)
window.addEventListener('hashchange', onHashChange)


function main() {
    const status = isHomePage();

    if (status) {
        redirectToHomePage();
    } else {
        routing(routes);
    }
}

function onHashChange() {
    routing(routes);
}

function displayError() {
    const template = `
        <p>Upss.. coś poszło nie tak ☹</p>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
}
