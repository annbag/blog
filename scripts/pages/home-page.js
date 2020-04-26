async function renderHomePage() {
    const template = `
        <div class="add-post"></div>
        <div class="posts"></div>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
    const posts = await fetchPosts();
    if (posts) {
        posts.forEach(renderPostPanel);
        renderAddPostForm((post) => {
            renderPostPanel(post);
            savePost(post);
        });
    }
}