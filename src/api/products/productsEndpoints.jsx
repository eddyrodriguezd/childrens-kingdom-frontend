import useAxios from '../../hooks/useAxios';

const getAllProducts = (setSuccess) => {

	const responseOptions = {
		successCode: 200,
		successMessage: 'Products successfully retrieved',
		errorMessage: "Couldn't retrieve products",
	};

	return useAxios('get', 'products', null, responseOptions);
};

export { getAllProducts };
