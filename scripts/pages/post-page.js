async function renderPostPage({ postId }) {
    const template = `
        <div class="posts"></div>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
    const post = await fetchPost(postId);
    renderPostPanel(post)
}