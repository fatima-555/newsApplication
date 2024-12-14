//=====================  NEWS APP  =======================

const input = document.getElementById("inputField");
const cardDiv = document.getElementById("cardSection");

let searchBtn = () => {
    // const api_keys = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=a7a07aa790ef43a8bd4bc1a5fdedee23`
    //const api_keys = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-09&sortBy=publishedAt&apiKey=a7a07aa790ef43a8bd4bc1a5fdedee23`
     const api_keys = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-11&sortBy=publishedAt&apiKey=a7a07aa790ef43a8bd4bc1a5fdedee23`

    fetch(api_keys)
    .then((res) => res.json())
    .then((data) => {
        data.articles.map((e, i) => {
        console.log(e);
        cardDiv.innerHTML += `<div class=" border border-4 border-secondary-subtle rounded-3 m-3 card" style="width: 18rem;">
  <img src=${e.urlToImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.description} </p>
  </div>
</div>`;    
        });
    })
    .catch((err) => {
        console.log(err);
    });
};
