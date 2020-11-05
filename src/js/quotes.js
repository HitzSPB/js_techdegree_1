// We accept that the random number can be 0, as it will be used to get a random quote from an array. 
const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);
const setHtmlMainObject = (html) => document.querySelector("main").insertAdjacentHTML("beforeend", html);

function getRandomQuote() {
    let quoteInformation = quotes[getRandomNumber(quotes.length)];
    let html = `<p>${quoteInformation["quote"]} test</p>`
    setHtmlMainObject(html);
}


// Consider moving this to a json file or similar storage.
const quotes = [
    {
        quote: "1I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        creator: "Marilyn Monroe",
        date: Date.now()
    },
    {
        quote: "2I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        creator: "Marilyn Monroe",
        date: Date.now()
    },
    {
        quote: "3I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        creator: "Marilyn Monroe",
        date: Date.now()
    },
    {
        quote: "4I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        creator: "Marilyn Monroe",
        date: Date.now()
    },
    {
        quote: "5I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        creator: "Marilyn Monroe",
        date: Date.now()
    },
    {
        quote: "6I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        creator: "Marilyn Monroe",
        date: Date.now()
    }
]

getRandomQuote();