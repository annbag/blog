document.addEventListener('DOMContentLoaded', main)
window.addEventListener('hashchange', onHashChange)


function main() {
    const status = redirectToHomePage();
    if (status === false) {
        routing(routes);
    }
}

function onHashChange() {
    routing(routes);
}

async function renderHomePage() {
    const template = `
        <div class="add-post"></div>
        <div class="posts"></div>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
    const posts = await fetchPosts();

    posts.forEach(renderPostPanel);
    renderAddPostForm((post) => {
        renderPostPanel(post);
        savePost(post);
    });
}

function renderPostPanel(post) {
    const $post = renderPost(post);
    renderAddCommentForm(post, $post, (comment) => {
        post.comments.push(comment);
        const $ul = $post.querySelector('.comments ul');
        renderComment($ul, post, comment, ($comment) => {
            removeComment(post, comment, $comment);
        });
        editPost(post);
    });
    renderComments(post, $post);
}

async function renderPostPage({ postId }) {
    const template = `
        <div class="posts"></div>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
    const post = await fetchPost(postId);
    renderPostPanel(post)
}

function renderNotFoundPage() {
    const template = `
        <div>Strona nie odnaleziona</div>`
    const outlet = document.querySelector('.outlet')
    outlet.innerHTML = template;
}
