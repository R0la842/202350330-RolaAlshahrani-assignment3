// Display a greeting based on the time of day
const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour < 12) {
    greeting.textContent = "Good morning";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon";
} else {
    greeting.textContent = "Good evening";
}


// Search projects by name
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const projects = document.querySelectorAll(".project");
const noResults = document.getElementById("noResults");

function searchProjects() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let found = 0;

    projects.forEach(project => {
        const projectName = project.querySelector("h3").textContent.toLowerCase();

        if (projectName.includes(searchTerm)) {
            project.style.display = "";
            found++;
        } else {
            project.style.display = "none";
        }
    });

    noResults.hidden = found !== 0;
}

searchButton.addEventListener("click", searchProjects);

searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchProjects();
    }
});


// Switch between portfolio sections
const sectionButtons = document.querySelectorAll(".section-nav button");
const portfolioSections = document.querySelectorAll(".portfolio-section");

function showSection(sectionId) {
    portfolioSections.forEach(section => {
        section.classList.toggle("active", section.id === sectionId);
    });
}

sectionButtons.forEach(button => {
    button.addEventListener("click", function () {
        showSection(button.dataset.section);
    });
});

// Show About Me when the page first loads
showSection("about");

// Handle contact form submission
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const missingFields = [];
    if (!name) {
        missingFields.push("Name");
    }
    if (!email) {
        missingFields.push("Email");
    }
    else if (!/^\S+@\S+\.\S+$/.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.style.color = "red";
        return;
    }


    if (!message) {
        missingFields.push("Message");
    }
    if (missingFields.length > 0) {
        formFeedback.textContent = "Please fill in the following required fields: " + missingFields.join(", ") + ".";
        formFeedback.style.color = "red";
        return;
    }
    formFeedback.textContent = "Thank you for your message, " + name + "! We will get back to you at " + email + ".";
    formFeedback.style.color = "green";
    contactForm.reset();
});
// Fetch an inspirational quote from an external API
async function fetchQuote() {
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");

    quoteText.textContent = '"Loading quote..."';
    quoteAuthor.textContent = "";

    try {
        const response = await fetch("https://api.quotable.kurokeita.dev/api/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        console.log("Quotable API Response:", data);
        quoteText.textContent = `"${data.quote.content}"`;
        quoteAuthor.textContent = `- ${data.quote.author.name}`;

    } catch (error) {
        quoteText.textContent = "Unable to load a quote. Please try again.";
        console.error("Quote API error:", error);
    }
}

// Fetch a quote when the button is clicked
document.getElementById("newQuoteButton")
    .addEventListener("click", fetchQuote);

// Fetch the first quote when the page loads
fetchQuote();
const sortProjects = document.getElementById("sortProjects");

sortProjects.addEventListener("change", function () {
    const container = document.querySelector(".project-grid");
    const projects = Array.from(container.children);

    projects.sort((a, b) => {
        const nameA = a.querySelector("h3").textContent;
        const nameB = b.querySelector("h3").textContent;

        if (sortProjects.value === "az") {
            return nameA.localeCompare(nameB);
        } else if (sortProjects.value === "za") {
            return nameB.localeCompare(nameA);
        }
        return 0;
    });

    projects.forEach(project => container.appendChild(project));
});
let secondsOnSite = 0;

setInterval(() => {
    secondsOnSite++;

    const minutes = Math.floor(secondsOnSite / 60);
    const seconds = secondsOnSite % 60;

    document.getElementById("visitTimer").textContent =
        `⏱️ Time on Site: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}, 1000);