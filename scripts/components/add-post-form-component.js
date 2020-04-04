function renderAddPostForm(cb) {
    const $div = document.createElement('div');
    const template = `
        <form class="add-post-form">
            <div class="form-group">
                <textarea class="form-control" cols="30" rows="3" required></textarea>
                <button type="submit" class="btn btn-primary mt-3">dodaj wpis</button>
            </div>
        </form>`;

    $div.innerHTML = template;
    const $addPost = document.querySelector('.add-post');
    $addPost.appendChild($div);

    const $form = document.querySelector('.add-post-form')
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const $textarea = document.querySelector('textarea');
        const post = { id: Date.now(), date: Date.now(), body: $textarea.value, comments: [] };
        cb(post);
        $textarea.value = '';
    })
}
