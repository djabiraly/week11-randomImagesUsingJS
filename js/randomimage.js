const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['imgg1.jpg','imgg2.jpg','imgg3.jpg','imgg4.jpg'];

myButton.addEventListener('click', changeImage);

function changeImage(){
    let randomIndex = math.floor(math.random() * images.length);
    console.log(randomIndex);
    image.style.backgroundImage = images[randomIndex];

    image.src = 'images/'+ images[randomIndex] ;

}