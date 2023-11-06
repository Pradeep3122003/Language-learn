// Import the Google Translate library
const Translator = require('google-translate-api');

// Define functions to translate between English, Hindi, and Kannada
function translateToKannada(text) {
  const translator = new Translator();
  const translatedText = translator.translate(text, { from: 'en', to: 'kn' });
  return translatedText.text;
}

function translateToHindi(text) {
  const translator = new Translator();
  const translatedText = translator.translate(text, { from: 'en', to: 'hi' });
  return translatedText.text;
}

function translateToEnglish(text) {
  const translator = new Translator();
  const translatedText = translator.translate(text, { from: 'kn', to: 'en' });
  return translatedText.text;
}

// Define a function to initialize the program
function initialize() {
  // Prompt the user to select a language
  console.log('Select a language:\n1. English\n2. Hindi\n3. Kannada');
  const languageSelection = parseInt(prompt('Enter your selection: '));

  // Call the appropriate language learning function based on the user's selection
  if (languageSelection === 1) {
    learnEnglish();
  } else if (languageSelection === 2) {
    learnHindi();
  } else if (languageSelection === 3) {
    learnKannada();
  } else {
    console.log('Invalid selection. Please try again.');
    initialize();
  }
}

// Define a function to learn English
function learnEnglish() {
  // Prompt the user for their name and age
  const name = prompt('Enter your name: ');
  const age = parseInt(prompt('Enter your age: '));

  // Greet the user and welcome them to the English learning program
  console.log(`Hi ${name}, welcome to the English learning program!`);

  // Ask the user what they would like to learn
  const topic = prompt('What would you like to learn? (Enter a topic or question): ');

  // Translate the user's topic or question into English and display the translation
  const translatedTopic = translateToEnglish(topic);
  console.log(`Translation: ${translatedTopic}`);
}

// Define a function to learn Hindi
function learnHindi() {
  // Prompt the user for their name and age
  const name = prompt('Enter your name: ');
  const age = parseInt(prompt('Enter your age: '));

  // Greet the user and welcome them to the Hindi learning program
  console.log(`Hi ${name}, welcome to the Hindi learning program!`);

  // Ask the user what they would like to learn
  const topic = prompt('What would you like to learn? (Enter a topic or question in English): ');

  // Translate the user's topic or question into Hindi and display the translation
  const translatedTopic = translateToHindi(topic);
  console.log(`Translation: ${translatedTopic}`);
}

// Define a function to learn Kannada
function learnKannada() {
  // Prompt the user for their name and age
  const name = prompt('Enter your name: ');
  const age = parseInt(prompt('Enter your age: '));

  // Greet the user and welcome them to the Kannada learning program
  console.log(`Hi ${name}, welcome to the Kannada learning program!`);

  // Ask the user what they would like to learn
  const topic = prompt('What would you like to learn? (Enter a topic or question in English): ');

  // Translate the user's topic or question into Kannada and display the translation
  const translatedTopic = translateToKannada(topic);
  console.log(`Translation: ${translatedTopic}`);
}

// Start the program
initialize();
