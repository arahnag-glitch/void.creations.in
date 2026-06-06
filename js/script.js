/* ==========================================
   VOID CREATIONS
========================================== */

/* LOADER */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },1200);

    }

});


/* NAVBAR */

const navbar =
document.querySelector(".navbar");

if(navbar){

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 50){

        navbar.classList.add(
        "scrolled"
        );

    }else{

        navbar.classList.remove(
        "scrolled"
        );

    }

});

}

/* SMOOTH SCROLL */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener(
    "click",
    function(e){

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

/* AOS */

if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1000,
        once:true

    });

}

/* MOBILE MENU */

const menuBtn =
document.querySelector(
".mobile-toggle"
);

const navLinks =
document.querySelector(
".nav-links"
);

if(menuBtn && navLinks){

    menuBtn.addEventListener(
    "click",
    ()=>{

        navLinks.classList.toggle(
        "active"
        );

    });

}

/* HERO SHOWCASE */

const showcaseCards =
document.querySelectorAll(
".showcase-card"
);

if(showcaseCards.length){

let showcaseIndex = 0;

setInterval(()=>{

    showcaseCards.forEach(card=>{

        card.classList.remove(
        "active"
        );

    });

    showcaseIndex++;

    if(
        showcaseIndex >=
        showcaseCards.length
    ){

        showcaseIndex = 0;

    }

    showcaseCards[
    showcaseIndex
    ].classList.add(
    "active"
    );

},5000);

}

/* TESTIMONIALS */

const testimonials =
document.querySelectorAll(
".testimonial"
);

if(testimonials.length){

let active = 0;

setInterval(()=>{

    testimonials.forEach(item=>{

        item.style.opacity =
        ".5";

    });

    testimonials[
    active
    ].style.opacity = "1";

    active++;

    if(
        active >=
        testimonials.length
    ){

        active = 0;

    }

},2500);

}

/* PORTFOLIO FILTERS */

const filterBtns =
document.querySelectorAll(
".filter-btn"
);

const cards =
document.querySelectorAll(
".portfolio-card"
);

filterBtns.forEach(btn=>{

    btn.addEventListener(
    "click",
    ()=>{

        filterBtns.forEach(b=>{

            b.classList.remove(
            "active"
            );

        });

        btn.classList.add(
        "active"
        );

        const filter =
        btn.dataset.filter;

        cards.forEach(card=>{

            const category =
            card.dataset.category;

            if(
                filter==="all" ||
                category===filter
            ){

                card.style.display =
                "block";

            }else{

                card.style.display =
                "none";

            }

        });

    });

});

console.log(
"VOID CREATIONS READY"
);
/* =========================
   MAGNETIC BUTTONS
========================= */

const magneticButtons =
document.querySelectorAll(
".magnetic-btn"
);

magneticButtons.forEach(btn=>{

    btn.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        btn.getBoundingClientRect();

        const x =
        e.clientX -
        rect.left -
        rect.width / 2;

        const y =
        e.clientY -
        rect.top -
        rect.height / 2;

        btn.style.transform =
        `translate(${x * 0.15}px,
        ${y * 0.15}px)`;

    });

    btn.addEventListener(
    "mouseleave",
    ()=>{

        btn.style.transform =
        "translate(0,0)";

    });

});

/* =========================
   PREMIUM GLASS CURSOR
========================= */

const glassCursor =
document.querySelector(
".glass-cursor"
);

if(glassCursor){

document.addEventListener(
"mousemove",
(e)=>{

    glassCursor.style.left =
    e.clientX + "px";

    glassCursor.style.top =
    e.clientY + "px";

});

const hoverItems =
document.querySelectorAll(
"a,button,.portfolio-card,.service-card"
);

hoverItems.forEach(item=>{

    item.addEventListener(
    "mouseenter",
    ()=>{

        glassCursor.classList.add(
        "active"
        );

    });

    item.addEventListener(
    "mouseleave",
    ()=>{

        glassCursor.classList.remove(
        "active"
        );

    });

});

}

/* ==========================
   PORTFOLIO MOUSE GLOW
========================== */

const glowCards =
document.querySelectorAll(
".portfolio-card"
);

glowCards.forEach(card=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.setProperty(
        "--x",
        x + "px"
        );

        card.style.setProperty(
        "--y",
        y + "px"
        );

    });

});

const sections =
document.querySelectorAll(
"section"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},

{
threshold:0.15
}

);

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform=
"translateY(80px)";

observer.observe(section);

});

document.addEventListener(
"contextmenu",
(e)=>{
    e.preventDefault();
});

document.querySelectorAll("img")
.forEach(img=>{

    img.setAttribute(
    "draggable",
    "false"
    );

});

const light1 =
document.querySelector(".light-1");

document.addEventListener(
"mousemove",
(e)=>{

if(light1){

light1.style.transform =
`translate(
${e.clientX/30}px,
${e.clientY/30}px
)`;

}

});

const hero = document.querySelector(".hero");
const glow = document.querySelector(".mouse-glow");

hero.addEventListener("mousemove",(e)=>{

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

});

