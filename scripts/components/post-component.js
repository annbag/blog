function renderPost(post) {
    const $div = document.createElement('div');
    const template = `
        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text text-${post.id}">${post.body}</p>
                <button class="btn btn-warning edit" data-id="${post.id}" data-action="edit">edytuj wpis</button>
                <button class="btn btn-danger del" data-id="${post.id}" data-action="delete">usuń wpis</button>
            </div>
        </div>`;
    $div.innerHTML = template;
    const $posts = document.querySelector('.posts');
    $posts.appendChild($div);
}