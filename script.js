const btnEl = document.getElementById("btn");
const AnimecontainerEl = document.querySelector(".Anime-container");
const animeImgEl = document.querySelector(".anime-image");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading.....";
        animeNameEl.innerText = "Updating.....";
        animeImgEl.src = "loading.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        AnimecontainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error happened, please try again later!";
    }
});