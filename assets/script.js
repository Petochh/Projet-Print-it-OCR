const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');

arrow_left.addEventListener('click', function(){change_slide(direction='left')});
arrow_right.addEventListener('click', function(){change_slide(direction='right')});

for (let i = 0; i < slides.length; i++) {
	let create_dot = document.createElement('div');
	
	if (i == 0) {
		create_dot.className = "dot dot_selected";
		document.querySelector('.dots').append(create_dot);
	} else {
		create_dot.className = "dot";
		document.querySelector('.dots').append(create_dot);
	}
}

let current_index = 0;

function change_slide(direction) {
	let banner_img = document.querySelector('#banner-img');
	let banner_text = document.querySelector('#banner-text');

	
	if (direction=='right') {
		current_index++
		if(current_index > slides.length -1) current_index = 0
	} else if (direction=='left') {
		current_index--
		if (current_index < 0) current_index = slides.length -1
		
	}

banner_img.src = "./assets/images/slideshow/" + slides[current_index].image;
banner_text.innerHTML = slides[current_index].tagLine;

updateDots();
}

function updateDots() {
	let up_dots = document.querySelectorAll('.dots div');

	up_dots.forEach(function(up_dot) {
		up_dot.classList.remove('dot_selected');
	});

	up_dots[current_index].classList.add('dot_selected');
}