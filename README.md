# Mapping_js_task16
# Student Records Card Viewer

A simple web page that shows student records as cards and lets you search for students by name in real time.

## Features

- Displays 25 student records in a responsive 3-column card layout
- Each card shows the student's **Name**, **Marks**, **Class** and **Address**
- Search box that filters students by name as you type
- Search button that triggers the same filter
- Shows a "No students found" message when nothing matches
- Layout switches to a single column on small screens

## Project Structure

```
├── index.html   # Page structure and styling
├── script.js    # Student data, rendering and search logic
└── README.md    # Project documentation
```

## How It Works

1. **Data:** `script.js` stores the students in an array of objects. Each object has `name`, `marks`, `class` and `address`.
2. **Rendering:** The `renderStudents()` function uses the JavaScript `map()` function to turn each student object into an HTML card.
3. **Searching:** The `searchStudents()` function uses the `filter()` function to keep only the students whose name contains the typed text. The search ignores upper and lower case.
4. **Real-time updates:** An `input` event listener on the search box re-runs the search on every keystroke, so the cards update immediately.

## How to Run

1. Download or clone this project.
2. Keep `index.html` and `script.js` in the same folder.
3. Open `index.html` in any web browser.

No installation or build step is needed.

## Technologies Used

- HTML5
- CSS3 (Grid and Flexbox)
- JavaScript (ES6): `map()`, `filter()`, template literals, event listeners

## Sample Search

| Search text | Result |
|-------------|--------|
| `priya`     | Priya Singh |
| `kumar`     | Manoj Kumar |
| `xyz`       | No students found |

## Possible Improvements

- Filter by class or marks range
- Sort students by marks
- Load student data from a JSON file or an API
