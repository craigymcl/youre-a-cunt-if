// quotes are stored in an array of objects
var quotes = [{
  "attrib": "",
  "quote": "You pass off ThemeForest themes as your own."
},{
  "attrib": "",
  "quote": "You eat or chew loudly."
},{
  "attrib": "",
  "quote": "You like mumble rap."
},{
  "attrib": "",
  "quote": "You wear your polo shirt collar up."
},{
  "attrib": "",
  "quote": "You were born after 1990."
}, {
  "attrib": "",
  "quote": "You like any emo produced after 2005."
}, {
  "attrib": "",
  "quote": "You liked the band Jet, off of 2004."
}, {
  "attrib": "",
  "quote": "You use a burr coffee bean grinder for a ‘better flavour profile’."
}, {
  "attrib": "",
  "quote": "You’ve never sent a ‘you still up’ text after 2:00am."
}, {
  "attrib": "",
  "quote": "You’ve never met a UK Gladiator."
}, {
  "attrib": "",
  "quote": "You don't think scotland should be an independent country."
}, {
  "attrib": "Bill Gates",
  "quote": "You’ve ever rattled out wonderwall on an acoustic guitar at a house party."
}, {
  "attrib": "",
  "quote": "You smoke roll ups."
}, {
  "attrib": "",
  "quote": "You’ve dumped someone by text."
}, {
  "attrib": "",
  "quote": "You own or have ever owned a flip phone."
}, {
  "attrib": "",
  "quote": "You think that Justin Beiber's new stuff is “actually pretty good”."
}, {
  "attrib": "",
  "quote": "You’ve ever described yourself as feeling ‘stoked’."
}, {
  "attrib": "",
  "quote": "You think that techno music is ‘just noise’."
}, {
  "attrib": "",
  "quote": "You’re offended by the word ‘cunt’."
}, {
  "attrib": "",
  "quote": "You think The Thick Of It is funny but the “swearing is unneccessary”."
}, {
  "attrib": "",
  "quote": "You write down in a little book the things you've loaned to people."
}, {
  "attrib": "",
  "quote": "You’re from the UK and you've ever posted #datenight."
}, {
  "attrib": "",
  "quote": "You’ve ever done one of those “I'm just going to leave this here” posts."
}, {
  "attrib": "",
  "quote": "You end sentences with “right?” or “yeah?”."
}, {
  "attrib": "",
  "quote": "You’ve never thumbed in a softy."
}, {
  "attrib": "",
  "quote": "You’ve never drunk-pissed the bed."
}, {
  "attrib": "",
  "quote": "You’ve sat with your friends and talked about which Friends character each of you is most like."
}, {
  "attrib": "",
  "quote": "You called your blog your ‘journal’."
}, {
  "attrib": "",
  "quote": "You’ve done a degree and you write the letters after your name like you’re a doctor or something."
}, {
  "attrib": "",
  "quote": "You snowboard."
}, {
  "attrib": "",
  "quote": "You like The Godfather Part III."
}, {
  "attrib": "",
  "quote": "You have a beer Friday… every day is beer day!"
}, {
  "attrib": "",
  "quote": "You say ‘on point’"
}, {
  "attrib": "",
  "quote": "You own a fedora."
}, {
  "attrib": "",
  "quote": "You’re a guy who pisses in the cubicle when a urinal is free."
}, {
  "attrib": "",
  "quote": "You drink Fosters"
}, {
  "attrib": "",
  "quote": "You wear boat shoes with no socks."
}, {
  "attrib": "",
  "quote": "You do Crossfit."
}, {
  "attrib": "",
  "quote": "You’ve never sharted."
}, {
  "attrib": "",
  "quote": "You’ve asked your friends to help fund your trip to Africa to ‘build schools’ or whatever."
}, {
  "attrib": "",
  "quote": "You think gin is better than whisky."
}, {
  "attrib": "",
  "quote": "You spent over £10 on your KeepCup."
}, {
  "attrib": "",
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
