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

