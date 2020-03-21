document.addEventListener('DOMContentLoaded', main)

async function main() {
    const posts = await fetchPosts();
    posts.forEach((post) => {
        const $post = renderPost(post);
        renderComments(post.comments, $post);
    });
    renderAddPostForm((post) => {
        savePost(post);
    });
}
