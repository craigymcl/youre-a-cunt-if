// quotes are stored in an array of objects
var quotes = [{
  "attrib": "Steve Jobs",
  "quote": "You were born after 1990."
}, {
  "attrib": "Steve Jobs",
  "quote": "You like any emo produced after 2005."
}, {
  "attrib": "Albert Einstein",
  "quote": "You liked the band Jet, off of 2004."
}, {
  "attrib": "Albert Einstein",
  "quote": "You use a burr coffee bean grinder for a better 'flavour profile'."
}, {
  "attrib": "Albert Einstein",
  "quote": "You've never sent a 'you still up' text after 2:00am."
}, {
  "attrib": "Steve Jobs",
  "quote": "You've never met a UK Gladiator."
}, {
  "attrib": "Bill Gates",
  "quote": "You've ever rattled out wonderwall on an acoustic guitar at a party."
}, {
  "attrib": "Albert Einstein",
  "quote": "You smoke roll ups."
}, {
  "attrib": "Albert Einstein",
  "quote": "You've dumped someone by text."
}, {
  "attrib": "Albert Einstein",
  "quote": "You own or have ever owned a flip phone."
}, {
  "attrib": "Henry Ford",
  "quote": "You prefer the Nine Inch Nails version of Hurt."
}];

// function to load and display a new quote
function newQuote() {
  var quoteID = Math.floor(Math.random() * (quotes.length));
  $("#quote").html(quotes[quoteID].quote);
  $("#attrib").html(quotes[quoteID].attrib);
  $("#twitterButton").attr("href", "http://twitter.com/intent/tweet?text=" + quotes[quoteID].quote + " via @youreacuntif #youreacuntif");
}

// wait for page load before displaying content
$(document).ready(function() {
  // load an initial quote
  newQuote();

  // retrieve a new quote when the button is clicked
  $("#generateButton").on("click", function() {
    newQuote();
  });
});
