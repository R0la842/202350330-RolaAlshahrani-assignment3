// Interactive Greeting
const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour < 12) {
    greeting.textContent = "Good morning";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon";
} else {
    greeting.textContent = "Good evening";
}


// Section Navigation
const sectionButtons = document.querySelectorAll(".section-nav button");
const portfolioSections = document.querySelectorAll(".portfolio-section");

function showSection(sectionId) {
    portfolioSections.forEach(section => {
        section.classList.toggle("active", section.id === sectionId);
    });
}

sectionButtons.forEach(button => {
    button.addEventListener("click", () => {
        showSection(button.dataset.section);
    });
});

showSection("about");


// Project Search
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const projects = document.querySelectorAll(".project");
const noResults = document.getElementById("noResults");

function searchProjects() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let found = 0;

    projects.forEach(project => {
        const projectName = project.querySelector("h3").textContent.toLowerCase();
        const matches = projectName.includes(searchTerm);

        project.style.display = matches ? "" : "none";

        if (matches) {
            found++;
        }
    });

    noResults.hidden = found !== 0;
}

searchButton.addEventListener("click", searchProjects);

searchInput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        searchProjects();
    }
});


// Project Sorting
const sortProjects = document.getElementById("sortProjects");
const projectContainer = document.querySelector(".project-grid");
const originalProjects = Array.from(projectContainer.children);

sortProjects.addEventListener("change", () => {
    const sortedProjects = [...originalProjects];

    if (sortProjects.value === "az") {
        sortedProjects.sort((a, b) =>
            a.querySelector("h3").textContent.localeCompare(
                b.querySelector("h3").textContent
            )
        );
    } else if (sortProjects.value === "za") {
        sortedProjects.sort((a, b) =>
            b.querySelector("h3").textContent.localeCompare(
                a.querySelector("h3").textContent
            )
        );
    }

    sortedProjects.forEach(project => {
        projectContainer.appendChild(project);
    });
});


// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", event => {
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

    if (!message) {
        missingFields.push("Message");
    }

    if (missingFields.length > 0) {
        formFeedback.textContent =
            "Please fill in the following required fields: " +
            missingFields.join(", ") + ".";

        formFeedback.style.color = "red";
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.style.color = "red";
        return;
    }

    formFeedback.textContent =
        `Thank you for your message, ${name}! We will get back to you at ${email}.`;

    formFeedback.style.color = "green";
    contactForm.reset();
});


// External Quotes API
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteButton = document.getElementById("newQuoteButton");

async function fetchQuote() {
    quoteText.textContent = '"Loading quote..."';
    quoteAuthor.textContent = "";

    try {
        const response = await fetch(
            "https://api.quotable.kurokeita.dev/api/quotes/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteText.textContent = `"${data.quote.content}"`;
        quoteAuthor.textContent = `- ${data.quote.author.name}`;

    } catch (error) {
        quoteText.textContent = "Unable to load a quote. Please try again.";
        quoteAuthor.textContent = "";
        console.error("Quote API error:", error);
    }
}

newQuoteButton.addEventListener("click", fetchQuote);
fetchQuote();


// Visitor Timer
const visitTimer = document.getElementById("visitTimer");
let secondsOnSite = 0;

setInterval(() => {
    secondsOnSite++;

    const minutes = Math.floor(secondsOnSite / 60);
    const seconds = secondsOnSite % 60;

    visitTimer.textContent =
        `Time on Site: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}, 1000);


// Personalized Level Messages
const levelMessage = document.getElementById("levelMessage");
const beginnerBtn = document.getElementById("beginnerBtn");
const advancedBtn = document.getElementById("advancedBtn");

beginnerBtn.addEventListener("click", () => {
    levelMessage.textContent =
        "Welcome, Beginner! Explore my projects and start your coding journey!";
});

advancedBtn.addEventListener("click", () => {
    levelMessage.textContent =
        "Welcome, Advanced Developer! Explore my projects and discover more complex ideas!";
});


// Dark / Light Mode
const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark
        ? "Light Mode"
        : "Dark Mode";
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeToggle) {
    updateThemeButton();

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        updateThemeButton();
    });
}


// Visitor Name Storage
const visitorName = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

const savedName = localStorage.getItem("visitorName");

if (savedName) {
    visitorName.value = savedName;
    welcomeMessage.textContent = `Welcome back, ${savedName}!`;
}

saveNameBtn.addEventListener("click", () => {
    const name = visitorName.value.trim();

    if (name) {
        localStorage.setItem("visitorName", name);
        welcomeMessage.textContent = `Welcome, ${name}!`;
    } else {
        welcomeMessage.textContent = "Please enter your name.";
    }
});
