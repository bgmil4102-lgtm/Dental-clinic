/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

    document.body.classList.add("menu-open");

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });


/* =========================
   NAVBAR SCROLL
========================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.07)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   APPOINTMENT FORM
========================= */

const appointmentForm =
    document.getElementById(
        "appointmentForm"
    );


appointmentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const date =
            document.getElementById("date").value;

        const treatment =
            document.getElementById("treatment").value;

        const message =
            document.getElementById("message").value;


        if (
            !name ||
            !phone ||
            !date ||
            !treatment
        ) {

            alert(
                "Please fill in all required fields."
            );

            return;

        }


        /*
            CHANGE THIS NUMBER TO THE
            CLINIC'S REAL WHATSAPP NUMBER.

            Format:
            Country code + number
            without + or spaces.

            Example:
            919876543210
        */

        const whatsappNumber =
            "919876543210";


        const whatsappMessage =
            `Hello SmileCare,

I would like to book a dental appointment.

Name: ${name}
Phone: ${phone}
Preferred Date: ${date}
Treatment: ${treatment}

Message:
${message || "No additional message."}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        window.open(
            whatsappURL,
            "_blank"
        );


        appointmentForm.reset();

    }
);


/* =========================
   DATE VALIDATION
========================= */

const dateInput =
    document.getElementById("date");


const today =
    new Date().toISOString().split("T")[0];


dateInput.setAttribute(
    "min",
    today
);


/* =========================
   SERVICE BUTTONS
========================= */

document
    .querySelectorAll(".service-card a")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                document
                    .getElementById("appointment")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });