document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       DESIGN PROJECT MODAL
    ========================================= */

    const designModal = document.getElementById("designModal");
    const openButton = document.querySelector(".modal-open");
    const closeButton = document.querySelector(".modal-close");
    const overlay = document.querySelector(".modal-overlay");

    if (designModal && openButton && closeButton && overlay) {

        const openModal = () => {
            designModal.classList.add("active");
            document.body.classList.add("modal-open");
        };

        const closeModal = () => {
            designModal.classList.remove("active");
            document.body.classList.remove("modal-open");
        };

        openButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .work-card, .service-card, .about-container, .contact-inner"
    );

    revealElements.forEach((element) => {

        if (element.classList.contains("work-card") ||
            element.classList.contains("service-card")) {

            element.classList.add("reveal-card");

        } else {

            element.classList.add("reveal");

        }

    });


    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

});