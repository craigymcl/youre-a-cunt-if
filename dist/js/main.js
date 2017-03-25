// quotes are stored in an array of objects
var quotes = [{
  "attrib": "Steve Jobs",
  "quote": "You were born after 1990."
}, {
  "attrib": "Steve Jobs",
  "quote": "You like any emo producted after 2005."
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
  "quote": "You've ever rattled out wonderwall on a acoustic guitar at a party."
}, {
  "attrib": "Albert Einstein",
  "quote": "You smoke roll ups."
}, {
  "attrib": "Henry Ford",
  "quote": "Whether you think you can or you think you can’t, you’re right."
}];

// function to load and display a new quote
function newQuote() {
  var quoteID = Math.floor(Math.random() * (quotes.length));
  $("#quote").html(quotes[quoteID].quote);
  $("#attrib").html(quotes[quoteID].attrib);
  $("#twitterButton").attr("href", "http://twitter.com/intent/tweet?text=" + quotes[quoteID].quote + " -" + quotes[quoteID].attrib);
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
