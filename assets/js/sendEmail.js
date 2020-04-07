function sendMail(contactForm) {
    emailjs.send("gmail", "africa", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.informationsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent successfully");
            document.getElementById('id01').reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message was not sent");
            document.getElementById('id01').reset();
        }
    );
    return false;  // To block from loading a new page
}

