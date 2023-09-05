const scoreKeeper = {
    EndlessSummerVacation: 0,
    SheIsComing: 0,
    PlasticHearts: 0,
    YoungerNow: 0,
};

let currentQuestionIndex = 0; 

// the whole `questions` variable is an array, with square brackets: []
// individual questions are objects, with curly braces: {}
// the options/answers of each question are another array: []
// each option is its own object {} with two properties: text and point


const questions = [
    {
        text: 'What\'s your favorite Miley era?',
        options: [
            {
                text: 'She Is Coming',
                point: 'SheIsComing',
                img: './images/she-is-coming.jpg',
            },
            {
                text: 'Endless Summer Vacation',
                point: 'EndlessSummerVacation',
                img: './images/endless-summer-vacation.jpg',
            },
            {
                text: 'Younger Now',
                point: 'YoungerNow',
                img: './images/younger-now.jpg',
            },
            {
                text: 'Plastic Hearts',
                point: 'PlasticHearts',
                img: './images/plastic-hearts.jpg',
            },
        ],
    },    
    {
        text: 'How do you like to travel?',
        options: [
            {
                text: 'By wrecking ball',
                point: 'EndlessSummerVacation',
                img: './images/wrecking-ball.jpg',
            },
            {
                text: 'By plane',
                point: 'SheIsComing',
                img: './images/plane.jpg',
            },
            {
                text: 'Driving',
                point: 'PlasticHearts',
                img: './images/driving.jpg',
            },
            {
                text: 'Whatever\'s easiest',
                point: 'YoungerNow',
                img: './images/whatever.jpg',
            },
        ],
    },
    {
        text: 'Are you a fan of country music?',
        options: [
            {
                text: 'Yee-haw',
                point: 'YoungerNow',
                img: './images/yes-country.png',
            },
            {
                text: 'Meh-haw',
                point: 'EndlessSummerVacation',
                img: './images/meh-country.png',
            },
            {
                text: 'No-haw',
                point: 'PlasticHearts',
                img: './images/no-country.png',
            },
            {
                text: 'What\'s country?',
                point: 'SheIsComing',
                img: './images/idk-country.png',
            },
        ],
    },
    {
        text: 'Pick your love life anthem:',
        options: [
            {
                text: 'Angels Like You',
                point: 'PlasticHearts',
                img: './images/plastic-hearts.jpg',
            },
            {
                text: 'Malibu',
                point: 'YoungerNow',
                img: './images/younger-now.jpg',
            },
            {
                text: 'Jaded',
                point: 'EndlessSummerVacation',
                img: './images/endless-summer-vacation.jpg',
            },
            {
                text: 'Slide Away',
                point: 'SheIsComing',
                img: './images/she-is-coming.jpg',
                 },
        ],
    },
    {
        text: 'You shamelessly know all the lyrics to:',
        options: [
            {
                text: 'Younger Now',
                point: 'YoungerNow',
                img: './images/younger-now.jpg',
            },
            {
                text: 'Mother\'s Daughter',
                point: 'SheIsComing',
                img: './images/she-is-coming.jpg',
            },
            {
                text: 'Prisoner',
                point: 'PlasticHearts',
                img: './images/plastic-hearts.jpg',
            },
            {
                text: 'Flowers',
                point: 'EndlessSummerVacation',
                img: './images/endless-summer-vacation.jpg',
            },
        ],
    },
];

let spotifyLogoElement = document.createElement('img');
spotifyLogoElement.id = 'spotify-logo';
spotifyLogoElement.src = './images/spotify-logo.png';
spotifyLogoElement.style.width = '73px';
spotifyLogoElement.style.maxWidth = '73px';
let spotifyLogoElementDiv = document.createElement("div");
spotifyLogoElementDiv.appendChild(spotifyLogoElement);
spotifyLogoElementDiv.id = 'spotifylogo-wrapper';
spotifyLogoElementDiv.style.position = 'absolute';
spotifyLogoElementDiv.style.zIndex = '2000';
spotifyLogoElementDiv.style.top = '20px';

document.body.appendChild(spotifyLogoElementDiv);

// Function is called once window loads
window.onload = function() {
    beforeStartQuiz();
};

// Animation delay between each of the album cover images
function beforeStartQuiz() {

    let imageIds = ["image-row-album-1", "image-row-album-2", "image-row-album-3", "image-row-album-4"];

    for (let i = 0; i < imageIds.length; i++) {
        let element = document.getElementById(imageIds[i]);
        element.style.animationDelay = `${i * 200}ms`;
        element.classList.add('animate');
    }
};

let quizBtn = document.getElementById('quizBtn');
quizBtn.addEventListener('click', startQuiz);

// This function starts the quiz
// It is called by a button on the HTML page
function startQuiz() {

    spotifyLogoElementDiv.classList.add('move-logo'); // Add CSS class to move the logo

        function disableHoverFunctionality() {
        if (
          !window.matchMedia("(hover: hover)").matches ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints ||
          window.innerWidth < 768
        ) {
          // The device doesn't support hover or is a touchscreen device or has a small screen width
          const quizOptions = document.querySelectorAll(".quizOption");
          quizOptions.forEach((option) => {
            option.classList.add("no-hover-functionality");
          });
        }
      }
    
      disableHoverFunctionality();


    
// Hide the parent div
let parentDiv = document.getElementById('parent');
parentDiv.style.display = "none";

 // Adjust properties of the quizContainer
 let quizContainer = document.getElementById('quizContainer');
quizContainer.style.overflow = 'visible';
quizContainer.style.paddingBottom = '0px';

    let headerDiv = document.getElementById('header');
    headerDiv.style.display = 'none'; 

// Create the <a> element
let linkElement = document.createElement("a");

// Create the <svg> element
let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgElement.setAttribute("viewBox", "0 0 24 24");
svgElement.style.width = "24px";
svgElement.style.height = "24px";

// Create the <path> element
let pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElement.setAttribute("d", "M15.9569 2.79279C16.1444 2.98031 16.2497 3.23462 16.2497 3.49979C16.2497 3.76495 16.1444 4.01926 15.9569 4.20679L8.16394 11.9998L15.9569 19.7928C16.0524 19.885 16.1286 19.9954 16.181 20.1174C16.2334 20.2394 16.261 20.3706 16.2622 20.5034C16.2633 20.6362 16.238 20.7678 16.1878 20.8907C16.1375 21.0136 16.0632 21.1253 15.9693 21.2192C15.8754 21.3131 15.7638 21.3873 15.6409 21.4376C15.518 21.4879 15.3863 21.5132 15.2535 21.512C15.1208 21.5109 14.9895 21.4833 14.8675 21.4309C14.7455 21.3785 14.6352 21.3023 14.5429 21.2068L5.33594 11.9998L14.5429 2.79279C14.7305 2.60532 14.9848 2.5 15.2499 2.5C15.5151 2.5 15.7694 2.60532 15.9569 2.79279V2.79279Z");
pathElement.setAttribute("fill", "white");

// Append the <path> element to the <svg> element
svgElement.appendChild(pathElement);

// Append the <svg> element to the <a> element
linkElement.appendChild(svgElement);

// Create the <div> element for the back button
let backButtonDiv = document.createElement("div");
backButtonDiv.id = "back-button";

// Append the <a> element to the <div> element
backButtonDiv.appendChild(linkElement);

// Append the <div> element to the document body
document.body.appendChild(backButtonDiv);


// Add this code after creating the back button
let backButton = document.getElementById('back-button');
backButton.addEventListener('click', goToPreviousQuestion);

    // console.log('Quiz started!');

    // Reset score
    // This loops over each of the properties in the object
    for (let result in scoreKeeper) {
        // We are setting that property's value back to zero
        scoreKeeper[result] = 0;
    }

    // Ask first question
    // We are passing the first question in our questions array into this function
    askQuestion(questions[0]);

}

  



function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        // Decrement the question index
        currentQuestionIndex--; 

        // Ask previous question
        askQuestion(questions[currentQuestionIndex]);
    }
}



function askQuestion(question) {
    
    let backButton = document.getElementById('back-button');
    backButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';

    let quizZone = document.getElementById('quizZone');
    while (quizZone.firstChild) {
        quizZone.removeChild(quizZone.firstChild);
    }

    let questionP = document.createElement('h2');
    questionP.innerText = question.text;
    quizZone.appendChild(questionP);

    let answerDiv = document.createElement('div');
    answerDiv.setAttribute('id', 'quizAnswers');
    quizZone.appendChild(answerDiv);
    question.options.forEach((option, i) => {
        let optionDiv = document.createElement('div');
        optionDiv.setAttribute('class', 'quizOption');
    
        optionDiv.addEventListener('click', acceptAnswer);
    
        let optionImage = document.createElement('img');
        optionImage.setAttribute('class', 'quizOption-img');
        optionImage.src = option.img;
        optionImage.style.width = '100%';
        optionImage.style.height = '100%';
    
        let optionImageDiv = document.createElement("div");
        optionImageDiv.setAttribute('class', 'quizOptionimg-wrapper');
        optionImageDiv.style.width = '91px';
        optionImageDiv.style.height = '91px';
        optionImageDiv.style.overflow = 'hidden';
        optionImageDiv.style.display = 'flex';
        optionImageDiv.style.justifyContent = 'center';
        optionImageDiv.style.alignItems = 'center';
        optionImageDiv.style.borderRadius = '0.125rem';
    
        optionImageDiv.appendChild(optionImage);
        optionDiv.appendChild(optionImageDiv);
    
        let optionText = document.createElement('span');
        optionText.innerText = option.text;
        optionDiv.appendChild(optionText);
    
        answerDiv.appendChild(optionDiv);
    
        optionDiv.index = i;
    });


// Apply event listeners
answerDiv.addEventListener('mouseover', function(e) {
    if (e.target.matches('.quizOption, .quizOption *')) {
        let img = e.target.closest('.quizOption').querySelector('.quizOption-img');
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 800ms';
        img.style.transitionTimingFunction = 'cubic-bezier(0.33, 1, 0.68, 1)';
    }
});

answerDiv.addEventListener('mouseout', function(e) {
    if (e.target.matches('.quizOption, .quizOption *')) {
        let img = e.target.closest('.quizOption').querySelector('.quizOption-img');
        img.style.transform = 'scale(1)';
        img.style.transition = 'transform 800ms';
        img.style.transitionTimingFunction = 'cubic-bezier(0.33, 1, 0.68, 1)';
    }
});


}


function acceptAnswer(event) {


    let selectedOptionIndex = event.target.closest('.quizOption').index;
    // console.log({ selectedOptionIndex });

    // Add point according to the question and option
    let currentQuestion = questions[currentQuestionIndex];
    let selectedOption = currentQuestion.options[selectedOptionIndex];
    scoreKeeper[selectedOption.point]++;

    // console.log(JSON.stringify(scoreKeeper, null, 4));
    
    // Go to next question OR calculate result
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      calculateResult();
    } else {
      askQuestion(questions[currentQuestionIndex]);
    }
}


function calculateResult() {
    // Add up points, taking the FIRST/HIGHEST score
    let quizResult = '';

    let possibleResults = Object.keys(scoreKeeper);

    for (let i = 0; i < possibleResults.length; i++) {
        let thisPossibleResult = possibleResults[i];

        if (!quizResult || scoreKeeper[quizResult] < scoreKeeper[thisPossibleResult]) {
            quizResult = thisPossibleResult;
        }
    }

    // Log quiz result
    console.log(quizResult);
    // Display result
    showResult(quizResult);
}



// Display Results
function showResult(result) {

    let quizContainer = document.getElementById('quizContainer');

    // Listen for window resize events
    window.addEventListener('resize', adjustWidth);
    
    // Adjust the width immediately in case the window is already the correct size
    adjustWidth();
    
    function adjustWidth() {
      if (window.innerWidth > 768) {
        quizContainer.style.width = 'auto';
      } else {
        quizContainer.style.width = '100%';
      }
    }

    // Apply event listeners

 let iframeWrapper = document.getElementById('iframe-wrapper');   
 iframeWrapper.addEventListener('mouseover', function(e) {
    if (e.target.matches('.iframe-wrapper, .iframe-wrapper *')) {
        let img = e.target.closest('.iframe-wrapper').querySelector('.results-img');
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 800ms';
        img.style.transitionTimingFunction = 'cubic-bezier(0.33, 1, 0.68, 1)';
    }
});

iframeWrapper.addEventListener('mouseout', function(e) {
    if (e.target.matches('.iframe-wrapper, .iframe-wrapper *')) {
        let img = e.target.closest('.iframe-wrapper').querySelector('.results-img');
        img.style.transform = 'scale(1)';
        img.style.transition = 'transform 800ms';
        img.style.transitionTimingFunction = 'cubic-bezier(0.33, 1, 0.68, 1)';
    }
});


    // Hide the quizZone (the quiz is over)
    let quizZoneDiv = document.getElementById('quizZone');
    quizZoneDiv.style.display = 'none'; 

    // Hide the quizZone (the quiz is over)
    let headerDiv = document.getElementById('header');
    headerDiv.style.display = 'none'; 

    let backgroundDiv = document.getElementById('background');
    backgroundDiv.style.display = 'none'; 

    // document.body.style.backgroundColor.display = 'none'; 
    document.body.style.backgroundColor = 'none';


    let backButtonDiv = document.getElementById('back-button');
    backButtonDiv.style.display = 'none';

    // Find the hidden <div> that contains the results
    let resultDiv = document.getElementById('answer-' + result);
    // un-hide it by removing the '.hide' class
    resultDiv.classList.toggle('hide'); 

    // Replace the background color of the body to match the background color for each result type
    let bgDiv = document.getElementById(result);
    let bodyDiv = document.getElementById('body');
    let newBackground = getComputedStyle(bgDiv).background;
    bodyDiv.style.background = newBackground;

    // Show the 'Take Again' button
    let takeAgainButton = document.querySelector('#takeAgain');
    takeAgainButton.style.display = 'inline'; 
    // Clicking the 'Take Again' button causes the page to reload
    takeAgainButton.addEventListener('click', function(){
        window.location.reload();
    });

    // Insert the new element before the first child of the body
    document.body.insertBefore(takeAgainButton, body.firstChild);
}

