// Challenge 2: Write your answers here

// Create a new element
let newSection = document.createElement("newSection");
// Add some HTML to that new element
newSection.innerHTML = `
<h2>What do I think of JS</h2>
<p>It's cool</p>
`
// Append that new element to the page's body so it's actually visible
document.body.appendChild(newSection)

let skillNode = document.createElement("LI");
let skillText = document.createTextNode("Project Management");
skillNode.appendChild(skillText);
document.getElementById("skills-list").appendChild(skillNode);

let Node = document.createElement("LI");
let skillText = document.createTextNode("Project Management");
skillNode.appendChild(skillText);
document.getElementById("skills-list").appendChild(skillNode);

