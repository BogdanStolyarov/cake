class Catalog {
	constructor() {
		this.classNameActive = 'catalog-element__btn_active';
		this.labelAdd = 'Добавить';
		this.labelRemove = 'Удалить';
	}

	handleSetLocationStorage(element, id) {
		const {
			pushCatalog,
			catalog
		} = localStorageUtil.putCatalog(id);

		if (pushCatalog) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd;
		}
	}

	render() {
		const catalogStore = localStorageUtil.getCatalog();
		let htmlCatalog = '';

		PRODUCT.forEach(({
			id,
			name,
			price,
			img
		}) => {
			let activeClass = '';
			let activeText = '';

			if (catalogStore.indexOf(id) === -1) {
				activeText = this.labelAdd;
			} else {
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			}

			htmlProduct += `
                <li class="catalog-element">
                    <span class="catalog-element__name">${name}</span>
                    <img class="catalog-element__img" src="${img}" />
                    <span class="catalog-element__price">
                         ${price.toLocaleString()} рублей
                    </span>
                    <button class="catalog-element__btn${activeClass}" onclick="catalogPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
		});

		const html = `
            <ul class="catalog-container">
                ${htmlCatalog}
            </ul>
        `;

		ROOT_CATALOG.innerHTML = html;
	}
}

const catalogPage = new Catalog();
catalogPage.render();