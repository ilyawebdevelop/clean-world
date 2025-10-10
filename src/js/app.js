import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
	closeButton: true,
});


// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntroSlider = new Swiper(introSlider, {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 10,
	effect: 'fade',
	autoplay: {
		delay: 5000,
	},
	fadeEffect: {
		crossFade: true
	},
	// autoHeight: true,
	navigation: {
		prevEl: document.querySelector('.intro')?.querySelector('.navArrowPrev'),
		nextEl: document.querySelector('.intro')?.querySelector('.navArrowNext'),
	},
	pagination: {
		el: document.querySelector('.intro')?.querySelector('.swiper-pagination'),
		clickable: true,
		type: 'bullets',
	},
});

// Инициализация слайдера servicesSlider
const servicesSlider = document.querySelector('.servicesSlider');
var mySwiperServices = new Swiper(servicesSlider, {
	slidesPerView: 3,
	speed: 800,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		prevEl: servicesSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
		nextEl: servicesSlider?.closest('.sliderW').querySelector('.navArrowNext'),
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
});

// Инициализация слайдера whySlider
const whySlider = document.querySelector('.whySlider');
var mySwiperWhy = new Swiper(whySlider, {
	slidesPerView: 3,
	speed: 800,
	spaceBetween: 30,
	autoplay: {
		delay: 3000,
	},
	scrollbar: {
		el: '.whySlider .swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

// Инициализация слайдера technicSlider
const technicSlider = document.querySelector('.technicSlider');
var mySwiperTechnic = new Swiper(technicSlider, {
	slidesPerView: 3,
	speed: 800,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		prevEl: technicSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
		nextEl: technicSlider?.closest('.sliderW').querySelector('.navArrowNext'),
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 3,
		},
	},
});

// Инициализация слайдера partnersSlider
const partnersSlider = document.querySelector('.partnersSlider');
var mySwiperPartners = new Swiper(partnersSlider, {
	slidesPerView: 'auto',
	speed: 800,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 'auto',
		},
	},
});

// Инициализация слайдера service-intro-slider
const serviceIntroService = document.querySelector('.service-intro-slider');
var mySwiperIntroService = new Swiper(serviceIntroService, {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 10,
	effect: 'fade',
	autoplay: {
		delay: 5000,
	},
	fadeEffect: {
		crossFade: true
	},
	// autoHeight: true,
	navigation: {
		prevEl: document.querySelector('.intro-service')?.querySelector('.navArrowPrev'),
		nextEl: document.querySelector('.intro-service')?.querySelector('.navArrowNext'),
	},
});

// Инициализация слайдера containerSlider
const containerSlider = document.querySelector('.containerSlider');
var mySwiperContainer = new Swiper(containerSlider, {
	slidesPerView: 4,
	speed: 800,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		prevEl: servicesSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
		nextEl: servicesSlider?.closest('.sliderW').querySelector('.navArrowNext'),
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},
});

// Инициализация слайдера portfolioSlider
const portfolioSlider = document.querySelector('.portfolioSlider');
var mySwiperPortfolioService = new Swiper(portfolioSlider, {
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 10,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		prevEl: document.querySelector('.portfolioSlider')?.querySelector('.portfolioSliderPrev'),
		nextEl: document.querySelector('.portfolioSlider')?.querySelector('.portfolioSliderNext'),
	},
});

// Инициализация слайдера portfolioInnerSlider
document.querySelectorAll('.portfolioInnerSlider').forEach(n => {
	const mySwiperPortfolioInner = new Swiper(n, {
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 5000,
		},
		fadeEffect: {
			crossFade: true
		},
		speed: 600,
		autoplay: true,
		navigation: {
			prevEl: n.closest('.portfolioSlide').querySelector('.navArrowPrev'),
			nextEl: n.closest('.portfolioSlide').querySelector('.navArrowNext'),
		},
	});
});

// Инициализация слайдера docSlider
const docSlider = document.querySelector('.docSlider');
var mySwiperDoc = new Swiper(docSlider, {
	slidesPerView: 4,
	speed: 800,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		prevEl: docSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
		nextEl: docSlider?.closest('.sliderW').querySelector('.navArrowNext'),
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},
});

// Инициализация слайдера teamSlider
const teamSlider = document.querySelector('.teamSlider');
var mySwiperTeam = new Swiper(teamSlider, {
	slidesPerView: 4,
	speed: 800,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},
});

// Инициализация слайдера historySlider
const historySlider = document.querySelector('.historySlider');
var mySwiperHistory = new Swiper(historySlider, {
	slidesPerView: 2,
	speed: 800,
	spaceBetween: 40,
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
	},
});


let catHeadBtn = document.querySelector('.catHeadBtn');
let catHead = document.querySelector('.catHead');
catHeadBtn?.addEventListener('click', () => {
	catHead.classList.add('active');
	catHeadBtn.style.display = 'none';
});

if (document.querySelector('.copyBtn')) {
	let clipboard = new ClipboardJS('.copyBtn');
	clipboard.on('success', function (e) {
		console.info('Action:', e.action);
		console.info('Text:', e.text);
		console.info('Trigger:', e.trigger);
		let parent = e.trigger.closest('.copyBtnW');
		let copyText = parent.querySelector('.copyText');
		console.log(copyText);
		copyText.classList.add('active');
		setTimeout(function () {
			copyText.classList.remove('active');
		}, 2000);
		e.clearSelection();
	});
}

$('.vacItemHead').click(function () {
	$(this).toggleClass('active');
	$(this).siblings('.vacItemBody').slideToggle();
});

const mediaQuerymin1200 = window.matchMedia('(min-width: 1200px)');

let headerServicesMenuBtn = document.querySelector('#headerServicesMenuBtn');
let servicesSubmenuNav = document.querySelector('#services-submenu-nav');
let overlayMenu = document.querySelector('.overlayMenu');
let body = document.querySelector('body');


headerServicesMenuBtn.addEventListener('click', () => {
	servicesSubmenuNav.classList.toggle('active');
	overlayMenu.classList.toggle('active');

	if (mediaQuerymin1200.matches) {
		body.classList.toggle('hidden');
	}


});


overlayMenu.addEventListener('click', () => {
	overlayMenu.classList.remove('active');
	servicesSubmenuNav.classList.remove('active');
	body.classList.remove('hidden');
	$(".sub-menu>.has-menu-children>a").each(function (index, element) {
		// 'index' is the zero-based index of the current element in the collection.
		// 'element' is the raw DOM element.
		// Inside this function, 'this' also refers to the current DOM element.
		$(element).removeClass('active'); // Example: Change color of each selected element
	});
});

$('.sub-menu>.has-menu-children>a').click(function () {
	$(".sub-menu>.has-menu-children>a").each(function (index, element) {
		// 'index' is the zero-based index of the current element in the collection.
		// 'element' is the raw DOM element.
		// Inside this function, 'this' also refers to the current DOM element.
		$(element).removeClass('active'); // Example: Change color of each selected element
	});
	$(this).toggleClass('active');
	$(this).siblings('.vacItemBody').slideToggle();
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const mobMenuOverlay = document.querySelector('.mob-menu-overlay');

const toggleMenu = function () {
	menu.classList.toggle('active');
}
const toggleBurger = function () {
	btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
	bodyEl.classList.toggle('hidden');
}
const overlayToggle = function () {
	mobMenuOverlay.classList.toggle('active');
}
const menuClose = function () {
	toggleBurger();
	bodyOverflow();
	toggleMenu();
	overlayToggle();
}

btnMenu?.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
	toggleBurger();
	bodyOverflow();
	overlayToggle();
});

btnClose?.addEventListener('click', function (e) {
	menuClose();
});

document.addEventListener('click', e => {
	let target = e.target;
	let its_nav = target == menu || menu.contains(target);
	let overlay_is_active = mobMenuOverlay.classList.contains('active');


	if (!its_nav && overlay_is_active) {
		toggleMenu();
		toggleBurger();
		bodyOverflow();
		overlayToggle();
	}
});