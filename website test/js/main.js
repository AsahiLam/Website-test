window.addEventListener("load", function () {
  const blockItems = document.querySelectorAll(".block__item");

  blockItems.forEach((item) => {
    const readingTime = item.querySelector(
      ".block__image-area__meta-reading-time"
    );

    if (readingTime) {
      item.addEventListener("mouseenter", () => {
        readingTime.style.opacity = "1";
        readingTime.style.pointerEvents = "auto";
      });

      item.addEventListener("mouseleave", () => {
        readingTime.style.opacity = "0";
        readingTime.style.pointerEvents = "none";
      });
    }
  });

  const block = document.querySelectorAll(".block");

  blockItems.forEach((item) => {
    const readingTime = item.querySelector(
      ".block__image-area__meta-reading-time"
    );

    if (readingTime) {
      item.addEventListener("mouseenter", () => {
        readingTime.style.opacity = "1";
        readingTime.style.pointerEvents = "auto";
      });

      item.addEventListener("mouseleave", () => {
        readingTime.style.opacity = "0";
        readingTime.style.pointerEvents = "none";
      });
    }
  });
});
