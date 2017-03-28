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
  "quote": "You use a burr coffee bean grinder for a ‘better flavour profile’."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve never sent a ‘you still up’ text after 2:00am."
}, {
  "attrib": "Steve Jobs",
  "quote": "You’ve never met a UK Gladiator."
}, {
  "attrib": "Bill Gates",
  "quote": "You’ve ever rattled out wonderwall on an acoustic guitar at a house party."
}, {
  "attrib": "Albert Einstein",
  "quote": "You smoke roll ups."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve dumped someone by text."
}, {
  "attrib": "Albert Einstein",
  "quote": "You own or have ever owned a flip phone."
}, {
  "attrib": "Albert Einstein",
  "quote": "You think that Justin Beiber's new stuff is “actually pretty good”."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve ever described yourself as feeling ‘stoked’."
}, {
  "attrib": "Albert Einstein",
  "quote": "You think that techno music is ‘just noise’."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’re offended by the word ‘cunt’."
}, {
  "attrib": "Albert Einstein",
  "quote": "You think The Thick Of It is funny but the “swearing is unneccessary”."
}, {
  "attrib": "Albert Einstein",
  "quote": "You write down in a little book the things you've loaned to people."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’re from the UK and you've ever posted #datenight."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve ever done one of those “I'm just going to leave this here” posts."
}, {
  "attrib": "Albert Einstein",
  "quote": "You end sentences with “right?” or “yeah?”."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve never thumbed in a softy."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve never drunk-pissed the bed."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve sat with your friends and talked about which Friends character each of you is most like."
}, {
  "attrib": "Albert Einstein",
  "quote": "You’ve sat with your friends and talked about which Sex and the City character each of you is most like."
}, {
  "attrib": "Henry Ford",
  "quote": "You prefer the Nine Inch Nails version of Hurt."
}];

// ‘  ’  “  ”

var colours = [{
  "classname": "colours1"
}, {
  "classname": "colours2"
}, {
  "classname": "colours3"
}, {
  "classname": "colours4"
}, {
  "classname": "colours5"
}, {
  "classname": "colours6"
}, {
  "classname": "colours7"
}, {
  "classname": "colours8"
}];

// function to load and display a new quote
function newQuote() {
  var quoteID = Math.floor(Math.random() * (quotes.length));
  var coloursID = Math.floor(Math.random() * (colours.length));
  $('body').addClass(colours[coloursID].classname);
  $("#quote").html(quotes[quoteID].quote);
  $("#attrib").html(quotes[quoteID].attrib);
  $("#twitterButton").attr("href", "http://twitter.com/intent/tweet?text=" + "You're a cunt if…" + quotes[quoteID].quote + " via @youreacunt_if %23youreacuntif");
  $(".cuntribute").attr("href", "http://twitter.com/intent/tweet?text=" + "@youreacunt_if Hey cunto, how about this...");
}


// wait for page load before displaying content
$(document).ready(function() {
  // load an initial quote
  newQuote();

  // retrieve a new quote when the button is clicked
  $("#generateButton").on("click", function() {
    $('body').removeClass();
    newQuote();

  });
});
