
const imageFetcher = () => {
fetch('https://jsonplaceholder.typicode.com/photos')
.then(data => data.json())
.then(arrayOfImages => {
    arrayOfImages.forEach(image => {
        if (arrayOfImages.indexOf(image) < 50) {
            imageConverter.innerHTML += newImageHtml(image)
          console.log(image)
        }
    });
    
    
  });
}

imageFetcher()
     
const imageConverter = document.querySelector('#images--list')

const newImageHtml = (arrayOfImages) => {
    return `<section class="images">
            <h1 class="images__title">${arrayOfImages.title}</h1>
            <a href="${arrayOfImages.url}"><img class="images__size" src="${arrayOfImages.thumbnailUrl}" alt=""></img></a>
            </section>`

}
