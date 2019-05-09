// get slider items
var sliderImages = Array.from(document.querySelectorAll(".slide-container img"));

// get number of slides
var slideCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// slide number string element
var slideNumberElement = document.getElementById("slide-number");

// previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// create the main ul elements
var paginationElement = document.createElement("ul");
paginationElement.setAttribute("id","pagination-ul");

// create list items based on slides count
var i;
for(i = 1;i <= slideCount;i++)
{
    // create li
    var paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index",i);
    paginationItem.appendChild(document.createTextNode(i));

    // append items to the main ul
    paginationElement.appendChild(paginationItem);
}

// show the ul in the page
document.getElementById("indicators").appendChild(paginationElement);


// get the new created UL
var paginationCreatedUL = document.getElementById("pagination-ul");

// get pagination  items
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop through bullets items
for(var i=0;i < paginationsBullets.length;i++)
{
    paginationsBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"));
        thechecker();
    } 
}

// trigger the checker function
thechecker();


// next slide function
function nextSlide()
{
    if(nextButton.classList.contains("disabled"))
    {
        return false;
    }
    else
    {
        currentSlide++;
        thechecker();
    }
}

// prev slide function
function prevSlide()
{
    if(prevButton.classList.contains("disabled"))
    {
        return false;
    }
    else
    {
        currentSlide--;
        thechecker();
    }
}

// create checker funtion
function thechecker()
{
    // set the slide number
    slideNumberElement.textContent = "Slide #" + (currentSlide) + " of " + (slideCount);
    removeAllActive();

    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");

    // set active class on current pagiantion item
    paginationCreatedUL.children[currentSlide - 1].classList.add("active");

    // check the current slide is the first
    if(currentSlide == 1)
    {
        // add disabled class on previous button
        prevButton.classList.add("disabled");
    }
    else
    {
        prevButton.classList.remove("disabled");
    }
    // check the current slide is the last
    if(currentSlide == slideCount)
    {
        // add disabled class on next button
        nextButton.classList.add("disabled");
    }
    else
    {
        nextButton.classList.remove("disabled");
    }
}

//remove all active classes if images and pagination bullets
function removeAllActive()
{
    // loop through images
    sliderImages.forEach(function(img){
        img.classList.remove("active");
    })

    // loop through bullets
    paginationsBullets.forEach(function(bullet){
        bullet.classList.remove("active");
    })
}
