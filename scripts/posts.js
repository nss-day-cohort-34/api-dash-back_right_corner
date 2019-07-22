// Get blogpost data using the provided API, convert to an HTML representation and display in the browser

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(posts => {
        posts.forEach(post => {
            console.log(post);
        })
    })

const postContainer = document.querySelector('.posts');

const newPostHTML = (post) => {
    return `<section class="post">
                <h1 class="post__title">${post.title}</h1>
                <p class="post__content">${post.body}</p>
            </section>`
}