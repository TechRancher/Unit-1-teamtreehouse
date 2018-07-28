// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
let quotes = [
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  },
]


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
  for (let i=0; i<quotes.length; i+=1){
    let randomNum = Math.floor(Math.random() * quotes.length)+1;
    let index = quotes.indexOf(i);
    if (index === randomNum) {
    printQuote(i);
    }
  }
}


// Create the printQuote funtion and name it printQuote
function printQuote(quote) {
  let quoteP = document.getElementsByClassName("quote");
  quoteP.innerHTML = quote
}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);