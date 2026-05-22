// An element that exists in the browser
const app = document.getElementById("app");

const title = 'My Post';
const content = 'Text goes here';

// METHOD 1: Create a post using documentFragment
const frag = document.createDocumentFragment();

const heading = frag.appendChild(document.createElement("h3"));
heading.textContent = title;
heading.style.margin = "0px";

frag.appendChild(document.createElement("hr"));

const div = frag.appendChild(document.createElement("div"));
div.style.padding = "0px 15px";
div.style.marginBottom = "50px";

div.appendChild(document.createElement("p")).textContent = content;

// This is where the fragment and all its elements (which have only been in memory up until this point)
// is finally added to the page and become actual elements in the browser
app.appendChild(frag);



// METHOD 2: Create a post using the template element and cloneNode
const template = document.querySelector('template');

const clone = template.content.cloneNode(true);

clone.querySelector('h3').textContent = title;
clone.querySelector('p').textContent = content;

// This is where the cloned template (similar to a fragment) appears on the page 
app.appendChild(clone);