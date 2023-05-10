// //Append child
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Append Example</title>
// </head>
// <body>
//   <div id="container">
//     <p>This is the initial content.</p>
//   </div>
  
 // <script>
    // Get a reference to the container element
    const container = document.getElementById("container");

    // Create a new paragraph element
    const newParagraph = document.createElement("p");
    
    // Set the text content of the new paragraph
    newParagraph.textContent = "This is the appended content.";

    // Append the new paragraph to the container element
    container.appendChild(newParagraph);
 // </script>
// </body>
// </html>


  //REMOVE CHILD
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Remove Example</title>
// </head>
// <body>
//   <ul id="list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>
  
//   <script>
    // Get a reference to the list element
    const list = document.getElementById("list");

    // Get a reference to the second list item
    const listItemToRemove = list.children[1];

    // Remove the second list item from the list
    list.removeChild(listItemToRemove);
//   </script>
// </body>
// </html>

//ADD ATTRIBUTE
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Add Attribute Example</title>
// </head>
// <body>
//   <img id="my-image" src="example.jpg">
  
//   <script>
    // Get a reference to the image element
    const myImage = document.getElementById("my-image");

    // Add an "alt" attribute to the image
    myImage.setAttribute("alt", "An example image");

    // Add a "width" attribute to the image
    myImage.setAttribute("width", "500");
  // </script>
// </body>
// </html>

//Remove attribute
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Remove Attribute Example</title>
// </head>
// <body>
//   <a id="my-link" href="https://www.example.com" target="_blank">Example Link</a>
  
//   <script>
    // Get a reference to the link element
    const myLink = document.getElementById("my-link");

    // Remove the "target" attribute from the link
    myLink.removeAttribute("target");
//   </script>
// </body>
// </html>

//ADD CLASSES

// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Add Class Example</title>
//   <style>
//     .my-class {
//       color: blue;
//       font-size: 20px;
//     }
//   </style>
// </head>
// <body>
//   <p id="my-paragraph">Hello, World!</p>
  
//   <script>
    // Get a reference to the paragraph element
    const myParagraph = document.getElementById("my-paragraph");

    // Add the "my-class" class to the paragraph
    myParagraph.classList.add("my-class");
//   </script>
// </body>
// </html>

//Remove classes
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Remove Class Example</title>
//   <style>
//     .my-class {
//       color: blue;
//       font-size: 20px;
//     }
//   </style>
// </head>
// <body>
//   <p id="my-paragraph" class="my-class">Hello, World!</p>
  
//   <script>
    // Get a reference to the paragraph element
    const myParagraph = document.getElementById("my-paragraph");

    // Remove the "my-class" class from the paragraph
    myParagraph.classList.remove("my-class");
//   </script>
// </body>
// </html>

//Apply styles
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Apply Styles Example</title>
// </head>
// <body>
//   <p id="my-paragraph">Hello, World!</p>
  
//   <script>
//     // Get a reference to the paragraph element
    const myParagraph = document.getElementById("my-paragraph");

    // Apply some styles to the paragraph
    myParagraph.style.color = "blue";
    myParagraph.style.fontSize = "20px";
//   </script>
// </body>
// </html>


//remove styles
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Remove Styles Example</title>
//   <style>
//     #my-paragraph {
//       color: blue;
//       font-size: 20px;
//     }
//   </style>
// </head>
// <body>
//   <p id="my-paragraph" style="color: blue; font-size: 20px;">Hello, World!</p>
  
//   <script>
    // Get a reference to the paragraph element
    const myParagraph = document.getElementById("my-paragraph");

    // Remove the "color" and "font-size" styles from the paragraph
    myParagraph.style.removeProperty("color");
    myParagraph.style.removeProperty("font-size");
//   </script>
// </body>
// </html>