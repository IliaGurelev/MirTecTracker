let hamburgerbtn = document.querySelector(".minimenu");
let nav_list = document.querySelector(".navigation-menulist");
let closebtn = document.querySelector(".close");
hamburgerbtn.addEventListener("click", () => {
  nav_list.classList.add("active");
});
closebtn.addEventListener("click", () => {
  nav_list.classList.remove("active");
})


const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('show');
	  } 
	});
  });
const elementss = document.querySelectorAll('.Animation');
elementss.forEach(element => observer.observe(element));
const elementsss = document.querySelectorAll('.howtouse');
elementss.forEach(element => observer.observe(element));