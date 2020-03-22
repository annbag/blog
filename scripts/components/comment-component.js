function renderComments(post, $post) {
    if (post.comments.length === 0) { return }
    const $ul = document.createElement('ul');
    $ul.classList.add('list-group');
    $ul.classList.add('mt-3')
    post.comments.forEach(comment => {
        const $li = document.createElement('li');
        $li.classList.add('list-group-item');
        $li.classList.add('comment-content');
        const $p = document.createElement('p');
        $p.classList.add('comment-body');
        $p.textContent = comment.value;
        const $div = document.createElement('div');
        $div.classList.add('comment-btns');
        const templateEditIcon = `<i class="fas fa-pen"></i>`;
        const $editBtn = document.createElement('button');
        $editBtn.classList.add('edit-comment-btn');
        $editBtn.innerHTML = templateEditIcon;
        const templateDelIcon = `<i class="fas fa-trash-alt"></i>`;
        const $delBtn = document.createElement('button');
        $delBtn.classList.add('del-comment-btn');
        $delBtn.innerHTML = templateDelIcon;
        $div.appendChild($editBtn);
        $div.appendChild($delBtn)
        $li.appendChild($p);
        $li.appendChild($div);
        $ul.appendChild($li);
        let isEditEnabled = false;
        $editBtn.addEventListener('click', (e) => {
            if(isEditEnabled) {
                isEditEnabled = false;
                saveEditComment(post, comment, $post);
            } else {
                isEditEnabled = true;
                renderEditComment(comment, $post);
            }
        });
        $delBtn.addEventListener('click', () => {
            const filteredComments = post.comments.filter(x => x.id !== comment.id);
            post.comments = filteredComments;
            editPost(post);
        });
    });
    const $comments = $post.querySelector('.comments');
    $comments.appendChild($ul);
}

function saveEditComment(post, comment, $post) {
    const $input = $post.querySelector('.comment-body-edit');
    comment.value = $input.value;
    $input.remove();
    const $commentBody = $post.querySelector('.comment-body');
    $commentBody.textContent = comment.value;
    $commentBody.classList.remove('hidden');
    editPost(post);
}

function renderEditComment(comment, $post) {
    const $commentContent = $post.querySelector('.comment-content');
    const $commentBody = $post.querySelector('.comment-body');
    $commentBody.classList.add('hidden');
    const $input = document.createElement('input');
    $input.classList.add('comment-body-edit');
    $input.value = comment.value;
    $commentContent.insertBefore($input, $commentBody);
}
