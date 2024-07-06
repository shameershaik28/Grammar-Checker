// Original story
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Split the story into words
let storyWords = story.split(' ');

// Words to be addressed
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Uncomment to log the array of words
// console.log(storyWords);

// Initialize a counter for the words
let count = 0;

// Count the number of words in the story
storyWords.forEach((word) => {
  count++;
})
console.log(count);

// Remove the unnecessary word from the story
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
})

// Correct the misspelled word
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful' : word;
})

// Find the index of the bad word
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
})

console.log(badWordIndex);

// Replace the bad word with a more appropriate word
storyWords[78] = 'really';

// Check if all words are less than 10 characters long
let lengthCheck = storyWords.every((word) => {
  return word.length < 10;
})
console.log(lengthCheck);

// Log words longer than 10 characters
storyWords.forEach((word) => {
  word.length > 10 && console.log(word);
})

// Join the words back into a story and log the result
console.log(storyWords.join(' '));
