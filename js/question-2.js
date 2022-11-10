const apiKey = "ea7bdeba51554587bb3647d87286531e"

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`

const heading = document.querySelector(".heading")
const games = document.querySelector(".game_container")
const loader = document.querySelector(".loader")

async function getData() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const allData = data.results;

        loader.classList.remove("loader");
        heading.innerHTML = `<p>Title</p>
                             <p>Rating</p>
                             <p>Game tags</p>`;

        for (let i = 0; i < allData.length; i++) {
            if (i === 8) {
                break
            }
            games.innerHTML += `<div class="games">
                            <div class="name">${allData[i].name}</div>
                            <div class="rating">${allData[i].rating}</div>
                            <div class="tags">${allData[i].tags.length}</div>
                            </div>`
        }
    } catch (error) {
        games.innerHTML = err("Could not retrive games")
    }
}

getData()