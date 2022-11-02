

const quotes = [
    "All I know is fine dinning and breathing!", 
    "Ravioli, ravioli. Give me the formuoli.",
    "Is mayonnaise an instrument?",
    "Is this the Krusty Krab?...NO, THIS IS PATRICK!",
    "I WUMBO, you WUMBO, he she we WUMBO.",
    "Shiver Mi Timbers Boi O"
]

function randomQuote() {
    const rand = Math.floor(Math.random() * quotes.length)
    const quote = quotes[rand];
    return quote;
}

//BUTTON CLICK
function randomizedMyQuotes() {
    const quote = randomQuote();
    quoteDiv = document.getElementById("quote");

    quoteDiv.innerHTML = quote;
}

//BODY LOAD
function didBodyLoad() {
    randomizedMyQuotes();
}

const quoteButton = document.getElementById("quoteGenerator");
quoteButton.addEventListener("click", function(){
    randomizedMyQuotes();
}) 

// function didBodyLoad() {
//     console.log("Body did load")

// const quote = randomQuote();
// console.log(quote)

// const quoteDiv = document.getElementById("quote");
// quoteDiv.innerHTML = quote;