#  ALAB 308A.1.1: DOM Manipulation (Part One)

---

## Project Overview
Welcome to Part One of our DOM Manipulation lab! This project is a foundational exercise in front-end development where we practice interacting with and modifying a webpage using pure, native JavaScript. 

The core mission of this lab was to dynamically style a main container, build a structured navigation menu bar, and populate it with link buttons using a mock data array—all without manually editing our HTML or CSS files.

---

## Core JavaScript Mechanics Learned
While coding this lab, our team focused on mastering three primary concepts:
1. **`document.querySelector()` & `document.getElementById()`** → Safely targeting and caching HTML nodes into JavaScript variables.
2. **`document.createElement()`** → Allocating memory and building new HTML elements entirely inside JavaScript logic.
3. **`appendChild()`** → Inserting those memory-built elements directly into the live webpage tree structure.

---

## Step-by-Step Implementation Breakdown

### Part 1: Initializing the Main Stage
First, we targeted the primary canvas area of the page to apply core branding layouts:
* **Element Selection:** We grabbed the `<main>` tag using `document.querySelector("main")` and stored it in `mainEl`.
* **CSS Variable Integration:** Instead of hardcoding static colors, we assigned the background color using the modern CSS variable format: `'var(--main-bg)'`.
* **Content Injection:** We updated the inner HTML of the container to instantly house our primary header: `<h1>DOM Manipulation</h1>`.
* **Layout Classes:** We applied the utility class `.flex-ctr` via the `classList.add()` API to cleanly center our contents on the screen.

### Part 2: Structuring the Navigation Menu Bar
Next, we initialized a placeholder navigation bar to house future interactive buttons:
* **Targeting by ID:** We selected the navigation element using its unique identity tag `document.getElementById("top-menu")` and cached it inside `topmenuEl`.
* **Sizing & Coloring:** We expanded its vertical layout height property to `100%` and applied its specific branding color background using the CSS custom property `var(--top-menu-bg)`.
* **Spacing Alignment:** We attached the `.flex-around` class to ensure all menu links would distribute evenly across the bar automatically.

### Part 3: Dynamically Generating Menu Buttons from Data
In real-world software engineering, UI elements are rarely hardcoded—they are built from raw data structures. We took an array of link data objects called `menuLinks`:

javascript
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];