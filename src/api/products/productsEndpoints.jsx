import useAxios from '../../hooks/useAxios';

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

export { getAllProducts, getAllProductsByCategory };
