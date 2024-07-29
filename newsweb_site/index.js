const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// APIs
const API_KEY = "57310ef8b6624a36ad4a484e40f8a021";
const HEADLINES_NEWS = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
const GENERAL_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${API_KEY}`;
const BUSINESS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`;
const SPORTS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`;
const ENTERTAINMENT_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`;
const TECHNOLOGY_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=${API_KEY}`;
const SEARCH_NEWS = `https://newsapi.org/v2/everything?q=`;

window.onload = function() {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};

generalBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click", function() {
    newsType.innerHTML = `<h4>Search : ${newsQuery.value}</h4>`;
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    try {
        const response = await fetch(HEADLINES_NEWS);
        newsDataArr = [];
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else if (response.status === 426) {
            console.error("Error fetching headlines: 426 Upgrade Required. Check your API subscription plan.");
            newsdetails.innerHTML = "<h5>Upgrade Required. Please check your API subscription plan.</h5>";
        } else {
            console.error("Error fetching headlines:", response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error("Error:", error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchGeneralNews = async () => {
    try {
        const response = await fetch(GENERAL_NEWS);
        newsDataArr = [];
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else if (response.status === 426) {
            console.error("Error fetching general news: 426 Upgrade Required. Check your API subscription plan.");
            newsdetails.innerHTML = "<h5>Upgrade Required. Please check your API subscription plan.</h5>";
        } else {
            console.error("Error fetching general news:", response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error("Error:", error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchBusinessNews = async () => {
    try {
        const response = await fetch(BUSINESS_NEWS);
        newsDataArr = [];
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else if (response.status === 426) {
            console.error("Error fetching business news: 426 Upgrade Required. Check your API subscription plan.");
            newsdetails.innerHTML = "<h5>Upgrade Required. Please check your API subscription plan.</h5>";
        } else {
            console.error("Error fetching business news:", response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error("Error:", error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchEntertainmentNews = async () => {
    try {
        const response = await fetch(ENTERTAINMENT_NEWS);
        newsDataArr = [];
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else if (response.status === 426) {
            console.error("Error fetching entertainment news: 426 Upgrade Required. Check your API subscription plan.");
            newsdetails.innerHTML = "<h5>Upgrade Required. Please check your API subscription plan.</h5>";
        } else {
            console.error("Error fetching entertainment news:", response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error("Error:", error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchSportsNews = async () => {
    try {
        const response = await fetch(SPORTS_NEWS);
        newsDataArr = [];
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else if (response.status === 426) {
            console.error("Error fetching sports news: 426 Upgrade Required. Check your API subscription plan.");
            newsdetails.innerHTML = "<h5>Upgrade Required. Please check your API subscription plan.</h5>";
        } else {
            console.error("Error fetching sports news:", response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error("Error:", error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchTechnologyNews = async () => {
    try {
        const response = await fetch(TECHNOLOGY_NEWS);
        newsDataArr = [];
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else if (response.status === 426) {
            console.error("Error fetching technology news: 426 Upgrade Required. Check your API subscription plan.");
            newsdetails.innerHTML = "<h5>Upgrade Required. Please check your API subscription plan.</h5>";
        } else {
            console.error("Error fetching technology news:", response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error("Error:", error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchQueryNews = async () => {
    if (newsQuery.value == null) return;
    try {
        const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
        newsDataArr = [];
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else if (response.status === 426) {
            console.error("Error fetching query news: 426 Upgrade Required. Check your API subscription plan.");
            newsdetails.innerHTML = "<h5>Upgrade Required. Please check your API subscription plan.</h5>";
        } else {
            console.error("Error fetching query news:", response.status, response.statusText);
            newsdetails.innerHTML = "<h5>No data found.</h5>";
        }
    } catch (error) {
        console.error("Error:", error);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

function displayNews() {
    newsdetails.innerHTML = "";
    newsDataArr.forEach(news => {
        const date = news.publishedAt.split("T");
        const col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";
        const card = document.createElement('div');
        card.className = "p-2";
        const image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src = news.urlToImage;
        const cardBody = document.createElement('div');
        const newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;
        const dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];
        const description = document.createElement('p');
        description.className = "text-muted";
        description.innerHTML = news.description;
        const link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);
        newsdetails.appendChild(col);
    });
}
