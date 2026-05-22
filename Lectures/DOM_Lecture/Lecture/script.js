// console.dir(document);

// select the third paragraph using its id
let paragraph = document.getElementById('paragraph-3');

// changing the text inside the paragraph (reflected in our HTML output)
paragraph.textContent = "Special Paragraph";

console.dir(paragraph.textContent);

// select all elements with a name attribute
let elementsWithNameTest = document.getElementsByName('test');

// changing the value inside the first input (at index 0)
elementsWithNameTest[0].value = "Hello!"

console.log(elementsWithNameTest[0].value)

// select the first p tag
let firstPara = document.querySelector('p');

// select the second p tag
let secondPara = firstPara.nextElementSibling

console.log(firstPara);

// select all p tags (returns a nodelist)
let allPara = document.querySelectorAll('p');

console.log(allPara);

// select all li tags (returns a collection)
let liTags = document.getElementsByTagName('li');

console.log(liTags)

// iterating over our array of list items and changing the color of each
for (let li of liTags) {
    console.log(li.textContent);
    // changes the text color of the list items
    li.style.color = li.textContent
    li.style.fontSize = "50pt";
}

// turn a collection or nodelist into a regular array
let liTags2 = Array.from(liTags);

// create a new element in memory (li tag)
let liTag = document.createElement("li");
liTag.textContent = 'Purple';
liTag.style.color = liTag.textContent;
liTag.style.fontSize = "50pt";

// select a ul tag (the first and only one)
let ulTag = document.querySelector("ul");

// add this new li tag to the ul 
ulTag.appendChild(liTag);

// prepend (adds to the beginning of the ul)

// for (let i = 0; i < 100; i++) {
//     document.createElement("li");
// }

// reset everything as a string version of HTML
document.body.innerHTML = `
<h1 style='color: red;'>
    Hello World
</h1>
`

// create an anchor element
let a = document.createElement('a');

// give it some text
a.textContent = "Pokemon";

// give it an href attribute (if it doesn't have it)
if (a.hasAttribute("href")) {
    console.log('Already has a link!')
} else {
    console.log('Does not have a link');
    // set the href attribute
    a.setAttribute("href", "http://pokemon.com")
    // add a header class to anchor
    console.log(a.classList)
    a.classList.toggle("header");
    console.log(a.classList)
    // whoops... doesn't look good. remove instead
    a.classList.toggle("header")
    console.log(a.classList)
}

// select the h1
let h1 = document.querySelector('h1');

// give our h1 a class
h1.classList.add("header")

document.body.appendChild(a);

