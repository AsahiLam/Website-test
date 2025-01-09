window.addEventListener('load', function() {
    var blockElement = document.querySelector('.block');
    
    function updateBlockClass() {
      if (window.innerWidth < 769) {
        blockElement.classList.add('block--vertical');
      } else {
        blockElement.classList.remove('block--vertical');
      }
    }
      updateBlockClass();
  
    window.addEventListener('resize', updateBlockClass);
  });