function renderPost(post) {
    const a = document.createElement('div');
    const template = `
        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text">${post.body}</p>
            </div>
        </div>`;
    a.innerHTML = template;
    const b = document.querySelector('.posts');
    b.appendChild(a);
}