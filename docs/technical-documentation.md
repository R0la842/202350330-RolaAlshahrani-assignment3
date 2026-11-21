# Technical Documentation

## 1. Project Overview

My Portfolio is an interactive personal website developed using HTML, CSS, and JavaScript.

The website introduces the developer, showcases academic projects, and provides interactive features for visitors.

## 2. Technologies Used

- **HTML:** Defines the website structure and content.
- **CSS:** Handles styling, layout, and responsiveness.
- **JavaScript:** Implements interactive features and application logic.
- **Quotes API:** Retrieves inspirational quotes.
- **localStorage:** Stores visitor names and theme preferences.

## 3. Project Structure

```text
project/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── Daleel.jpg
│   └── FileSystem.jpg
├── docs/
│   ├── technical-documentation.md
│   └── ai-usage-report.md
└── README.md
```

## 4. Functional Implementation

### 4.1 Navigation

JavaScript controls navigation between the About Me, Projects, and Contact sections.

The `showSection()` function updates the active section without reloading the page.

### 4.2 API Integration

The website uses an external Quotes API to retrieve inspirational quotes.

The `fetchQuote()` function:

1. Sends a request using `fetch()`.
2. Checks whether the response is successful.
3. Converts the response into JSON.
4. Displays the quote and its author.
5. Shows a user-friendly error message if the request fails.

### 4.3 Project Search and Sorting

Visitors can search for projects by name and sort them alphabetically.

- Search uses `includes()` to match project names.
- Sorting uses `sort()` and `localeCompare()`.
- A message appears when no matching projects are found.

### 4.4 Contact Form Validation

The contact form collects a visitor's name, email, and message.

JavaScript validates:

- Required fields are not empty.
- The email follows a valid format.
- Feedback is displayed after validation.

The form demonstrates client-side validation and does not send messages to a backend server.

### 4.5 Visit Timer

The website uses `setInterval()` to update a timer every second.

Elapsed time is displayed in minutes and seconds.

### 4.6 Coding Level Selector

Visitors can select Beginner or Advanced.

JavaScript displays a different welcome message based on the selected level.

### 4.7 Dark Mode

Visitors can switch between light and dark themes.

JavaScript adds or removes the `dark-mode` class from the page.

The selected theme is stored using `localStorage` and restored when the page reloads.

### 4.8 Visitor Name

Visitors can enter and save their names.

The name is stored using `localStorage` and displayed in a personalized welcome message.

## 5. State Management

The website uses browser localStorage to maintain persistent information.

| Key | Purpose |
|---|---|
| `theme` | Stores the selected light or dark theme |
| `visitorName` | Stores the visitor's name |

These values are retrieved when the website loads.

## 6. Performance Optimization

The website includes several performance improvements:

- Lazy loading for project images.
- Asynchronous image decoding.
- Organized CSS and JavaScript.
- Removal of unused and repeated code.
- Responsive layouts for different screen sizes.

### Lighthouse Results

| Category | Score |
|---|---|
| Performance | 100 |
| Accessibility | 94 |
| Best Practices | 96 |
| SEO | 90 |

## 7. Testing

The following features were tested manually:

- Navigation between portfolio sections.
- Fetching and refreshing inspirational quotes.
- Handling API failures.
- Searching and sorting projects.
- Contact form validation.
- Visit timer updates.
- Beginner and Advanced messages.
- Switching between light and dark themes.
- Restoring saved theme and visitor name.
- Displaying project images.

Google Lighthouse was also used to evaluate website performance, accessibility, best practices, and SEO.

## 8. Limitations

- The contact form does not connect to a backend service.
- Inspirational quotes require an internet connection.
- Visitor preferences are stored locally in the browser.


## 9. AI Assistance

ChatGPT (GPT-6) was used for implementation guidance, debugging, code review, performance optimization, and documentation.

Detailed AI usage records are available in [AI Usage Report](ai-usage-report.md).
