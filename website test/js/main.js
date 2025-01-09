window.addEventListener("load", function () {
  var blockElement = document.querySelector(".block");

  function updateBlockClass() {
    if (window.innerWidth < 769) {
      blockElement.classList.add("block--vertical");
    } else {
      blockElement.classList.remove("block--vertical");
    }
  }
  updateBlockClass();

  window.addEventListener("resize", updateBlockClass);
});

window.onload = function () {
  const blockItems = document.querySelectorAll(".block__item");

  blockItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const readingTime = item.querySelector(
        ".block__image-area__meta-reading-time"
      );
      if (readingTime) {
        readingTime.style.opacity = "1";
        readingTime.style.pointerEvents = "auto";
      }
    });

    item.addEventListener("mouseleave", () => {
      const readingTime = item.querySelector(
        ".block__image-area__meta-reading-time"
      );
      if (readingTime) {
        readingTime.style.opacity = "0";
        readingTime.style.pointerEvents = "none";
      }
    });
  });
};
