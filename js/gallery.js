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

const closeBtn =
document.getElementById(
"close-lightbox"
);

if(
galleryImages.length &&
lightbox &&
lightboxImg
){

galleryImages.forEach(img=>{

    img.addEventListener(
    "click",
    ()=>{

        lightbox.classList.add(
        "active"
        );

        lightboxImg.src =
        img.src;

    });

});

}

if(closeBtn && lightbox){

closeBtn.addEventListener(
"click",
()=>{

    lightbox.classList.remove(
    "active"
    );

});

}

if(lightbox){

lightbox.addEventListener(
"click",
(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove(
        "active"
        );

    }

});

}