// Load Main Color From Local Storage
let maincolor = localStorage.getItem("color-option");
if (maincolor !== null) {
    document.documentElement.style.setProperty('--main--color', maincolor);

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === maincolor) {
            element.classList.add("active");
        }
    });
}

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);
handleactive(e);
    });
});

// #################
// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === 'true') {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    // Update the active state of the background options
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");
    });

    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

// Switch Backgrounds
const randomBackground = document.querySelectorAll(".random-backgrounds span");

randomBackground.forEach(span => {
    span.addEventListener("click", (e) => {
        handleactive(e);



        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImage();
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval); // Stop random background process
            localStorage.setItem("background_option", false);
        }
    });
});

// Toggle Spin Class On Icon
let setting = document.querySelector(".toggle-setting .fa-gear");

setting.onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
};

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg" ,"02.webp"];

function randomizeImage() {
    if (backgroundOption) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
        }, 1500);
    }
}

randomizeImage();



//   يوجد مشكلة 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    // Check if the skills section is in the viewport
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(" .skills .skill-box .skill-progress span ");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress; 
        });


    }
};


let allSkills = document.querySelectorAll(" .skills .skill-box .skill-progress span ");

allSkills.forEach(skill => {
    skill.style.width = skill.dataset.progress; 
});

// ##################################


// Create popup with image
let ourgallary = document.querySelectorAll(".gallary img");

ourgallary.forEach(img => {
    img.addEventListener("click", (e) => {
        // Create overlay element
        let overlay = document.createElement("div");
        // Add class to overlay
        overlay.className = 'popup-overlay';

        // Add overlay to body
        document.body.appendChild(overlay);

        // Create popup for each image
        let popupbox = document.createElement("div");
        // Add class to box
        popupbox.className = 'popup-box';

        if (img.alt !== null) {
            // Create heading
            let heading = document.createElement("h3");
            // Create text for h3
            let text = document.createTextNode(img.alt);

            heading.appendChild(text);

            popupbox.appendChild(heading);
        }

       // Create the image
       let popupimg = document.createElement("img");
       popupimg.src = img.src;

       let close = document.createElement("i")
       close.className = 'fas fa-times';

       popupbox.appendChild(popupimg);
       popupbox.appendChild(close);
       document.body.appendChild(popupbox);

       close.addEventListener("click", (e) => {
           e.target.parentNode.remove();
           document.querySelector(".popup-overlay").remove();
       });
   });
});




// #############################


    // Select all bullets
const allBullets = document.querySelectorAll(".bullets .bullet");
// Select all links
const links = document.querySelectorAll(".links a");

function scroll(els) {
    els.forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

scroll(allBullets);
scroll(links);

// Handle active statement
function handleactive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(el => {
        el.classList.remove("active");
    });
    ev.target.classList.add("active");
}




// #################################

// Show bullets
let bulletspan = document.querySelectorAll(".bullets-option span");
let bulletcontainer = document.querySelector(".bullets");
let bulletlocal = localStorage.getItem("bullets-options");

if (bulletlocal !== null) {
    bulletspan.forEach(span => {
        span.classList.remove("active");
    });
    if (bulletlocal === 'block') {
        bulletcontainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletcontainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletspan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.dataset.display === 'show') {
            bulletcontainer.style.display = 'block';
            localStorage.setItem("bullets-options", 'block');
        } else {
            bulletcontainer.style.display = 'none';
            localStorage.setItem("bullets-options", 'none');
        }
        handleactive(e);
    });
});
// #############################################
//rest button
document.querySelector(".rest").onclick=function(){
   localStorage.removeItem("bullets_options");
   localStorage.removeItem("background_option");
   localStorage.removeItem("color-option");

   window.location.reload();
}




//media 
let toggleBtn=document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links "); 
// var headlinks = document.querySelector(".links"); 

toggleBtn.onclick = function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
}

//click anywhere on screen  autmenu to  close menu


document.addEventListener("click",(e)=>{
   if(e.target !== toggleBtn && e.target!== tlinks){
    
    if(tlinks.classList.contains("open")){

        toggleBtn.classList.toggle("menu-active");
        tlinks.classList.toggle("open");
    }
   }
});

// Ensure elements are not null before accessing their properties


if (tlinks) {
    tlinks.onclick = function(e) {
        e.stopPropagation();
    };
}
