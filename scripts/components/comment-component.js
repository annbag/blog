function renderComments(comments, $post) {
    if (comments.length === 0) { return }
    const $ul = document.createElement('ul');
    $ul.classList.add('list-group');
    $ul.classList.add('mt-3')
    comments.forEach(comment => {
        const $li = document.createElement('li');
        $li.classList.add('list-group-item')
        $li.textContent = comment.value;
        $ul.appendChild($li);
    });
    const $comments = $post.querySelector('.comments');
    $comments.appendChild($ul);
}
