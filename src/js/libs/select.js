function select() {
	const optionMenus = document.querySelectorAll('.select__menu');

	optionMenus.forEach(optionMenu => {
		const selectBtn = optionMenu.querySelector('.select__btn');
		const options = optionMenu.querySelectorAll('.select__option');
		const sBtntext = optionMenu.querySelector('.select__btn input');
		const sBtnstext = optionMenu.querySelector('.select__btntext');
		const selectClose = optionMenu.querySelector('.select-close');
		const selectClear = optionMenu.querySelector('.top-select__delete');

		if (optionMenu) {
			selectBtn.addEventListener("click", function (e) {
				let elem_active = optionMenu.classList.contains("_active")
				optionMenus.forEach(opt => {
					opt.classList.remove('_active');
				})
				optionMenu.classList.toggle("_active", !elem_active)
			});
			if (sBtntext.value !== '') {
				sBtntext.classList.add('filled')
			} else {
				sBtntext.classList.remove('filled')
			}
			options.forEach(option => {
				option.addEventListener("click", function (e) {
					if (e.target.classList.contains('.select__option-text') != null) {
						sBtntext.value = e.target.innerText;
						sBtntext.classList.add('filled')
					};
					sBtnstext.classList.add("filled");
					options.forEach(el => { el.classList.remove('_active'); });
					option.classList.add("_active");
					optionMenu.classList.remove("_active")
				});
				if (selectClear) {
					selectClear.addEventListener("click", function (e) {
						optionMenu.classList.remove("_active");
					});
				}

			});
			if (selectClose) {
				selectClose.addEventListener("click", function (e) {
					optionMenu.classList.remove("_active")
					document.documentElement.classList.remove('select-active')
				});
			}
			window.addEventListener('click', e => {
				const target = e.target
				if (!target.closest('.select__options') && !target.closest('.select__menu')) {
					optionMenu.classList.remove("_active")
					document.documentElement.classList.remove('select-active')
				}
			})

		}
	})
}

select()