let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListner("click", () => {
        const choiceId = choice.getAttribute("id")
        console.log("choice was clicked", choiceId);

    })
})