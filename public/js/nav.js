let hamburgerbtn = document.querySelector(".minimenu");
let nav_list = document.querySelector(".navigation-menulist");
let closebtn = document.querySelector(".close");
hamburgerbtn.addEventListener("click", () => {
  nav_list.classList.add("active");
});
closebtn.addEventListener("click", () => {
  nav_list.classList.remove("active");
})

const allCard = Array.from(document.querySelectorAll('.card'));
		const container = document.querySelector('.card-wrapper');
		const indicator = document.querySelector('.indicator');

		const arrHeight = allCard.map(item=> {
			return item.offsetHeight
		})
		const maxHeight = Math.max(...arrHeight);

		allCard.forEach((item, idx)=> {
			item.style.height = maxHeight + 'px';
			item.id = 'card-' + idx;

			const a = document.createElement('a');
			a.href = '#' + item.id
			indicator.appendChild(a);
		})

		container.style.maxHeight = maxHeight + 'px';

		const allIndicator = document.querySelectorAll('.indicator a');

		allIndicator[0].classList.add('active');

		allIndicator.forEach(item=> {
			item.addEventListener('click', function () {
				allIndicator.forEach(i=> {
					i.classList.remove('active');
				})
				item.classList.add('active');
			})
		})

		container.addEventListener('scroll', function () {
			let linkActive;
			allCard.forEach(item=> {
				if(this.scrollTop >= item.offsetTop - (item.offsetHeight / 2) - 28 && this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)) {
					linkActive = item.id
				}
			})
			allIndicator.forEach(item=> {
				if(item.getAttribute('href') === ("#" + linkActive)) {
					item.classList.add('active');
				} else {
					item.classList.remove('active');
				}
			})
		})
