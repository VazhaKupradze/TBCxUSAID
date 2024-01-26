//accordion 

const accHeaders = document.querySelectorAll(".accHeader");

accHeaders.forEach((headerAcc) => {
  headerAcc.addEventListener("click", (event) => {
    headerAcc.classList.toggle("active");
    const contentAcc = headerAcc.nextElementSibling;
    if (headerAcc.classList.contains("active")) {
      contentAcc.style.maxHeight = contentAcc.scrollHeight + "px";
    } else {
      contentAcc.style.maxHeight = 0;
    }
  });
});
