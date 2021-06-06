class LocalStorageUtil {
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