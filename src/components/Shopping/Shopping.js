class Shopping {
	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({
			id,
			name,
			price,
			img
		}) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
                    <tr>
										<img class = "products-element__img" src="${img}"/>
                        <td class="shopping-element__name"> ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} рублей</td>
                    </tr>
                `;
				sumCatalog += price;
			}
		});

		const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} рублей</td>
                    </tr>
                </table>
            </div>
        `;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();