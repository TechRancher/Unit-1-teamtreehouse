// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

/* 
This is a random quote generator that will display quotes to the index.html file. The program also will display the source, Character, Citation, Year and Tag if the quote provided this info. The program will also change the backgound color and will refresh after 30 seconds. 
*/

// The object array which holds the quotes to be randomly used in this program.
const quotes = [
  {
    quote: "Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored.",
    source: '"Earl Nightingale"',
    tag: "Family, Life"
  },
  {
    quote: "Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become reality.",
    source: "Earl Nightingale",
    tag: "Perception"
  },
  {
    quote: "People who have goals succeed because they know where they're going. It's that simple.",
    source: "Earl Nightingale",
    citation: "How to Completely Change Your Life in 30 Seconds",
    year: 2012,
    tag: "Success, Goals"
  },
  {
    quote: "I've failed over and over and over again in my life and that is why I succeed.",
    source: "Michael Jordan",
    citation: "'Failure', a Nike TV Commercial",
    year: 1997,
    tag: "Success"
  },
  {
    quote: "I have seen the science I worshiped, and the aircraft I loved, destroying the civilization I expected them to serve.",
    source: "Charles Lindbergh",
    citation: "Of Flight and Life",
    year: 1948,
    tag: "Aviation, War"
  },
  {
    quote: "What we've got here is failure to communicate.",
    source: "Spoken in the movie first by Strother Martin and, later, paraphrased by Paul Newman.",
    character: "The Captain, Luke",
    citation: "Cool Hand Luke",
    year: 1967,
    tag: "Moive Quote"
  },
  {
    quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    source: "Groucho Marx",
    character: "Captain Jeffrey T. Spaulding",
    citation: "Animal Crackers",
    year: 1930,
    tag: "Moive Quote, Funny"
  },
  {
    quote: "They may take our lives, but they'll never take our freedom!",
    source: "Mel Gibson",
    character: "William Wallace",
    citation: "Braveheart",
    year: 1995,
    tag: "Moive Quote, War"
  },
  {
    quote: "Mama says, 'Stupid is as stupid does.'",
    source: "Tom Hanks",
    character: "Forrest Gump",
    citation: "Forrest Gump",
    year: 1994,
    tag: "Moive Quote"
  },
  {
    quote: "If we cannot count on ourselves to do the right thing how can we count on anyone or anything else? Self-government won't work without self-discipline.",
    source: "Paul Harvey",
    citation: "Paul Harvey Show",
    tag: "Right Thing, Self Discipline, Self-government"
  }
]

// Setting varible to run timer
let timer = setInterval(runTimer, 15000);

// This function runs the setInterval and calls on printQuote to call on a random quote to be displayed to index.html
function runTimer() {
  printQuote();
}


// Create the getRandomQuote function and name it getRandomQuote
// This function returns a random quote to be used to be displayed
function getRandomQuote(array) {
  return array[Math.floor(Math.random() * quotes.length)];
}

// This function is used to make a random background color including the button background color.
function getRandomBackgroundColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 190);
  let bgColor = `rgb(${x}, ${y}, ${z})`;
  document.getElementById("loadQuote").style.backgroundColor = bgColor;
  document.body.style.backgroundColor = bgColor;
}


// Create the printQuote funtion and name it printQuote
/* 
This function is used to take the random quote from getRandomQuote function and through the use of conditional statments, display the appropriate information to the index.html file.
*/
function printQuote() {
  getRandomBackgroundColor();
  let displayQuote = getRandomQuote(quotes);
  let arrayDisplay = "";
  arrayDisplay += `<p class='quote'>${displayQuote.quote}</p><p class='source'>Source: ${displayQuote.source}`;
  if ("character" in displayQuote) {
    arrayDisplay += `<span class='character'>Character: ${displayQuote.character}</span>`;
  }
  if ("citation" in displayQuote) {
    arrayDisplay += `<span class='citation'>Citation: ${displayQuote.citation}</span>`;
  }
  if ("year" in displayQuote) {
    arrayDisplay += `<span class='year'>Year: ${displayQuote.year}</span>`;
  }
  if ("tag" in displayQuote) {
    arrayDisplay += `<span class='tag'>Tag: ${displayQuote.tag}</span></p>`;
  }
  document.getElementById("quote-box").innerHTML = arrayDisplay;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);