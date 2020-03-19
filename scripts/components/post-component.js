function renderPost(post) {
    const $div = document.createElement('div');
    const template = `
        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text">${post.body}</p>
                <button class="btn btn-danger del">usuń wpis</button>
            </div>
        </div>`;
    $div.innerHTML = template;
    const $posts = document.querySelector('.posts');
    $posts.appendChild($div);
}