var typed = new Typed(".text", {
  strings: ["UI/UX Designer", ".NET Developer" , "MERN Developer" , "Laravel Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
  
 
});
document.querySelector('.text').style.color = 'cyan'; 

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.navbar a');

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const topLink = document.querySelector('.top');

  topLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const imgContainers = document.querySelectorAll('.img-container');

  imgContainers.forEach(container => {
      container.addEventListener('click', function () {
          // Remove 'clicked' class from all containers
          imgContainers.forEach(c => c.classList.remove('clicked'));
          // Add 'clicked' class to the clicked container
          this.classList.add('clicked');
      });

      // Optionally, you can hide the description on a second click
      container.addEventListener('click', function () {
          if (this.classList.contains('clicked')) {
              this.classList.remove('clicked');
          } else {
              imgContainers.forEach(c => c.classList.remove('clicked'));
              this.classList.add('clicked');
          }
      });
  });
});

