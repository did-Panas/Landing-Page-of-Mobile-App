/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		// new Swiper('.design-adv__slider', { // Вказуємо склас потрібного слайдера
		// 	// Підключаємо модулі слайдера
		// 	// для конкретного випадку
		// 	modules: [Navigation],
		// 	observer: true,
		// 	observeParents: true,
		// 	slidesPerView: 3.4,
		// 	spaceBetween: 57,
		// 	//autoHeight: true,
		// 	speed: 800,

		// 	//touchRatio: 0,
		// 	//simulateTouch: false,
		// 	//loop: true,
		// 	//preloadImages: false,
		// 	//lazy: true,

		// 	/*
		// 	// Ефекти
		// 	effect: 'fade',
		// 	autoplay: {
		// 		delay: 3000,
		// 		disableOnInteraction: false,
		// 	},
		// 	*/

		// 	// Пагінація
		// 	/*
		// 	pagination: {
		// 		el: '.swiper-pagination',
		// 		clickable: true,
		// 	},
		// 	*/

		// 	// Скроллбар
		// 	/*
		// 	scrollbar: {
		// 		el: '.swiper-scrollbar',
		// 		draggable: true,
		// 	},
		// 	*/

		// 	// Кнопки "вліво/вправо"
		// 	navigation: {
		// 		prevEl: '.swiper-button-prev',
		// 		nextEl: '.swiper-button-next',
		// 	},
		// 	/*
		// 	// Брейкпоінти
		// 	breakpoints: {
		// 		640: {
		// 			slidesPerView: 1,
		// 			spaceBetween: 0,
		// 			autoHeight: true,
		// 		},
		// 		768: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 20,
		// 		},
		// 		992: {
		// 			slidesPerView: 3,
		// 			spaceBetween: 20,
		// 		},
		// 		1268: {
		// 			slidesPerView: 4,
		// 			spaceBetween: 30,
		// 		},
		// 	},
		// 	*/
		// 	// Події
		// 	on: {

		// 	}
		// });



		const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
			let swiper;

			breakpoint = window.matchMedia(breakpoint);

			const enableSwiper = function (className, settings) {
				swiper = new Swiper(className, settings);

				if (callback) {
					callback(swiper);
				}
			}

			const checker = function () {
				if (breakpoint.matches) {
					return enableSwiper(swiperClass, swiperSettings);
				} else {
					if (swiper !== undefined) swiper.destroy(true, true);
					return;
				}
			};

			breakpoint.addEventListener('change', checker);
			checker();
		}

		const someFunc = (instance) => {
			if (instance) {
				instance.on('slideChange', function (e) {
					console.log('*** mySwiper.activeIndex', instance.activeIndex);
				});
			}
		};

		resizableSwiper(
			'(min-width: 767.98px)',
			'.design-adv__slider',
			{
				loop: true,
				spaceBetween: 57,
				slidesPerView: 3.37,
				// pagination: {
				// 	el: '.swiper-pagination',
				// 	clickable: true,
				// },
				// Брейкпоінти
				breakpoints: {
					768: {
						slidesPerView: 2.5,
						spaceBetween: 40,
					},
					992: {
						slidesPerView: 3.37,
						spaceBetween: 57,
					},

				},
			},
			someFunc
		);



	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});