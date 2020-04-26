async function renderHomePage() {
    const template = `
        <div class="add-post"></div>
        <div class="posts"></div>`
    renderPage(template);
    try {
        const posts = await fetchPosts();
        renderPosts(posts)
    } catch {
        displayError();
    }
}
