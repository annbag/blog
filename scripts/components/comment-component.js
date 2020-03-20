function renderComments(comments, id) {
    const $ul = document.createElement('ul');
    $ul.classList.add('list-group');
    $ul.classList.add('mb-4')
    comments.forEach(comment => {
        const $li = document.createElement('li');
        $li.classList.add('list-group-item')
        $li.textContent = comment;
        $ul.appendChild($li);
        const $div = document.querySelector(`.card-${id}`).parentElement;
        $div.appendChild($ul);
    });
}