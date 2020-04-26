async function fetchPosts() {
    const url = CONFIG.postsUrl;
    const response = await fetch(url);
    const posts = await response.json();
    return posts;

}

async function fetchPost(id) {
    const url = `${CONFIG.postsUrl}/${id}`;
    const response = await fetch(url);
    const post = await response.json();
    return post;

}

function savePost(post) {
    const url = CONFIG.postsUrl;
    const body = JSON.stringify(post);
    fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body
    });
}

function removePost(id) {
    const url = `${CONFIG.postsUrl}/${id}`
    fetch(url, {
        method: "delete"
    });
}

function editPost(post) {
    const url = `${CONFIG.postsUrl}/${post.id}`;
    const body = JSON.stringify(post)
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "PATCH",
        body
    });
}
