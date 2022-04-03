const addMovieModalBtn = document.getElementById('addMovieModalBtn');
const addModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const myClose = Array.from(document.querySelectorAll('.myClose'));
const addMovie = document.getElementById('addMovie');
const title = document.getElementById('title');
const image = document.getElementById('image');
const rating = document.getElementById('rating');
const moviesInfo = document.getElementById('moviesInfo');

let movieArray = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}
const toggleMovieModal = () => {
    addModal.classList.toggle('visible')
    toggleBackdrop()
}
const onAddMovieHAndler = () => {
    let movieObj = {
        title : title.value ,
        url : image.value ,
        rating : rating.value
    }
    movieArray.push(movieObj)
    console.log("Movie Added !!!", movieObj);
    let template = '';
    movieArray.forEach((mov) => {
        template += `
        <div class="col-sm-4 mt-2">
        <div class="card">
            <div class="card-body">
                <figure>
                    <img class="img-fluid" 
                    src="${mov.url}" alt="">
                    <figcaption>
                        <p class="title">${mov.title}</p>
                        <p class="rating">${mov.rating}</p>
                    </figcaption>
                </figure>
            </div>
        </div>
        </div>
        `
    })
    moviesInfo.innerHTML = template;
    title.value = "";
    image.value = "";
    rating.value = "";
}
/* <div class="col-sm-4">
<div class="card">
    <div class="card-body">
        <figure>
            <img class="img-fluid" src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/05/739639-andhadhun.jpg" alt="">
            <figcaption>
                <p class="title">Andhadhund</p>
                <p class="rating">5</p>
            </figcaption>
        </figure>
    </div>
</div>
</div> */



addMovieModalBtn.addEventListener('click', toggleMovieModal);

backdrop.addEventListener('click', toggleMovieModal);

myClose.forEach((close) => {
    close.addEventListener('click', toggleMovieModal)
});

addMovie.addEventListener('click', onAddMovieHAndler)