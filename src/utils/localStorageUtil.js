class LocalStorageUtil {
<<<<<<< HEAD
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
    }
}

const localStorageUtil = new LocalStorageUtil();
=======
	constructor() {
		this.keyName = 'catalog';
	}

	getCatalog() {
		const catalogLocalStorage = localStorage.getItem(this.keyName);
		if (catalogLocalStorage !== null) {
			return JSON.parse(catalogLocalStorage);
		}
		return [];
	}

	putCatalog(id) {
		let catalog = this.getCatalog();
		let pushCatalog = false;
		const index = catalog.indexOf(id);

		if (index === -1) {
			catalog.push(id);
			pushCatalog = true;
		} else {
			catalog.splice(index, 1);
		}

		localStorage.setItem(this.keyName, JSON.stringify(catalog));

		return {
			pushCatalog,
			catalog
		}
	}
}

const localStorageUtil = new LocalStorageUtil();
>>>>>>> b141fd02f8918b06aa46649420bd01a848c3a094
