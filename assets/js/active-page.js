document.addEventListener("DOMContentLoaded", () => {
    // Wait for the navbar or other dynamic elements
    const checkExist = setInterval(() => {
        if (document.querySelector(".nav")) { // Replace with the actual element you need
            console.log("Navbar detected, running script...");
            clearInterval(checkExist); // Stop checking
            // Get the current page path
            const currentPage = window.location.pathname.split("/").pop();

            // Get all nav links
            document.querySelectorAll(".nav-link").forEach(link => {
                // Compare link href to current page (accounting for index)
                if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
                    link.classList.add("active");
                }
            });
        }
    }, 50); // Check every 50ms
});





