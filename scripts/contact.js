// when the "submit-button" is clicked, 
//the contents of the contact-page are replaced with a single <p> element that reads
// "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that 
//element's .style.fontSize, or by updating its .classList.
const cont = document.getElementById("contact-page");
const newP = document.createElement("p");
newP.innerHTML = "Thank you for your message!";
newP.style.fontSize = '24px';
newP.style.textAlign = 'center';
newP.style.height = '420px';
document.getElementById("submit-button").addEventListener('click',function(e){
    cont.replaceWith(newP)
})