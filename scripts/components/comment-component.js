let isEditEnabled = false;
const ENTER_KEY_CODE = 13;

function renderComments(post, $post) {
    // if (post.comments.length === 0) { return }
    const $ul = document.createElement('ul');
    $ul.classList.add('list-group');
    $ul.classList.add('mt-3');
    post.comments.forEach((comment) => {
        renderComment($ul, post, comment, ($comment) => {
            removeComment(post, comment, $comment);
        });
    })
    const $comments = $post.querySelector('.comments');
    $comments.appendChild($ul);
}

function renderComment($ul, post, comment, cb) {
    const $li = document.createElement('li');
    $li.classList.add('media');
    $li.classList.add('list-group-item');
    $li.classList.add('d-flex');
    const template = `
        <div class="avatar mr-3 d-flex align-item-start"><span class="fas fa-user-circle"></span></div>
        <p class="media-body comment-body mb-0">${comment.body}</p>
        <div class="comment-btns row justify-content-end">
            <button class="edit-comment-btn"><i class="fas fa-pen"></i></button>
            <div class="w-100"></div>
            <button class="del-comment-btn"><i class="fas fa-trash-alt"></i></button>
        </div>`;
    $li.innerHTML = template;
    const $editBtn = $li.querySelector('.edit-comment-btn');

    $editBtn.addEventListener('click', (e) => {
        if (isEditEnabled) {
            isEditEnabled = false;
            saveEditComment(post, comment, $li);
        } else {
            isEditEnabled = true;
            renderEditComment(post, comment, $li);
        }
    });
    const $delBtn = $li.querySelector('.del-comment-btn');
    $delBtn.addEventListener('click', () => {
        renderConfirmDeletionPopup(() => {
            cb($li);
        });
    });
    $ul.appendChild($li);
}

function removeComment(post, comment, $comment) {
    const filteredComments = post.comments.filter(x => x.id !== comment.id);
    post.comments = filteredComments;
    $comment.remove();
    editPost(post);
}

function saveEditComment(post, comment, $li) {
    const $input = $li.querySelector('.comment-body-edit');
    comment.body = $input.value;
    $input.remove();
    const $commentBody = $li.querySelector('.comment-body');
    $commentBody.textContent = comment.body;
    $commentBody.classList.remove('hidden');
    editPost(post);
}

function renderEditComment(post, comment, $li) {
    const $commentBody = $li.querySelector('.comment-body');
    $commentBody.classList.add('hidden');
    const $input = document.createElement('input');
    $input.addEventListener('keypress', (e) => {
        if (e.keyCode === ENTER_KEY_CODE) {
            isEditEnabled = false;
            saveEditComment(post, comment, $li);
        }
    })
    $input.classList.add('comment-body-edit');
    $input.value = comment.body;
    $li.insertBefore($input, $commentBody);
}
