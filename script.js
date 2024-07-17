let boxes = document.querySelectorAll(".box");
let body1 = document.querySelector("body");
boxes.forEach((boxes) => {
  boxes.addEventListener("click", (e) => {
     if (boxes.id === boxes.id) {
      body1.style.backgroundColor = `${boxes.id}`;
      

    }
  });
});
