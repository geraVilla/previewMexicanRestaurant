

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };
  
  function observerCallback(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        const delay = index * 0.15;
        entry.target.style.transitionDelay = `${delay}s`;

        // fade in observed elements that are in view
        entry.target.classList.replace('fadeOutDown', 'fadeInUp');
      } else {
        entry.target.style.transitionDelay = "0s";
        // fade out observed elements that are not in view
        entry.target.classList.replace('fadeInUp', 'fadeOutDown');
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const burritoImageContainer = document.querySelectorAll(".burritoImageContainer")
  burritoImageContainer.forEach(el => observer.observe(el))



  const preDelay = 0.25
  function observerCallbackForName(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        var delay = preDelay + index * 0.15;
        entry.target.style.transitionDelay = `${delay}s`;

        // fade in observed elements that are in view
        entry.target.classList.replace('newFadeOutDown', 'newFadeInUp');
      } else {
        entry.target.style.transitionDelay = "0s";
        // fade out observed elements that are not in view
        entry.target.classList.replace('newFadeInUp', 'newFadeOutDown');
      }
    });
  }
  const observerOne = new IntersectionObserver(observerCallbackForName, observerOptions);
  const nameOfItem = document.querySelectorAll(".nameOfItem")
  nameOfItem.forEach(er => observerOne.observe(er))



  const preDelayTwo = 0.5
  function observerCallbackForParagraph(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        var delay = preDelayTwo + index * 0.15;
        entry.target.style.transitionDelay = `${delay}s`;

        // fade in observed elements that are in view
        entry.target.classList.replace('descriptionUnShow', 'descriptionShow');
      } else {
        entry.target.style.transitionDelay = "0s";
        // fade out observed elements that are not in view
        entry.target.classList.replace('descriptionShow', 'descriptionUnShow');
      }
    });
  }

  const observerTwo = new IntersectionObserver(observerCallbackForParagraph, observerOptions);
  const descriptionParagraph = document.querySelectorAll(".descriptionParagraph")
  descriptionParagraph.forEach(ex => observerTwo.observe(ex))


  
  function observerCallbackForFade(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        var delay = index * 0.4;
        entry.target.style.transitionDelay = `${delay}s`;

        // fade in observed elements that are in view
        entry.target.classList.replace('fadeOut', 'fadeIn');
      } else {
        entry.target.style.transitionDelay = "0s";
        // fade out observed elements that are not in view
        entry.target.classList.replace('fadeIn', 'fadeOut');
      }
    });
  }

  const observerThree = new IntersectionObserver(observerCallbackForFade, observerOptions);
  const review = document.querySelectorAll(".review")
  review.forEach(ex => observerThree.observe(ex))



  var slideDelay = 0.4
  function observerCallbackForSlide(entries, observer){
    entries.forEach(entry => {
      if (entry.isIntersecting) {

       
        
        entry.target.style.animationDelay = `${slideDelay}s`;
        // fade in observed elements that are in view
        entry.target.classList.replace('slideBack', 'slideToRight');
      } else {
        entry.target.style.animationDelay = "0s";
        // fade out observed elements that are not in view
        entry.target.classList.replace('slideToRight', 'slideBack');
      }
    });
  }

  const observerFour = new IntersectionObserver(observerCallbackForSlide, observerOptions);
  const slideToRightContainer = document.querySelectorAll(".slideToRightContainer")
  slideToRightContainer.forEach(ex => observerFour.observe(ex))


  function observerCallbackForOpacity(entries, observer){
    entries.forEach(entry => {
      if (entry.isIntersecting) {

       
        

        // fade in observed elements that are in view
        entry.target.classList.replace('opacityHigh', 'opacityLow');
      } else {
       
        // fade out observed elements that are not in view
        entry.target.classList.replace('opacityLow', 'opacityHigh');
      }
    });
  }

  const observerFive = new IntersectionObserver(observerCallbackForOpacity, observerOptions);
  const octopusContainer = document.querySelectorAll(".octopusContainer")
  octopusContainer.forEach(ex => observerFive.observe(ex))
  









const leftButtonContainer = document.querySelector(".leftButtonContainer")
const rightButtonContainer = document.querySelector(".rightButtonContainer")
leftButtonContainer.addEventListener("click", function(){
    plusDivs(-1)
})

rightButtonContainer.addEventListener("click", function(){
    plusDivs(1)
})

var slideIndex = 2

function plusDivs(n){
  showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("mySlides")
    if(n > x.length){
      slideIndex = 1
    }
    if(n < 1){
      slideIndex = x.length
    }

    for(i = 0; i < x.length; i++){
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

showDivs(slideIndex)




//// for the seaFood section
var seaFoodDelay = 1
function observerCallbackForSeaFoodUp(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      /*const delay = index * 0.15;*/
      entry.target.style.transitionDelay = `${seaFoodDelay}s`;

      // fade in observed elements that are in view
      entry.target.classList.replace('seaFoodDownAnimation', 'seaFoodUpAnimation');
    } else {
      entry.target.style.transitionDelay = "0s";
      // fade out observed elements that are not in view
      entry.target.classList.replace('seaFoodUpAnimation', 'seaFoodDownAnimation');
    }
  });
}



const observerSix = new IntersectionObserver(observerCallbackForSeaFoodUp, observerOptions);
const seaFoodTitleContainer = document.querySelectorAll(".seaFoodTitleContainer")
seaFoodTitleContainer.forEach(el => observerSix.observe(el))



function observerCallbackForSeaFoodFade(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      
      entry.target.style.transitionDelay = `${seaFoodDelay}s`;

      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } else {
      entry.target.style.transitionDelay = "0s";
      // fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

const observerSeven = new IntersectionObserver(observerCallbackForSeaFoodFade, observerOptions);
const seaFoodMenuButtonsContainer = document.querySelectorAll(".seaFoodMenuButtonsContainer")
seaFoodMenuButtonsContainer.forEach(el => observerSeven.observe(el))

var seaFoodIconsDelay = 1
function observerCallbackForSeaFoodFadeIcons(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      const delay = seaFoodIconsDelay + index * 0.15;
      entry.target.style.transitionDelay = `${delay}s`;

      // fade in observed elements that are in view
      entry.target.classList.replace('seaFoodIconLow', 'seaFoodIconHigh');
    } else {
      entry.target.style.transitionDelay = "0s";
      // fade out observed elements that are not in view
      entry.target.classList.replace('seaFoodIconHigh', 'seaFoodIconLow');
    }
  });
}

const observerEight = new IntersectionObserver(observerCallbackForSeaFoodFadeIcons, observerOptions);
const seaFoodIcons = document.querySelectorAll(".seaFoodIcons")
seaFoodIcons.forEach(el => observerEight.observe(el))



/// seafood paragraph
var seaFoodParagraphDelay = 1.5
function observerCallbackForSeaFoodFadeParagraph(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      
      entry.target.style.transitionDelay = `${seaFoodParagraphDelay}s`;
      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } else {
      entry.target.style.transitionDelay = "0s";
      // fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

const observerNine = new IntersectionObserver(observerCallbackForSeaFoodFadeParagraph, observerOptions);
const seaFoodDescriptionParagraph = document.querySelectorAll(".seaFoodDescriptionParagraph")
seaFoodDescriptionParagraph.forEach(el => observerNine.observe(el))









  