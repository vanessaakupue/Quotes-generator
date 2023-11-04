const quoteText = document.querySelector('.quotes');
const authorName = document.querySelector('.author-name');
// const btn = document.querySelector('.btn');

// const quotes = [
//     "The best revenge is creating a better life for yourself!",
//     "You only live once, but if you do it right, once is enough.",
//     "She remembered who she was and the game changed.",
//     "I'm not lazy, I'm just conserving energy. Energy to be productive... or deadly.",
//     "Do it for yourself, Or... for the plot.",
//     "Don't take criticisms from a person you wont take advices from.",
//     "If you stumble, make it part of the dance.",
//     "Roses are red, I'm going to bed.",
//     "I identify as a threat, my pronounces are Try/Me!",
//     "Life is what happens when you’re busy making other plans."
// ];

const quotesUrl = "https://api.quotable.io/random";

async function randomQuotes(url) {
    const response = await fetch(url);
    const newQuote = await response.json();
    // console.log(newQuote);
    quoteText.textContent = newQuote.content;
    authorName.textContent = newQuote.author;
}

randomQuotes(quotesUrl);
























// async function getQuote(url) {
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
// }

// getQuote(quotesUrl);

// btn.addEventListener("click", () => {
//     let randomNumber = quotes[Math.floor(Math.random() * quotes.length)];

//     // console.log(randomNumber);

//     quoteText.textContent = randomNumber;
// })

// fetch('https://fakestoreapi.com/products/')
// .then((Response) => console.log(Response));

