const quote = document.getElementById("quote");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
    });
};

quote.addEventListener("click", () => getQuote());

getQuote();

const quote1 = document.getElementById("quote1");

const getQuote1 = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote1.innerHTML = data.content;
    });
};

quote1.addEventListener("click", () => getQuote1());

getQuote1();

const quote2 = document.getElementById("quote2");

const getQuote2 = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote2.innerHTML = data.content;
    });
};

quote2.addEventListener("click", () => getQuote2());

getQuote2();