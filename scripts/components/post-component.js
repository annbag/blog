function renderPost(post) {
    const $post = document.createElement('div');
    const template = `
        <div class="card mb-3">
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
        renderConfirmDeletionPopup(() => {
            $post.remove();
            removePost(id);
        })
    })
    const $posts = document.querySelector('.posts');
    $posts.insertBefore($post, $posts.firstElementChild);
    displayNumberComments(post.comments, $post)
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

function displayNumberComments(comments, $post) {
    const $div = document.createElement('div');
    const template = `
        <div class="d-flex justify-content-end comments-number">
            <p class="mt-3 mb-0">${comments.length} ${setCorrectFormComment(comments)}</p>
        </div>`;
    $div.innerHTML = template;
    const $postContent = $post.querySelector('.post-content');
    $postContent.appendChild($div);
}

function setCorrectFormComment(comments) {
    if (comments.length === 1) {
        return 'komentarz';
    } else if (comments.length >= 5 || comments.length === 0) {
        return 'komentarzy';
    } else {
        return 'komentarze';
    }
}
