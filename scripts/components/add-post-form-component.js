function renderAddPostForm(cb) {
    const addPostForm = document.createElement('div');
    const template = `
        <form class="add-post-form">
            <div class="form-group">
                <textarea class="form-control" cols="30" rows="3"></textarea>
                <button type="submit" class="btn btn-primary mt-3">dodaj wpis</button>
            </div>
        </form>`;

    addPostForm.innerHTML = template;
    const addPost = document.querySelector('.add-post');
    addPost.appendChild(addPostForm);

    const $form = document.querySelector('.add-post-form')
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const a = document.querySelector('textarea')
        const post = { body: a.value };
        cb(post);
    })
}