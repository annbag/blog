class AppPosts {

    constructor(storage) {
        this.posts = [];
        this.storage = storage;
    }

    addPost(post) {
        this.posts.push(post);
        this.onChange();
    }

    removePost(postId) {
        this.posts = this.posts.filter(b => b.id !== postId);
        this.onChange();
    }

    onChange() {
        const id = Date.now()
        this.storage.set(id, { id: id, description: this.posts })
    }
}