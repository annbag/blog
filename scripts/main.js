document.addEventListener('DOMContentLoaded', main)

async function main() {
    const posts = await fetchPosts();
    posts.forEach((post) => {
        renderPost(post)
    })
}

// const storage = new AppStorage();
// const posts = new AppPosts(storage);

// function main() {
//     const form = document.querySelector('.blog-form');

//     form.addEventListener('submit', event => {
//         event.preventDefault();

//         console.log('submit');

//         render('.posts');
//         form.reset();
//     })
// }

// function render(elem) {
//     console.log('render')
//     const aa = document.querySelector(elem);
//     const cc = document.createElement('li')
//     const blog = document.querySelector('.blog-text');
//     const value = blog.value;

//     // posts.addPost(value)
//     const id = Date.now()
//     storage.set(id, { id: id, description: value });
//     cc.textContent = storage.get(id).description;
//     aa.appendChild(cc);
// }