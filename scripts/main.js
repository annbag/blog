document.addEventListener('DOMContentLoaded', main)
window.addEventListener('hashchange', onHashChange)

const routes = [
    { path: '/', handler: renderHomePage },
    { path: '/posts/:postId', handler: renderPostPage },
    { path: '/not-found', handler: renderNotFoundPage }
];

function redirectToHomePage() {
    if (location.hash === '') {
        location.hash = '/'
        return true
    }
    return false
}

function redirectNotFoundPage() {
    location.hash = '/not-found'
}

/**
 * @example
 * getUrlParams('/posts/234876', '/posts/:postId') => { postId: 234876 }
 * getUrlParams('/posts/234876/hello-world', '/posts/:postId/:name') => { postId: 234876, name: 'hello-world' }
 */
function getUrlParams(path, route) {
    const pathParts = path.split('/');
    const routeParts = route.split('/');
    const result = {};

    for (let i = 0; i < routeParts.length; i++) {
        const paramName = routeParts[i];
        const paramValue = pathParts[i];
        if (routeParts[i].startsWith(':')) {
            result[paramName.slice(1)] = paramValue;
        }
    }
    return result
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
    const pathParts = path.split('/')
    const routeParts = route.split('/')
    for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(':')) {
            continue
        }
        if (routeParts[i] === pathParts[i]) {
            continue
        }
        return false;
    }
    return true
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
    const pathname = location.hash.slice(1);

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const status = isMatch(pathname, route.path);
        // 2. W pętli spr. czy obsługujemy daną ścieżkę
        if (status) {
            const params = getUrlParams(pathname, route.path);
            // 3. Jeśli obsługujemy to uruchamiamy handler()
            route.handler(params);
            return
        }
    }
    redirectNotFoundPage()
}

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

