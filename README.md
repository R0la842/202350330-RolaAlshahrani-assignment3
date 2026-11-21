# My Portfolio — Assignment 3

## Table of Contents

1. [Project Description](#1-project-description)
2. [Features](#2-features)
3. [Technologies Used](#3-technologies-used)
4. [Prerequisites](#4-prerequisites)
5. [Project Structure](#5-project-structure)
6. [How to Run Locally](#6-how-to-run-locally)
7. [Testing and Error Handling](#7-testing-and-error-handling)
8. [Technical Documentation](#9-technical-documentation)
9. [AI Usage](#10-ai-usage)

---

## 1. Project Description

This is an interactive personal portfolio website developed using HTML, CSS, and JavaScript. It showcases my background as a Computer Science student, highlights my academic projects, and provides interactive features that improve usability and visitor experience.

The website consists of three main sections: About Me, Projects, and Contact.

## 2. Features

- **About Me:** Introduces the developer and includes a personal introduction.
- **Section Navigation:** Allows visitors to switch between About Me, Projects, and Contact without reloading the page.
- **API Integration:** Fetches inspirational quotes from an external Quotes API and displays the quote and author.
- **Project Search:** Allows visitors to search for projects by name.
- **Project Sorting:** Sorts projects alphabetically in ascending or descending order.
- **Contact Form:** Collects the visitor's name, email address, and message.
- **Form Validation:** Checks required fields and validates email format before displaying feedback.
- **User Feedback:** Displays error messages or a confirmation message based on form validation.
- **Interactive Greeting:** Displays a greeting based on the current time of day.
- **Visit Timer:** Tracks how long a visitor has spent on the website.
- **Coding Level Selector:** Displays personalized messages for Beginner and Advanced visitors.
- **Dark Mode:** Allows visitors to switch between light and dark themes.
- **Visitor Name:** Saves and displays a personalized welcome message.
- **State Management:** Uses localStorage to remember the visitor's name and theme preference.
- **Hover Effects and Transitions:** Provides visual feedback when interacting with buttons and project cards.
- **Responsive Layout:** Adjusts the website layout for different screen sizes.

## 3. Technologies Used

- **HTML:** Defines the website structure, content, navigation, forms, and interactive elements.
- **CSS:** Controls styling, responsive design, dark mode, hover effects, and transitions.
- **JavaScript:** Implements navigation, API requests, search, sorting, validation, timers, and state management.
- **Quotes API:** Provides inspirational quotes dynamically.
- **localStorage:** Stores visitor names and theme preferences.
- **Google Lighthouse:** Evaluates performance, accessibility, best practices, and SEO.

## 4. Prerequisites

- A modern web browser such as Google Chrome, Microsoft Edge, Firefox, or Safari.
- Visual Studio Code (recommended).
- The project files downloaded or cloned from GitHub.
- The Live Server extension for Visual Studio Code (recommended).
- An internet connection for fetching inspirational quotes.

## 5. Project Structure

| File or Folder | Description |
|---|---|
| `index.html` | Contains the website structure, portfolio sections, navigation, and contact form. |
| `css/styles.css` | Contains styling, responsive layouts, hover effects, and dark mode. |
| `js/script.js` | Implements JavaScript functionality, API integration, validation, sorting, and state management. |
| `assets/` | Stores the project images. |
| `assets/Daleel.jpg` | Image representing the Daleel KFUPM project. |
| `assets/FileSystem.jpg` | Image representing the File System Simulation project. |
| `docs/technical-documentation.md` | Provides detailed technical information about the implementation. |
| `docs/ai-usage-report.md` | Documents AI assistance, benefits, challenges, and usage logs. |
| `README.md` | Provides the project overview, features, setup instructions, and testing information. |

## 6. How to Run Locally

1. Download or clone the repository from GitHub.
2. Open the project folder in Visual Studio Code.
3. Make sure `index.html`, `css/styles.css`, `js/script.js`, and the `assets` and `docs` folders are in their correct locations.
4. Right-click `index.html` and select **Open with Live Server**.
5. The portfolio website will open in your browser.
6. Explore the website and test its interactive features.

No additional packages or dependencies are required because the website uses HTML, CSS, and JavaScript.

## 7. Testing and Error Handling

The following features can be tested manually:

- **Section Navigation:** Click each navigation button and verify that the corresponding section appears.
- **Quotes API:** Verify that an inspirational quote and author are displayed.
- **API Error Handling:** Check that a user-friendly error message appears if the API request fails.
- **Project Search:** Search for an existing project and verify that the matching result appears.
- **Empty Search Results:** Enter a keyword that does not match any project and verify that the no-results message appears.
- **Project Sorting:** Select A to Z or Z to A and verify that project order changes.
- **Empty Form Fields:** Submit the contact form with missing fields and verify that an error message appears.
- **Invalid Email:** Enter an invalid email address and verify that validation prevents submission.
- **Successful Form Validation:** Enter valid information and verify that a confirmation message appears.
- **Visit Timer:** Verify that the timer updates every second.
- **Coding Level Selector:** Select Beginner or Advanced and verify that the appropriate message appears.
- **Dark Mode:** Switch between light and dark themes and verify that the appearance changes.
- **Theme Persistence:** Refresh the page and verify that the selected theme is restored.
- **Visitor Name:** Save a name, refresh the page, and verify that the welcome message is restored.
- **Hover Effects:** Move the pointer over buttons and project cards to verify the transitions.
- **Responsive Layout:** Resize the browser window and check that the layout adjusts.

These checks help verify that the interactive features behave as expected and provide appropriate feedback to visitors.


## 8. Technical Documentation

Detailed technical information about the website is available in [Technical Documentation](docs/technical-documentation.md).

This document explains the project structure, HTML sections, CSS styling, JavaScript functionality, API integration, state management, performance optimization, and testing.

## 9. AI Usage

ChatGPT (GPT-6) was used during this assignment to support problem-solving, debugging, code review, performance optimization, and documentation.

AI assistance included selecting and integrating an external Quotes API, debugging API responses, implementing project filtering and sorting, developing a visit timer, creating conditional messages, implementing Dark Mode and localStorage, troubleshooting GitHub synchronization, and reviewing Lighthouse results.

AI-generated suggestions were reviewed, modified, and tested to ensure they worked correctly with the project requirements.

Detailed information about AI usage, including usage logs C01–C10, benefits, challenges, learning outcomes, and responsible modifications, is available in [AI Usage Report](docs/ai-usage-report.md).
