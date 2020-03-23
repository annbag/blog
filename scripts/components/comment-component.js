function renderComments(post, $post) {
    if (post.comments.length === 0) { return }
    const $ul = document.createElement('ul');
    $ul.classList.add('list-group');
    $ul.classList.add('mt-3');
    post.comments.forEach(comment => {
        const $li = document.createElement('li');
        $li.classList.add('media');
        $li.classList.add('list-group-item');
        $li.classList.add('d-flex');
        const template = `
            <p class="media-body comment-body mb-0">${comment.value}</p>
            <div class="comment-btns row justify-content-end">
                <button class="edit-comment-btn"><i class="fas fa-pen"></i></button>
                <div class="w-100"></div>
                <button class="del-comment-btn"><i class="fas fa-trash-alt"></i></button>
            </div>`;
        $li.innerHTML = template;
        const $editBtn = $li.querySelector('.edit-comment-btn');
        let isEditEnabled = false;
        $editBtn.addEventListener('click', (e) => {
            if (isEditEnabled) {
                isEditEnabled = false;
                saveEditComment(post, comment, $li);
            } else {
                isEditEnabled = true;
                renderEditComment(comment, $li);
            }
        });
        const $delBtn = $li.querySelector('.del-comment-btn');
        $delBtn.addEventListener('click', () => {
            const filteredComments = post.comments.filter(x => x.id !== comment.id);
            post.comments = filteredComments;
            editPost(post);
        });
        $ul.appendChild($li);
    });
    const $comments = $post.querySelector('.comments');
    $comments.appendChild($ul);
}

function saveEditComment(post, comment, $li) {
    const $input = $li.querySelector('.comment-body-edit');
    comment.value = $input.value;
    $input.remove();
    const $commentBody = $li.querySelector('.comment-body');
    $commentBody.textContent = comment.value;
    $commentBody.classList.remove('hidden');
    editPost(post);
}

function renderEditComment(comment, $li) {
    const $commentBody = $li.querySelector('.comment-body');
    $commentBody.classList.add('hidden');
    const $input = document.createElement('input');
    $input.classList.add('comment-body-edit');
    $input.value = comment.value;
    $li.insertBefore($input, $commentBody);
}
