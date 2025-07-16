// Подключение из node_modules
import * as noUiSlider from 'nouislider';

import '../../libs/wNumb.min.js';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const ratingSearch = document.querySelector('.search-range');
	if (ratingSearch) {
		noUiSlider.create(ratingSearch, {
			start: [399900, 1399900],
			connect: true,
			range: {
				'min': [399900],
				'max': [6000000]
			},
			format: wNumb({
				decimals: 0,
				thousand: ' ',
			})
		});

		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', function () {
			ratingSearch.noUiSlider.set([this.value, null]);
		});
		priceEnd.addEventListener('change', function () {
			ratingSearch.noUiSlider.set([null, this.value]);
		});
		ratingSearch.noUiSlider.on('update', function (values, handle) {

			var value = values[handle];

			if (handle) {
				priceEnd.value = value;
			} else {
				priceStart.value = value;
			}
		});
	}

	const creditRangeSum = document.querySelector('.credit-range-sum');
	if (creditRangeSum) {
		noUiSlider.create(creditRangeSum, {
			start: 60,
			behaviour: "snap",
			connect: [true, false],
			pips: {
				mode: "count",
				values: 11
			},
			range: {
				min: [0],
				max: [100]
			}
		});
		var activePips = [null, null];
		creditRangeSum.noUiSlider.on("update", (function (values, handle) {
			if (activePips[handle]) activePips[handle].classList.remove("active-pip");
			var dataValue = Math.round(values[handle]);
			activePips[handle] = creditRangeSum.querySelector('.noUi-value[data-value="' + dataValue + '"]');
			if (activePips[handle]) activePips[handle].classList.add("active-pip");
		}));
	}

	const creditRangeTerm = document.querySelector('.credit-range-term');
	if (creditRangeTerm) {
		noUiSlider.create(creditRangeTerm, {
			start: 5,
			behaviour: 'snap',
			connect: [true, false],
			pips: {
				mode: 'count',
				values: 8
			},
			range: {
				'min': [1],
				'max': [8]
			},
		});
		activePips = [null, null];
		creditRangeTerm.noUiSlider.on("update", (function (values, handle) {
			if (activePips[handle]) activePips[handle].classList.remove("active-pip");
			var dataValue = Math.round(values[handle]);
			activePips[handle] = creditRangeTerm.querySelector('.noUi-value[data-value="' + dataValue + '"]');
			if (activePips[handle]) activePips[handle].classList.add("active-pip");
		}));
	}

	const productCardRangeSum = document.querySelector('.product-card-range-sum');
	if (productCardRangeSum) {
		var arbitraryValuesForSlider = ["0%", "80%"];
		var format = {
			to: function (value) {
				return arbitraryValuesForSlider[Math.round(value)];
			},
			from: function (value) {
				return arbitraryValuesForSlider.indexOf(value);
			}
		};
		noUiSlider.create(productCardRangeSum, {
			start: [60],
			behaviour: "snap",
			connect: [true, false],
			pips: {
				mode: "steps",
				format
			},
			range: {
				min: 0,
				max: arbitraryValuesForSlider.length - 1
			}
		});

	}

	const formPopupRangeSum = document.querySelector('.form-popup-range-sum');
	if (formPopupRangeSum) {
		const minPrice = 500000;
		const maxPrice = 2000000;

		// Форматер для input с текстом
		const inputFormat = wNumb({
			decimals: 0,
			thousand: ' ',
			postfix: ' рублей'
		});

		// Форматер для pips с символом
		const pipsFormat = wNumb({
			decimals: 0,
			thousand: ' ',
			postfix: ' ₽'
		});

		noUiSlider.create(formPopupRangeSum, {
			start: [1000000],
			step: 10000,
			behaviour: "snap",
			connect: [true, false],
			range: {
				min: minPrice,
				max: maxPrice
			},
			pips: {
				mode: 'range',
				format: pipsFormat // Используем формат с символом
			},
			format: {
				to: value => Math.round(value),
				from: value => Math.round(value)
			}
		});

		const priceEnd = document.getElementById('price-end-popup');

		// Обновление поля при изменении слайдера
		formPopupRangeSum.noUiSlider.on('update', (values, handle) => {
			// Форматируем значение для input с текстом
			priceEnd.value = inputFormat.to(values[handle]);
		});

		// Обновление слайдера при вводе в поле
		priceEnd.addEventListener('input', () => {
			// Удаляем все кроме цифр
			let value = priceEnd.value.replace(/[^0-9]/g, '');
			value = Math.max(minPrice, Math.min(maxPrice, value || minPrice));

			// Устанавливаем значение в слайдер
			formPopupRangeSum.noUiSlider.set(value);
			// Обновляем поле с форматированием
			priceEnd.value = inputFormat.to(value);
		});
	}

	const productCardRangeTerm = document.querySelector('.product-card-range-term');
	if (productCardRangeTerm) {
		noUiSlider.create(productCardRangeTerm, {
			start: 5,
			behaviour: "snap",
			connect: [true, false],
			pips: {
				mode: "count",
				values: 2
			},
			range: {
				min: [2],
				max: [96]
			}
		});
	}
}
rangeInit();
