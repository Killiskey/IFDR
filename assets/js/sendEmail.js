function sendMail(contactForm){
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.name.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("success", response);
        },
        function(error){
            console.log("failed", error);
        }
    )
}