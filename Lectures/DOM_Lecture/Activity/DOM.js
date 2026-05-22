// Key idea to remember
// createElement() → builds elements in memory
// appendChild() → places them inside other elements
// document.body.appendChild() → puts them on the page

//creating div elements, 
const div1 = document.createElement("div");
const  div2 = document.createElement("div");

//creating an ol and ul element
const ol = document.createElement("ol");
const ul = document.createElement("ul");

//append 3 li elements to the ol
for(let i =0; i<3; i++){
    const li = document.createElement("li")
    ol.appendChild(li)
}
div1.appendChild(ol)

//append 3 li elements to the ul
div2.appendChild(ul)
for(let i =0; i<3; i++){
    const li = document.createElement("li")
    ul.appendChild(li)
}


//add the div elements, with their appended child elements to the actual page
document.body.appendChild(div1);
document.body.appendChild(div2);