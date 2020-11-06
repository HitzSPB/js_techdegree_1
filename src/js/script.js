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
const quotes = [
  {
    quote: "1I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    citation: "test",
    year: Date.now()
  },
  {
    quote: "2I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
  },
  {
    quote: "3I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
  },
  {
    quote: "4I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
  },
  {
    quote: "5I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    year: Date.now()
  },
  {
    quote: "6I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    year: Date.now()
  }
]


/***
 * `getRandomQuote` function
***/
// We accept that the random number can be 0, as it will be used to get a random quote from an array. 
const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

function getRandomQuote() {
  let quoteInformation = quotes[getRandomNumber(quotes.length)];
  let html = `<p class="quote">${quoteInformation.quote}</p>`;
  html += `<p class="source">${quoteInformation.source}`;
  if (quoteInformation.citation !== undefined)
    html += `<span class=\"citation\">${quoteInformation.citation}</span>`;
  if (quoteInformation.year !== undefined)
    html += `<span class="year">${quoteInformation.year}</span>`
  html += "</p>"
  return html;
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
  divContent.insertAdjacentHTML("beforeend", getRandomQuote());
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);