const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// querying out my navigation;
let navtags = document.querySelectorAll('nav a');
navtags[0].textContent = siteContent.nav["nav-item-1"];
navtags[1].textContent = siteContent.nav["nav-item-2"];
navtags[2].textContent = siteContent.nav["nav-item-3"];
navtags[3].textContent = siteContent.nav["nav-item-4"];
navtags[4].textContent = siteContent.nav["nav-item-5"];
navtags[5].textContent = siteContent.nav["nav-item-6"];
//Font-color addition
navtags[0].style.color = '#9932CC';
navtags[1].style.color = 'red';
navtags[2].style.color = 'blue';
navtags[3].style.color = 'pink';
navtags[4].style.color = 'yellow';
navtags[5].style.color = 'black';
//My CTA
let ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = siteContent.cta.h1;

let ctaTextBtn = document.querySelector('.cta-text button');
ctaTextBtn.textContent = siteContent.cta.button;

let ctaTextImg = document.querySelector('#cta-img');
ctaTextImg.src = siteContent.cta["img-src"];

//My main content

//defining image
let mainContentImg = document.querySelector('.main-content img');
// All H4 heading on the site
let mainContentH4 = document.querySelectorAll('h4')
// All P tags
let mainContentP = document.querySelectorAll('.main-content p');
//Headings
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
//Content
mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];
//Assigning image
mainContentImg.src = siteContent["main-content"]["middle-img-src"];

//Contact area
let contactH4 = document.querySelector('.contact h4');
let contactP = document.querySelectorAll('.contact p');
contactH4.textContent = siteContent.contact["contact-h4"];
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

//Footer area
let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

//Creating new elements
let newNav1 = document.createElement('a');
let newNav2 = document.createElement('a');
newNav1.textContent = 'Home';
newNav2.textContent = 'FAQS';
newNav1.style.color = '#9932CC';
newNav2.style.color = '#9932CC';

//append and prepend 
let navItem = document.querySelector('nav');
navItem.prepend(newNav1);
navItem.appendChild(newNav2);