// Challenge 1: Write your answers here

// Change the background color
document.body.style.backgroundColor = "blue"

// Change the header section's background image
header = document.querySelector('header')
header.style = "background-image: url('https://image.shutterstock.com/image-vector/cartoon-ninja-drawing-chibi-manga-260nw-692332066.jpg')"

// Change the color of all H2 headings. First select all to get an array, then 
// loop over each item in the array
head2 = document.querySelectorAll('h2')

for (let i = 0; i < head2.length; i++) {
	head2[i].style = "color: Purple";
}

// Change the profile name
document.getElementById('name').textContent = "Andrew Attard"

// Get all elements with a class of 'descriptions'
descriptions = document.getElementsByClassName('descriptions')

// Then modify the first element in the 'node list' (which is similar to an array)
descriptions[0].textContent = "New description for the first paragraph"
// Then the second element
descriptions[1].textContent = "New description for the second paragraph!!!!!!!"

document.getElementById('skills-list').innerHTML = "<li>Salesforce</li><li>Business Analysis</li>"
document.getElementById('education-list').innerHTML = "<ol><li>NEXT Academy</li><li>Ryerson</li></ol>"
document.getElementById('employment-table').innerHTML = `
<table id="employment-table">
<tr>
  <td>Business Analyst</td>
  <td>Mackenzie</td>
  <td>2018 - 2020</td>
</tr>

<tr>
  <td>Systems Analyst</td>
  <td>Judo Payments</td>
  <td>2016-2018</td>
</tr>
</table>
`