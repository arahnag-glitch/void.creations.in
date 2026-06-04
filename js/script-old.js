/* ==========================================
   VOID CREATIONS
   Premium Agency Script
========================================== */

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1200);

    }

});
/* ==========================================
   CURSOR GLOW
========================================== */

const cursorGlow =
document.querySelector(".cursor-glow");

if(cursorGlow){

document.addEventListener(
"mousemove",
(e) => {

    cursorGlow.style.left =
    e.clientX + "px";

    cursorGlow.style.top =
    e.clientY + "px";

});

}

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
document.querySelector(".navbar");

if(navbar){

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(15,24,53,0.92)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background =
        "rgba(15,24,53,0.65)";

        navbar.style.boxShadow =
        "none";
    }

});

}
/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });
        }

    });

});


/* ==========================================
   AOS INIT
========================================== */

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 1000,
        once: true
    });

}
/* ==========================================
   WHATSAPP BUTTON
========================================== */

const whatsappBtn =
document.querySelector(".whatsapp-btn");

/* Replace Later */

whatsappBtn.href =
"https://wa.me/910000000000";

/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const hero =
document.querySelector(".hero-content");

if(hero){

window.addEventListener(
"scroll",
() => {

    hero.style.transform =
    `translateY(${window.pageYOffset * 0.2}px)`;

});

}

/* ==========================================
   PORTFOLIO HOVER EFFECT
========================================== */

const portfolioCards =
document.querySelectorAll(".portfolio-card");

portfolioCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";
    });

});

/* ==========================================
   TESTIMONIAL AUTO ANIMATION
========================================== */

const testimonials =
document.querySelectorAll(".testimonial");

let active = 0;

setInterval(() => {

    testimonials.forEach(item => {

        item.style.opacity = "0.5";

    });

    testimonials[active].style.opacity = "1";

    active++;

    if(active >= testimonials.length){

        active = 0;
    }

}, 2500);

/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(
"%cVOID CREATIONS",
"font-size:24px;font-weight:bold;color:#6EA8FE;"
);

console.log(
"Future of Creative Advertising"
);

/* ==========================================
   MOBILE MENU TOGGLE
========================================== */

const menuBtn =
document.querySelector(".mobile-toggle");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ==========================================
   COUNTERS
========================================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(
            updateCounter,
            20
            );

        } else {

            counter.innerText =
            target;
        }

    };

    updateCounter();

});

/* ==========================================
   CURSOR TRAIL
========================================== */

document.addEventListener("mousemove", e => {

    const trail =
    document.createElement("div");

    trail.className =
    "cursor-trail";

    trail.style.left =
    e.pageX + "px";

    trail.style.top =
    e.pageY + "px";

    document.body.appendChild(trail);

    setTimeout(() => {

        trail.remove();

    }, 500);

});

/* Portfolio Filters */

const filterBtns =
document.querySelectorAll(".filter-btn");

const cards =
document.querySelectorAll(".portfolio-card");

filterBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        filterBtns.forEach(b=>
            b.classList.remove("active")
        );

        btn.classList.add("active");	

        const filter =
        btn.dataset.filter;

        cards.forEach(card=>{

            if(
                filter==="all" ||
                card.dataset.category===filter
            ){

                card.style.display="block";	

            }else{

                card.style.display="none";
            }

        });

    });

});

/* FAIRY FOLLOW */

const fairy =
document.getElementById("fairy-cursor");

document.addEventListener("mousemove",(e)=>{

    fairy.style.left =
    e.clientX + "px";

    fairy.style.top =
    e.clientY + "px";

});

/* SPARKLES */

document.addEventListener("mousemove",(e)=>{

    const sparkle =
    document.createElement("span");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
    e.pageX + "px";

    sparkle.style.top =
    e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },600);

});

const hoverTargets =
document.querySelectorAll(
"a,button,.service-card,.portfolio-card"
);

hoverTargets.forEach(item=>{

    item.addEventListener("mouseenter",(e)=>{

        for(let i=0;i<12;i++){

            const star =
            document.createElement("span");

            star.classList.add(
            "hover-star"
            );

            star.style.left =
            e.pageX+"px";

            star.style.top =
            e.pageY+"px";

            document.body.appendChild(star);

            setTimeout(()=>{

                star.remove();

            },800);

        }

    });

});

/* =========================
   HERO SHOWCASE SLIDER
========================= */

const showcaseCards =
document.querySelectorAll(".showcase-card");

let showcaseIndex = 0;

function rotateShowcase() {

    showcaseCards.forEach(card => {
        card.classList.remove("active");
    });

    showcaseIndex++;

    if (
        showcaseIndex >= showcaseCards.length
    ) {
        showcaseIndex = 0;
    }

    showcaseCards[showcaseIndex]
    .classList.add("active");
}

setInterval(
    rotateShowcase,
    5000
);

/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(
".gallery-item img"
);

const lightbox =
document.getElementById(
"lightbox"
);

const lightboxImg =
document.getElementById(
"lightbox-img"
);

const closeLightbox =
document.getElementById(
"close-lightbox"
);

if(galleryImages.length){

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add(
            "active"
            );

            lightboxImg.src =
            img.src;

        });

    });

}

if(closeLightbox){

    closeLightbox.addEventListener(
    "click",
    () => {

        lightbox.classList.remove(
        "active"
        );

    });

}


alert("VOID JS WORKING");