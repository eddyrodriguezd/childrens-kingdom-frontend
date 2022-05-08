import useAxios from '../../hooks/useAxios';

const createProduct = (product) => {

	const responseOptions = {
		successCode: 200,
		successMessage: 'Product successfully created',
		errorMessage: "Couldn't create product",
	};

	return useAxios('post', 'products', product, responseOptions);
};

const getAllProducts = () => {

	const responseOptions = {
		successCode: 200,
		successMessage: 'Products successfully retrieved',
		errorMessage: "Couldn't retrieve products",
	};

	return useAxios('get', 'products', null, responseOptions);
};

const getAllProductsByCategory = (category) => {

	const responseOptions = {
		successCode: 200,
		successMessage: 'Products from category <' + category + '> have been successfully retrieved',
		errorMessage: "Couldn't retrieve products from category <" + category + '>',
	};

	return useAxios('get', 'products/category/' + category, null, responseOptions);
};

export { createProduct, getAllProducts, getAllProductsByCategory };
