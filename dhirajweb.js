// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Contact Form
//document.querySelector("form").addEventListener("submit", function(e){
  //  e.preventDefault();
//
  //  alert("Thank You! Your message has been received.");
//
  //  this.reset();
//});
const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    })
    .catch(error => {
        alert("Error!");
        console.error(error);
    });
});