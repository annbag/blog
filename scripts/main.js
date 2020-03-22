document.addEventListener('DOMContentLoaded', main)

async function main() {
    const posts = await fetchPosts();
    posts.forEach((post) => {
        const $post = renderPost(post);
        renderAddCommentForm(post, $post);
        renderComments(post, $post);
    });
    renderAddPostForm((post) => {
        savePost(post);
    });
}
