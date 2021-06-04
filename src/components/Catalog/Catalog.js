class Catalog {

	render() {
		let htmlProducts = ``;
		PRODUCTS.forEach(({
			id,
			name,
			img,
			price
		}) => {
			htmlProducts += `
			<li class="products-elememt">
			<span class="products-elememt__name">${name}</span>
			<img class="products-elememt__img" src="${img}">
			<span class="products-elememt__price">${price}</span>
			<button class ="products-elememt__btn">Заказать</button>
			</li>
			`;

		});

		const html = `
		<ul class="catalog-container">
		${htmlProducts}
		</ul>
		`;
		ROOT_CATALOG.innerHTML = html;
	}
}

const catalogPage = new Catalog();
catalogPage.render();