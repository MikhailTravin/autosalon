/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

//Главная
if (document.querySelector('.main-home__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-home__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, EffectFade, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 20,
		preloadImage: false,
		speed: 800,
		lazy: true,
		loop: true,
		effect: "fade",

		fadeEffect: {
			crossFade: true
		},

		// Эффекты
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},

		// Пагинация
		pagination: {
			el: '.main-home__pagination',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.main-home__arrow-prev',
			nextEl: '.main-home__arrow-next',
		},
	});
}

//Продукты
document.querySelectorAll('.products').forEach(n => {

	var productsSlider = null;
	var mediaQuerySize = 767.98;

	function catalogSliderInit() {
		if (!productsSlider) {
			const productsSlider = new Swiper(n.querySelector('.products__slider'), {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Pagination],
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				spaceBetween: 0,
				speed: 800,

				// Пагинация
				pagination: {
					el: n.querySelector('.products__pagination'),
					clickable: true,
				},

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: n.querySelector('.products__arrow-prev'),
					nextEl: n.querySelector('.products__arrow-next'),
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					767.98: {
						slidesPerView: 3,
					},
				},
			});
		}
	}

	function catalogSliderDestroy() {
		if (productsSlider) {
			productsSlider.destroy();
			productsSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth >= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	});
	window.addEventListener('load', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth >= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	});

});