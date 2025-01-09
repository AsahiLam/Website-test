window.addEventListener("load", function () {
  // Select all blocks
  var blockElements = document.querySelectorAll(".block");

  function handleMouseOver(event) {
    if (window.innerWidth < 769) {
      event.target.classList.add("block--vertical");
    }
  }

  function handleMouseOut(event) {
    if (window.innerWidth < 769) {
      event.target.classList.remove("block--vertical");
    }
  }

  // Attach event listeners to each block
  blockElements.forEach(function (block) {
    block.addEventListener("mouseover", handleMouseOver);
    block.addEventListener("mouseout", handleMouseOut);
  });

  // Update class on resize
  window.addEventListener("resize", function () {
    blockElements.forEach(function (block) {
      if (window.innerWidth >= 769) {
        block.classList.remove("block--vertical");
      }
    });
  });
});
