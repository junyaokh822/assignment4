// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const posterImage = document.getElementById('poster-image');
const posterTitle = document.getElementById('poster-title');
const posterQuote = document.getElementById('poster-quote');
const randomizeButton = document.getElementById('randomize');
const submitButton = document.getElementById('submit');


//console.log('empty',input1.value);

// Array of predefined poster objects
const posters = [
    {
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/goals-inspirational-motivational-poster-art-christina-rollo.jpg',
      title: 'Goals',
      quote: '"What you get by achieveing goals is not as important as what you become by achieving your goals"',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0473/7197/6868/products/680610_1200x1200.jpg?v=1601902282',
      title: 'Pride',
      quote: '"Pride is an inner commitment to being your best at everything you do"',
    },
    {
      image: 'https://imgc.artprintimages.com/img/print/teamwork-inspirational-quote-and-motivational-poster_u-l-pn89ww0.jpg?artHeight=900&artPerspective=n&artWidth=900&background=fbfbfb',
      title: 'Teamwork',
      quote: '"The nice thing about teamwork is that you always have others on your side"',
    },
    // Add more poster objects as needed
  ];
  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
  randomizeButton.addEventListener('click', generateRandomPoster);
  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
  submitButton.addEventListener('click', generateCustomPoster);

  // Function to generate a random poster
  function generateRandomPoster() {
    event.preventDefault();
    // TODO: Generate a random index within the range of the posters array length
    const randomIndex = Math.floor(Math.random() * posters.length);
    // TODO: Retrieve the random poster object from the posters array
    const randomPoster = posters[randomIndex];
    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);
  }
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();
    // TODO: Retrieve the entered quote and author from the input fields    
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const imageUrl = document.getElementById('poster-image').src;
   
    // TODO: Create a custom poster object with the entered values
    const customPoster = {
      image: imageUrl,
      title: input1.value,
      quote: input2.value,
    };
    // TODO: Call the function to update the DOM with the values from the custom poster object
   updatePoster(customPoster.image, customPoster.title, customPoster.quote);
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    posterImage.src = imageUrl;
    posterTitle.textContent = title;
    posterQuote.textContent = quote;
  }