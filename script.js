let accordion = document.getElementById("headerAcc");
let content = document.getElementById("content");

accordion.addEventListener("click", function () {
  content.classList.toggle("accActive");
});
