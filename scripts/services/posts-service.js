async function fetchPosts() {
    const url = 'data/posts.json';

    const response = await fetch(url);
    const posts = await response.json();
    return posts;
}