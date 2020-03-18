async function fetchPosts() {
    const url = CONFIG.postsUrl;
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
}

async function savePost(post) {
    const url = CONFIG.postsUrl;
    const body = JSON.stringify(post);
    await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body
    });
}

async function removePost(id) {
    const url = CONFIG.postsUrl + `/${id}`
    await fetch(url, {
        method: "delete"
    });
}