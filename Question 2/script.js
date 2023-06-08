window.addEventListener("load", function() {
    animateBars();
  });
  
  function animateBars() {
    const bars = document.querySelectorAll(".bar");
    bars.forEach(function(bar) {
      const percentage = bar.style.getPropertyValue("--percentage");
      bar.style.height = percentage;
    });
  }
  