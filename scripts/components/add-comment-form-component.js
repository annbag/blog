function renderAddCommentForm(post, $post) {
    const $div = document.createElement('div');
    const template = `
        <form class="add-comment-form">
            <input type="text" class="form-control new-comment" placeholder="Napisz komentarz...">
        </form>`;
    $div.innerHTML = template;
    const $comments = $post.querySelector('.comments');
    $comments.appendChild($div);

    const $newComment = $comments.querySelector('.new-comment');
    $newComment.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const id = 'comment-' + Date.now();
            const value = $newComment.value;
            if (value) {
                post.comments.push({ id, value });
                editPost(post);
                $newComment.value = '';
            }
        }
    })
}
