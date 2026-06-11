// ==========================
// ELEMENTOS
// ==========================

const header =
document.querySelector(".header");

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

const scrollTopBtn =
document.querySelector(".scroll-top");

const cursor =
document.querySelector(".cursor");

const counters =
document.querySelectorAll(".counter");

const reveals =
document.querySelectorAll(".reveal");

// ==========================
// CURSOR GLOW
// ==========================

document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

    }
);

// ==========================
// MENU MOBILE
// ==========================

menuBtn.addEventListener(
    "click",
    (e) => {

        e.stopPropagation();

        navLinks.classList.toggle(
            "active"
        );

    }
);

// ==========================
// CERRAR MENU FUERA
// ==========================

document.addEventListener(
    "click",
    (e) => {

        const insideMenu =
            navLinks.contains(
                e.target
            );

        const insideButton =
            menuBtn.contains(
                e.target
            );

        if(
            !insideMenu &&
            !insideButton
        ){

            navLinks.classList.remove(
                "active"
            );

        }

    }
);

// ==========================
// CERRAR MENU LINK
// ==========================

document
.querySelectorAll(
    ".nav-links a"
)
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "active"
            );

        }
    );

});

// ==========================
// HEADER SCROLL
// ==========================

window.addEventListener(
    "scroll",
    () => {

        if(
            window.scrollY > 80
        ){

            header.classList.add(
                "scrolled"
            );

        }else{

            header.classList.remove(
                "scrolled"
            );

        }

    }
);

// ==========================
// SCROLL TOP BUTTON
// ==========================

window.addEventListener(
    "scroll",
    () => {

        if(
            window.scrollY > 500
        ){

            scrollTopBtn.classList.add(
                "show"
            );

        }else{

            scrollTopBtn.classList.remove(
                "show"
            );

        }

    }
);

scrollTopBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }
);

// ==========================
// SCROLL REVEAL
// ==========================

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(
            entry.isIntersecting
        ){

            entry.target.classList.add(
                "active"
            );

        }

    });

},

{
    threshold:.15
}

);

reveals.forEach(item=>{

    revealObserver.observe(
        item
    );

});

// ==========================
// CONTADORES
// ==========================

let counterStarted =
false;

function startCounters(){

    counters.forEach(counter=>{

        const target =
        +counter.dataset.target;

        const speed = 200;

        const update = ()=>{

            const current =
            +counter.innerText;

            const increment =
            Math.ceil(
                target / speed
            );

            if(
                current < target
            ){

                counter.innerText =
                current + increment;

                setTimeout(
                    update,
                    10
                );

            }else{

                counter.innerText =
                target;

            }

        };

        update();

    });

}

// ==========================
// OBSERVER COUNTERS
// ==========================

const statsSection =
document.querySelector(
    ".about-stats"
);

const counterObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(
            entry.isIntersecting &&
            !counterStarted
        ){

            startCounters();

            counterStarted =
            true;

        }

    });

},

{
    threshold:.4
}

);

if(statsSection){

    counterObserver.observe(
        statsSection
    );

}

// ==========================
// LOADING EFFECT
// ==========================

window.addEventListener(
    "load",
    ()=>{

        document.body.classList.add(
            "loaded"
        );

    }
);

// ==========================
// CONSOLE
// ==========================

console.log(
    "🚀 Kevin Portfolio Loaded"
);
// ==========================
// SKILLS ANIMATION
// ==========================

const skillsSection =
document.querySelector(".skills");

const skillBars =
document.querySelectorAll(
    ".skill-progress"
);

let skillsStarted = false;

const skillsObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(
            entry.isIntersecting &&
            !skillsStarted
        ){

            skillBars.forEach(bar=>{

                const width =
                bar.style.width;

                bar.style.width = "0";

                setTimeout(()=>{

                    bar.style.width =
                    width;

                },200);

            });

            skillsStarted = true;

        }

    });

},

{
    threshold:.3
}

);

if(skillsSection){

    skillsObserver.observe(
        skillsSection
    );

}

// ==========================
// PROJECTS 3D EFFECT
// ==========================

const cards =
document.querySelectorAll(
    ".project-card"
);

cards.forEach(card=>{

    card.addEventListener(
        "mousemove",
        (e)=>{

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const centerX =
            rect.width / 2;

            const centerY =
            rect.height / 2;

            const rotateX =
            ((y-centerY)/15);

            const rotateY =
            ((centerX-x)/15);

            card.style.transform =

            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            `;

        }
    );

    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        }
    );

});

// ==========================
// BUTTON MAGNETIC EFFECT
// ==========================

const buttons =
document.querySelectorAll(
    ".btn"
);

buttons.forEach(button=>{

    button.addEventListener(
        "mousemove",
        (e)=>{

            const rect =
            button.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const moveX =
            (x - rect.width/2) / 8;

            const moveY =
            (y - rect.height/2) / 8;

            button.style.transform =

            `translate(${moveX}px, ${moveY}px)`;

        }
    );

    button.addEventListener(
        "mouseleave",
        ()=>{

            button.style.transform =
            "translate(0,0)";

        }
    );

});

// ==========================
// FOOTER YEAR
// ==========================

const year =
document.querySelector(
    ".year"
);

if(year){

    year.textContent =
    new Date().getFullYear();

}

// ==========================
// WHATSAPP FLOAT BUTTON
// ==========================

const whatsapp =
document.createElement("a");

whatsapp.href =
"https://wa.me/593959238651";

whatsapp.target =
"_blank";

whatsapp.classList.add(
    "whatsapp-float"
);

whatsapp.innerHTML =
`<i class="fab fa-whatsapp"></i>`;

document.body.appendChild(
    whatsapp
);

// ==========================
// FLOATING PARTICLES
// ==========================

const particlesContainer =
document.querySelector(
    ".particles"
);

function createParticle(){

    const particle =
    document.createElement("span");

    const size =
    Math.random()*8 + 3;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.position =
    "absolute";

    particle.style.borderRadius =
    "50%";

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.bottom =
    "-20px";

    particle.style.background =
    "rgba(0,255,229,.4)";

    particle.style.pointerEvents =
    "none";

    particle.style.boxShadow =
    "0 0 15px #00ffe5";

    particle.style.animation =
    `particleMove ${
        Math.random()*6 + 6
    }s linear forwards`;

    particlesContainer.appendChild(
        particle
    );

    setTimeout(()=>{

        particle.remove();

    },12000);

}

setInterval(
    createParticle,
    400
);

// ==========================
// PARTICLE KEYFRAMES
// ==========================

const particleStyle =
document.createElement("style");

particleStyle.innerHTML =

`
@keyframes particleMove{

    from{

        transform:
        translateY(0);

        opacity:1;

    }

    to{

        transform:
        translateY(-120vh);

        opacity:0;

    }

}
`;

document.head.appendChild(
    particleStyle
);

// ==========================
// IMAGE PARALLAX
// ==========================

window.addEventListener(
    "scroll",
    ()=>{

        const image =
        document.querySelector(
            ".image-box"
        );

        if(image){

            const scroll =
            window.pageYOffset;

            image.style.transform =

            `translateY(${scroll*0.05}px)`;

        }

    }
);

// ==========================
// SMOOTH SECTION HIGHLIGHT
// ==========================

const sections =
document.querySelectorAll(
    "section"
);

const navItems =
document.querySelectorAll(
    ".nav-links a"
);

window.addEventListener(
    "scroll",
    ()=>{

        let current = "";

        sections.forEach(section=>{

            const top =
            section.offsetTop - 150;

            const height =
            section.clientHeight;

            if(
                pageYOffset >= top
            ){

                current =
                section.getAttribute("id");

            }

        });

        navItems.forEach(link=>{

            link.classList.remove(
                "active-link"
            );

            if(
                link.getAttribute("href")
                ===
                `#${current}`
            ){

                link.classList.add(
                    "active-link"
                );

            }

        });

    }
);

// ==========================
// PERFORMANCE
// ==========================

window.addEventListener(
    "resize",
    ()=>{

        navLinks.classList.remove(
            "active"
        );

    }
);

// ==========================
// FINAL MESSAGE
// ==========================

console.log(
`
=================================
Kevin Valente Portfolio
Frontend Developer
Portfolio Loaded Successfully 🚀
=================================
`
);
