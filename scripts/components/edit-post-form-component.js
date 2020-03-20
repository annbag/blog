function renderEditPostForm(posts) {
    const $posts = document.querySelector('.posts');

    $posts.addEventListener('click', (e) => {
        const postId = e.target.dataset.id;
        if (e.target.dataset.action === 'edit') {
            const $editBtn = e.target;
            $editBtn.disabled = true;
            const postData = posts.find((post) => {
                return post.id == e.target.dataset.id;
            })

            const $div = document.createElement('div');
            const template = `
                <form class="edit-post-form">
                    <div class="form-group">
                        <textarea class="form-control edit-textarea" cols="30" rows="3">${postData.body}</textarea>
                        <button type="submit" class="btn btn-primary mt-3">edytuj wpis</button>
                    </div>
                </form>`;
            $div.innerHTML = template;
            e.target.parentElement.parentElement.parentElement.appendChild($div);

            const $form = document.querySelector('.edit-post-form');
            if ($form) {
                $form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const $textarea = document.querySelector('.edit-textarea');
                    const post = { body: $textarea.value };
                    console.log('post:', post);
                    console.log('postId:', postId);
                    editPost(postId, post);
                    const $cardText = document.querySelector(`.text-${postId}`);
                    $cardText.textContent = $textarea.value;
                    const template = "";
                    $div.innerHTML = template;
                    $editBtn.disabled = false;
                })
            }
        }
    })
}