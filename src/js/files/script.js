function indents() {
    const header = document.querySelector('.header');
    const productCard = document.querySelector('.main-product-card');

    //Оступ от шапки
    let hHeader = window.getComputedStyle(header, false).height;
    hHeader = Number(hHeader.slice(0, hHeader.length - 2));

    if (productCard) {
        productCard.style.paddingTop = hHeader + 'px';
    }

    //выпадающее меню
    const menuBody = document.querySelector('.menu__body');
    if (document.documentElement.clientWidth < 767.98) {
        menuBody.style.top = hHeader + 'px';
        menuBody.style.minHeight = `calc(100vh - ${hHeader}px)`;
        menuBody.style.height = `calc(100vh - ${hHeader}px)`;
    } else {
        menuBody.style.top = '0px';
        menuBody.style.minHeight = 'auto';
        menuBody.style.height = 'auto';
    }

    //Комплектации и цены
    const packagesContent = document.querySelector(".left-packages-prices__content");
    const packagesTitle = document.querySelector(".left-packages-prices__top");
    if (packagesContent) {
        let hpackagesTitle = window.getComputedStyle(packagesTitle, false).height;
        hpackagesTitle = Number(hpackagesTitle.slice(0, hpackagesTitle.length - 2));
        if (document.documentElement.clientWidth < 767.98) {
            const heightContent = hpackagesTitle + 68;
            packagesContent.style.minHeight = `calc(100vh - ${heightContent}px)`;
            packagesContent.style.height = `calc(100vh - ${heightContent}px)`;
        } else {
            packagesContent.style.minHeight = "auto";
            packagesContent.style.height = "auto";
        }
    }

    //Сравнение модификации
    const comparisionContent = document.querySelector(".left-comparision__content");
    const comparisionTitle = document.querySelector(".left-comparision__top");
    const comparisionButtonMob = document.querySelector('.left-comparision__buttons');
    if (packagesContent) {
        let hcomparisionTitle = window.getComputedStyle(comparisionTitle, false).height;
        hcomparisionTitle = Number(hcomparisionTitle.slice(0, hcomparisionTitle.length - 2));

        let hcomparisionButtonMob = window.getComputedStyle(comparisionButtonMob, false).height;
        hcomparisionButtonMob = Number(hcomparisionButtonMob.slice(0, hcomparisionButtonMob.length - 2));

        if (document.documentElement.clientWidth < 767.98) {
            const heightContent = hcomparisionTitle + hcomparisionButtonMob + 68;
            comparisionContent.style.minHeight = `calc(100vh - ${heightContent}px)`;
            comparisionContent.style.height = `calc(100vh - ${heightContent}px)`;
        } else {
            comparisionContent.style.minHeight = "100%";
            comparisionContent.style.height = "100%";
        }
    }

    //Сравнить модификации
    const compareSpollers = document.querySelector(".right-comparision__spollers");
    const compareTitle = document.querySelector(".right-comparision__top");
    const compareContent = document.querySelector('.right-comparision__content');
    if (compareSpollers) {
        let hcompareTitle = window.getComputedStyle(compareTitle, false).height;
        hcompareTitle = Number(hcompareTitle.slice(0, hcompareTitle.length - 2));

        let hcompareContent = window.getComputedStyle(compareContent, false).height;
        hcompareContent = Number(hcompareContent.slice(0, hcompareContent.length - 2));

        if (document.documentElement.clientWidth < 767.98) {
            const heightContent = hcompareTitle + hcompareContent + 68;
            compareSpollers.style.minHeight = `calc(100vh - ${heightContent}px)`;
            compareSpollers.style.height = `calc(100vh - ${heightContent}px)`;
        } else {
            compareSpollers.style.minHeight = "100%";
            compareSpollers.style.height = "100%";
        }
    }
}

window.addEventListener('scroll', () => {
    indents();
});

window.addEventListener('resize', () => {
    indents();
});

indents();

//========================================================================================================================================================

//Заполненный input
const inputs = document.querySelectorAll("input");

if (inputs) {
    inputs.forEach(input => {
        input.addEventListener("input", function (e) {
            const parent = e.target.parentNode;
            if (input.value !== '') {
                parent.classList.add("filled");
                input.classList.add("filled");
            } else {
                parent.classList.remove("filled");
                input.classList.remove("filled");
            }
        });
    });

}

//========================================================================================================================================================

//Очистить фильтр
let filterClear = document.querySelector('.clear');

if (filterClear) {
    filterClear.addEventListener("click", function (e) {
        let inputFilterBlock = document.querySelectorAll(".search input");

        inputFilterBlock.forEach(function (input) {
            let parents = input.parentNode;
            input.value = '';
            input.classList.remove('filled')
            parents.classList.remove('filled')
        });
    });
}

//========================================================================================================================================================

//Смена фотографии
const colorItems = document.querySelectorAll(".top-product-card__color-item");
if (colorItems) colorItems.forEach((colorItem => {
    colorItem.addEventListener("click", (function (e) {
        const image = document.querySelector(".picture img");
        const source = document.querySelector('.picture source');
        const nameColor = document.querySelector(".top-product-card__name-color span");
        if (null != e.target.classList.contains("_active")) {
            let colorTitle = e.target.querySelector(".top-product-card__name");
            if (colorTitle) nameColor.innerHTML = colorTitle.innerHTML;
        }
        colorItems.forEach((e => {
            e.classList.remove("_active");
        }));
        colorItem.classList.add("_active");
        image.src = colorItem.getAttribute("src");
        if (source) {
            source.srcset = colorItem.getAttribute("src");
        }
    }));
}));

//========================================================================================================================================================


//Комплектация и цены
let packagesPrices = document.querySelectorAll(".left-packages-prices__column");
if (packagesPrices) {
    packagesPrices.forEach(packagesPrice => {
        let packagesPricesItems = document.querySelectorAll(".left-packages-prices__item");
        let packagesPricesButtonTitle = document.querySelector(".left-packages-prices__button .left-packages-prices__title");
        let packagesPricesButtonSubtitle = document.querySelector(".left-packages-prices__button .left-packages-prices__subtitle");
        const packagesPricesButtonMob = document.querySelector(".left-packages-prices__button-mob");
        let packagesPricesButtonMobTitle = document.querySelector(".left-packages-prices__button-mob .left-packages-prices__button .left-packages-prices__title");
        let packagesPricesButtonMobSubtitle = document.querySelector(".left-packages-prices__button-mob .left-packages-prices__button .left-packages-prices__subtitle");
        packagesPricesItems.forEach((packagesPricesItem => {
            packagesPricesItem.addEventListener("click", (function (e) {
                if (null != e.target.classList.contains(".left-packages-prices__title")) {
                    let packagesPricesTitle = e.target.querySelector(".left-packages-prices__title");
                    let packagesPricesSubTitle = e.target.querySelector(".left-packages-prices__subtitle");
                    if (packagesPricesTitle) {
                        packagesPricesButtonTitle.innerHTML = packagesPricesTitle.innerHTML;
                        packagesPricesButtonSubtitle.innerHTML = packagesPricesSubTitle.innerHTML;
                        packagesPricesButtonMobTitle.innerHTML = packagesPricesTitle.innerHTML;
                        packagesPricesButtonMobSubtitle.innerHTML = packagesPricesSubTitle.innerHTML;
                    }
                }
                packagesPricesItems.forEach((e => {
                    e.classList.remove("_active");
                }));
                packagesPricesItem.classList.add("_active");

                const id = packagesPricesItem.dataset.id;
                const contentSelector = `div[data-id='${id}'].right-packages-prices__column`;
                const contentBlocks = document.querySelector(contentSelector);
                let contents = document.querySelectorAll(".right-packages-prices__column")

                contents.forEach(content => {
                    contents.forEach(e => {
                        e.classList.remove('_active');
                    });
                    contentBlocks.classList.add('_active');
                });

            }));
            if (packagesPricesButtonMob) {
                const shadow = document.querySelector(".product-card-shadow");
                const close = document.querySelector(".close");
                packagesPricesButtonMob.addEventListener("click", (function (e) {
                    document.documentElement.classList.add("packages-open");
                    document.documentElement.classList.add("lock");
                }));
                shadow.addEventListener("click", (function (e) {
                    document.documentElement.classList.remove("packages-open");
                    document.documentElement.classList.remove("lock");
                }));
                close.addEventListener("click", (function (e) {
                    document.documentElement.classList.remove("packages-open");
                    document.documentElement.classList.remove("lock");
                }));
            }
        }));
    });
};

//========================================================================================================================================================

//Сравнение модификации
const comparisionButton = document.querySelector('.comparision__button-mob');
if (comparisionButton) {

    const shadow = document.querySelector(".product-card-shadow");
    const close = document.querySelector(".left-comparision__close");

    comparisionButton.addEventListener("click", (function (e) {
        document.documentElement.classList.add("comparision-open");
        document.documentElement.classList.add("lock");
    }));
    shadow.addEventListener("click", (function (e) {
        document.documentElement.classList.remove("comparision-open");
        document.documentElement.classList.remove("lock");
    }));
    close.addEventListener("click", (function (e) {
        document.documentElement.classList.remove("comparision-open");
        document.documentElement.classList.remove("lock");
    }));
}

const compareButton = document.querySelector('.left-comparision__button');
if (compareButton) {
    const shadow = document.querySelector(".product-card-shadow");
    const close = document.querySelector(".right-comparision__close");

    compareButton.addEventListener("click", (function (e) {
        document.documentElement.classList.add("compare-open");
    }));
    shadow.addEventListener("click", (function (e) {
        document.documentElement.classList.remove("compare-open");
    }));
    close.addEventListener("click", (function (e) {
        document.documentElement.classList.remove("compare-open");
    }));
}

const compareCheckboxes = document.querySelectorAll('.left-comparision__checkbox');
const maxActive = 2; // Максимальное количество активных элементов

if (compareCheckboxes) {
    compareCheckboxes.forEach(block => {
        const id = block.dataset.id;
        const contentBlocks = document.querySelectorAll(`.right-comparision__column[data-id='${id}']`);
        const contentSpollers = document.querySelectorAll(`.spollers__table[data-id='${id}']`);
        block.addEventListener("click", function () {
            // Если элемент уже активен, деактивируем его
            if (block.classList.contains('_active')) {
                block.classList.remove('_active');
                contentBlocks.forEach(contentBlock => contentBlock.classList.remove('_active'));
                contentSpollers.forEach(contentSpoller => contentSpoller.classList.remove('_active'));
            } else {
                // Проверяем, сколько элементов уже активно
                const activeBlocks = document.querySelectorAll('.left-comparision__checkbox._active');
                if (activeBlocks.length >= maxActive) {
                    // Деактивируем первый активный элемент
                    const firstActive = activeBlocks[0];
                    firstActive.classList.remove('_active');
                    const firstId = firstActive.dataset.id;
                    document.querySelectorAll(`.right-comparision__column[data-id='${firstId}']`).forEach(contentBlock => contentBlock.classList.remove('_active'));
                    document.querySelectorAll(`.spollers__table[data-id='${firstId}']`).forEach(contentBlock => contentBlock.classList.remove('_active'));
                }

                // Активируем текущий элемент
                block.classList.add('_active');
                contentBlocks.forEach(contentBlock => contentBlock.classList.add('_active'));
                contentSpollers.forEach(contentSpoller => contentSpoller.classList.add('_active'));

            }
        });
        const contentBlockCloses = document.querySelectorAll(`.right-comparision__column[data-id='${id}'] .right-comparision__compare-close`);
        contentBlockCloses.forEach(contentBlockClose => {
            contentBlockClose.addEventListener("click", function (e) {
                block.classList.remove('_active');
                contentBlocks.forEach(contentBlock => contentBlock.classList.remove('_active'));
                contentSpollers.forEach(contentSpoller => contentSpoller.classList.remove('_active'));
            });
        });
    });
}

//========================================================================================================================================================

//Показать еще бренды
const brandsMore = document.querySelector('.brands__button');

if (brandsMore) {
    brandsMore.addEventListener("click", function (e) {
        const brandsBody = document.querySelector('.brands__body');
        brandsBody.classList.add('_active')
        brandsMore.classList.add('_active')
    });
}

//========================================================================================================================================================

//Исрытай удачу
const track = document.querySelector('.fortune-popup__track');
if (track) {
    const initialSlides = Array.from(track.children);
    const cloneCount = 3;
    let currentSlides = initialSlides.slice();

    // Перемешивание
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Инициализация трека
    function setupTrack(slides) {
        track.innerHTML = '';

        // Добавляем клонированные слайды
        slides.slice().reverse().forEach(slide =>
            track.prepend(slide.cloneNode(true))
        );

        slides.forEach(slide => {
            for (let i = 0; i < cloneCount; i++) {
                track.appendChild(slide.cloneNode(true));
            }
        });

        // Начальная позиция
        const slideMargin = parseFloat(getComputedStyle(slides[0]).marginRight);
        const startPosition = -slides.reduce((acc, slide) =>
            acc + slide.offsetWidth + slideMargin, 0
        );

        track.style.transform = `translateX(${startPosition}px)`;
        return startPosition;
    }

    let currentPosition = setupTrack(currentSlides);

    document.querySelector('.fortune-popup__button').addEventListener('click', () => {
        // 1. Перемешиваем копию исходных слайдов
        const newSlides = initialSlides.slice();
        shuffle(newSlides);

        // 2. Обновляем трек новыми слайдами
        currentSlides = newSlides;
        currentPosition = setupTrack(newSlides);

        // Ждем обновления DOM
        requestAnimationFrame(() => {
            const slide = currentSlides[0];
            const slideWidth = slide.offsetWidth;
            const slideMargin = parseFloat(getComputedStyle(slide).marginRight);
            const content = document.querySelector('.fortune-popup__content');
            const containerWidth = content.clientWidth -
                parseFloat(getComputedStyle(content).paddingLeft) -
                parseFloat(getComputedStyle(content).paddingRight);

            // Выбираем случайный индекс
            const targetIndex = Math.floor(Math.random() * currentSlides.length);

            // Положение центра контейнера
            const containerCenter = containerWidth / 2;

            // Расчет позиции центра целевого слайда
            let targetPosition = currentPosition;
            currentSlides.forEach((_, i) => {
                if (i <= targetIndex) {
                    targetPosition += (slideWidth + slideMargin);
                }
            });

            // Корректировка на половину ширины слайда и центр контейнера
            targetPosition -= (slideWidth / 2 + containerCenter);

            // Добавляем 3 полных оборота
            const totalDistance = targetPosition + 3 * currentSlides.reduce((acc, slide) =>
                acc + slide.offsetWidth + slideMargin, 0
            );

            // Анимация
            track.style.transition = 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)';
            track.style.transform = `translateX(-${totalDistance}px)`;

            track.addEventListener('transitionend', () => {
                track.style.transition = 'none';

                // Нормализация позиции
                const trackWidth = currentSlides.reduce((acc, slide) =>
                    acc + slide.offsetWidth + slideMargin, 0
                );

                let normalizedPosition = totalDistance % trackWidth;
                currentPosition = -normalizedPosition;

                // === Корректировка позиции для точного центрирования ===
                const containerRect = content.getBoundingClientRect();
                const centerPosition = containerRect.left + containerWidth / 2;

                let adjustment = 0;
                Array.from(track.children).some((slideEl, index) => {
                    const slideRect = slideEl.getBoundingClientRect();
                    const slideCenter = slideRect.left + slideRect.width / 2;

                    if (Math.abs(slideCenter - centerPosition) < slideWidth / 2) {
                        const offset = slideCenter - centerPosition;
                        adjustment = offset;
                        return true;
                    }
                });

                normalizedPosition += adjustment;
                track.style.transform = `translateX(-${normalizedPosition}px)`;
                currentPosition = -normalizedPosition;

                // === Определение выбранного слайда ===
                let selectedData;
                Array.from(track.children).some((slideEl, index) => {
                    const slideRect = slideEl.getBoundingClientRect();
                    if (slideRect.left <= centerPosition && slideRect.right >= centerPosition) {
                        const originalIndex = index % currentSlides.length;
                        const originalSlide = initialSlides.find(s =>
                            s.dataset.id === currentSlides[originalIndex].dataset.id
                        );

                        selectedData = {
                            id: originalSlide.dataset.id,
                            prize: originalSlide.dataset.prize,
                            text: originalSlide.textContent
                        };
                        return true;
                    }
                });

                // Отправка на бэкенд
                fetch('/your-endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedData)
                });

                void track.offsetHeight; // Принудительный ререндер
            }, { once: true });
        });
    });
}