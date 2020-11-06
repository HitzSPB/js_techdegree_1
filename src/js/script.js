/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Alternatively move this to a json file or similar
const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Mae West",
    language: "English"
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    source: "Marilyn Monroe",
    language: "English"
  },
  {
    quote: "We have also come to this hallowed spot to remind America of the fierce urgency of Now. This is no time to engage in the luxury of cooling off or to take the tranquilizing drug of gradualism. Now is the time to make real the promises of democracy.",
    citation: "\"I Have A Dream\" speech in Washington",
    source: "Martin Luther King Jr",
    year: "1963",
    language: "English"
  },
  {
    quote: "Most people are slowed down by the perception of themselves. If you’re taught you can’t do anything, you won’t do anything. I was taught I can do everything.",
    source: "Kanye West",
  },
  {
    quote: "If you don't want a man unhappy politically, don't give him two sides to a question to worry him; give him one. Better yet, give him none. Let him forget there is such a thing as war. If the government is inefficient, top-heavy, and tax-mad, better it be all those than that people worry over it. Peace, Montag. Give the people contests they win by remembering the words to more popular songs or the names of state capitals or how much corn Iowa grew last year. Cram them full of noncombustible data, chock them so damned full of 'facts' they feel stuffed, but absolutely 'brilliant' with information. Then they'll feel they're thinking, they'll get a sense of motion without moving. And they'll be happy, because facts of that sort don't change.",
    source: "Ray Bradbury",
    citation: "Fahrenheit 451",
    year: "1953"
  },
  {
    quote: "Insert own quote",
    source: "Your name",
    citation: "Your citation",
    language: "A language you wish to pick"
    year: new Date().getFullYear()
  }
]


/***
 * `getRandomQuote` function
***/
// We accept that the random number can be 0, as it will be used to get a random quote from an array. 
const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

function getRandomQuote() {
  // Calls the get a random number function to get a number and uses it to decide what object from the array is picked
  let quoteInformation = quotes[getRandomNumber(quotes.length)];
  console.log(quoteInformation);
  return quoteInformation;
}


/***
 * `printQuote` function
***/
const printQuote = () => {
  // points a "variable" at the div box to avoid repeating the same code
  let divContent = document.querySelector("#quote-box");

  // We need to use the following code to remove the content of the div. Removing without it will also remove the div box we select on.
  // Alternatively we could select the specific elements and remove them.
  while (divContent.firstChild)
    divContent.removeChild(divContent.firstChild);

  // Calls getRandomQuote(); to fetch a quote from the array
  let quoteInformation = getRandomQuote();

  // Inserts the html we need into the html variable so we can fill our #quote-box
  let html = `<p class="quote">${quoteInformation.quote}</p>`;
  html += `<p class="source">${quoteInformation.source}`;
  if (quoteInformation.citation !== undefined)
    html += `<span class=\"citation\">${quoteInformation.citation}</span>`;
  if (quoteInformation.year !== undefined)
    html += `<span class="year">${quoteInformation.year}</span>`
  if (quoteInformation.language !== undefined)
    html += `<span class="language">${quoteInformation.language}</span>`
  html += "</p>"

  // Sets a random color by setting random values on red green and blue value on the background color.
  let backgroundColor = `rgb(${getRandomNumber(256)},${getRandomNumber(256)},${getRandomNumber(256)})`;
  document.body.style.backgroundColor = backgroundColor;

  // Inserts our html code for the quote into the index.html file
  divContent.insertAdjacentHTML("beforeend", html);
}

// Calling printQuote(); to avoid having empty quote on page visit
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// Adds a listener on the button load-quote. Each time the button is pressed the eventlistener triggers the printQuote function
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Calls the printQuote function with a random interval we set it to 3000 miliseconds = 3 seconds
setInterval(printQuote, 3000);