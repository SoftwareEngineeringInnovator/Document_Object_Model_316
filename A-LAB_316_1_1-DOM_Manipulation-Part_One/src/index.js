/* Team Memebers 
Monawwar Siddique
Mikal El-Amin
Rakesh Kumar
Santhi
*/

// Key idea to remember
// createElement() → builds elements in memory
// appendChild() → places them inside other elements
// document.body.appendChild() → puts them on the page

// Part 1: Getting Started

// 1.1 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
// 1.2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//  Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';
// 1.3 Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//  1.4. Add a class of flex-ctr to mainEl.
//  Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");
// Progress Check - Here is what the page should look like so far:

// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
const topMenuEl = document.getElementById("top-menu");
// 2.1 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

// 2.2 Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// 2.3 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var( --top-menu-bg)"
//  2.4 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Progress Check - Here's what the page should look like so far:

// Part 3: Adding Menu Buttons

// Very often, you will be working with data provided by external sources in a variety of ways. For this project, copy the following data structure to the top of your index.js file; you will use it to create your menu buttons.

// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// If this data was provided by an external source, it would allow that source to control how our menu is built. We would simply implement the logic, and allow the data to decide what displays. This is not typically done with menus, but it can be done with any DOM element.

// To continue:

// 3.1 Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(function (link) {

    // 3.2 Create an <a> element.
    const a = document.createElement("a");

    // 3.3 On the new element, add an href attribute with its value set to the href property of the "link" object.
    a.setAttribute("href", link.href);

    // 3.4 Set the new element's content to the value of the text property of the "link" object.
    a.textContent = link.text;

    // 3.5 Append the new element to the topMenuEl element.
    topMenuEl.appendChild(a);
});
// Progress Check - Here's what the page should look like so far: