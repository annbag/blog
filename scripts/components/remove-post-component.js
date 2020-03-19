function checkClickDelBtn(posts) {
    const btns = document.querySelectorAll('.del');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            const id = posts[i].id;
            removePost(id)
        })
    }
}