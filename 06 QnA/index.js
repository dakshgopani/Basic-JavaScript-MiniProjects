const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  // console.log(e);
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (e) {
        if(e !== question)
        {
            e.classList.remove("show-text");
        }
    });

    question.classList.toggle("show-text");
  });
});
