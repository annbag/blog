function renderAddCommentForm(post, $post, cb) {
    const $div = document.createElement('div');
    const template = `
        <form class="add-comment-form">
            <input type="text" class="form-control new-comment" placeholder="Napisz komentarz..." required>
            <input type="submit" class="hidden"/>
        </form>`;
    $div.innerHTML = template;
    const $comments = $post.querySelector('.comments');
    $comments.appendChild($div);

    const $form = $comments.querySelector('.add-comment-form');
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const $newComment = $comments.querySelector('.new-comment');
        const id = 'comment-' + Date.now();
        const body = $newComment.value;
        const comment = {id, body}
        cb(comment);
        $newComment.value = '';
    })
}
