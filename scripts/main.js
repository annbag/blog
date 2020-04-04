document.addEventListener('DOMContentLoaded', main)

const routes = [
    { path: '/', handler: renderHomePage },
    { path: '/posts/:postId', handler: renderPostPage },
];

/**
 * @example
 * getUrlParams('/posts/234876', '/posts/:postId') => { postId: 234876 }
 * getUrlParams('/posts/234876/hello-world', '/posts/:postId/:name') => { postId: 234876, name: 'hello-world' }
 */
function getUrlParams(path, route) {
    // ...
}

/**
 * @example
 * isMatch('/', '/') => true
 * isMatch('/', '/q') => false
 * isMatch('/posts/234876', '/posts/:postId') => true
 * isMatch('/posts/khjb234', '/posts/:postId') => true
 * isMatch('/not-found', '/:any') => true
 * isMatch('/', '/:q') => true
 * isMatch('/posts/', '/posts/:postId') => true
 * isMatch('/', '/posts/:postId') => false
 * isMatch('/bleble', '/posts/:postId') => false
 */
function isMatch(path, route) {
    // ...
}

/**
 * @typedef Route
 * @property path {string}
 * @property handler {Function}
 */

/**
 * @param routes {Array<Route>} — Tablica routingu
 *
 * [
 *   { path: '/posts/:id', handler: Function1 },
 *   { path: '/', handler: Function2 },
 * ]
 */
function routing(routes) {
    // 1. Pobieramy aktualną ścieżkę z adresu URL
    const pathname = location.pathname;
    routes.forEach(route => {
        if(isMatch(route.path, pathname)) {
            console.log('taki sam', route)
            const params = getUrlParams(
                pathname,
                route.path
            );
            // 3. Jeśli obsługujemy to uruchamiamy handler()
            route.handler(params);
        }
    })
    // 2. W pętli spr. czy obsługujemy daną ścieżkę
}

async function main() {
    routing(routes);
}

async function renderHomePage() {
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
    const posts = await fetchPost(postId);
    // TODO
}

