document.addEventListener('DOMContentLoaded', main)

async function main() {
    const posts = await fetchPosts();
    posts.forEach((post) => {
        renderPost(post)
    });
    renderAddPostForm((post) => {
        savePost(post)
    });
}