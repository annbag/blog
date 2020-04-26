async function renderPostPage({ postId }) {
    const template = `
        <div class="posts"></div>`
    renderPage(template);
    try {
        const post = await fetchPost(postId);
        renderPostPanel(post);
    } catch {
        const message = 'Prezentacja posta się nie powiodła'
        displayError(message);
    }
}