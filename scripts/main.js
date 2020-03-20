document.addEventListener('DOMContentLoaded', main)

async function main() {
    const posts = await fetchPosts();
    posts.forEach((post) => {
        renderPost(post);
        renderComments(post.comments, post.id);
    });
    renderAddPostForm((post) => {
        savePost(post);
    });
    checkClickDelBtn(posts);
    renderEditPostForm(posts);
}