document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.blog-form');

    const storage = new AppStorage();
    const posts = new AppPosts();

    function render(posts) {
        console.log('render')
        const aa = document.querySelector(posts);
        const cc = document.createElement('li')
        const blog = document.querySelector('.blog-text');
        const value = blog.value;

        const id = Date.now()
        storage.set(id, { id: id, description: value });
        cc.textContent = storage.get(id).description;
        aa.appendChild(cc);
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        console.log('submit');

        render('.posts');

        form.reset();
    })
})