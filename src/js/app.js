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

// Инициализация слайдера product-slider
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
		},
		768: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
});