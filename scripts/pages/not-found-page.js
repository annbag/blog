function renderNotFoundPage() {
    const template = `
        <p>Strona nie odnaleziona</p>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
}