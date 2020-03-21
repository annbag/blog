function renderPost(post) {
    const $post = document.createElement('div');
    const template = `
        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body post-content">
                <p class="card-text post-body">${post.body}</p>
                <button class="btn btn-warning edit">edytuj wpis</button>
                <button class="btn btn-danger del">usuń wpis</button>
            </div>
            <div class="card-footer comments"></div>
        </div>`;
    $post.innerHTML = template;
    const $editBtn = $post.querySelector('.edit');
    let isEditEnabled = false;
    $editBtn.addEventListener('click', () => {
        if (isEditEnabled) {
            isEditEnabled = false;
            saveEditPostForm(post, $post);
        } else {
            isEditEnabled = true;
            renderEditPostForm(post, $post);
        }
    });
    const $btnDel = $post.querySelector('.del');
    $btnDel.addEventListener('click', () => {
        const id = post.id;
        removePost(id)
    })
    const $posts = document.querySelector('.posts');
    $posts.appendChild($post);
    return $post;
}

function saveEditPostForm(post, $post) {
    const $textarea = $post.querySelector('.post-body-edit');
    post.body = $textarea.value;
    $textarea.remove();
    const $postBody = $post.querySelector('.post-body');
    $postBody.textContent = post.body;
    $postBody.classList.remove('hidden');
    editPost(post);
}

function renderEditPostForm(post, $post) {
    const $postContent = $post.querySelector('.post-content');
    const $postBody = $post.querySelector('.post-body');
    $postBody.classList.add('hidden');
    const $textarea = document.createElement('textarea');
    $textarea.classList.add('post-body-edit');
    $textarea.value = post.body;
    $postContent.insertBefore($textarea, $postBody);
}
