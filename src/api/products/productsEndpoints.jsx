import useAxios from '../../hooks/useAxios';
import sendHttpRequest from '../sendHttpRequest';

const getAllProducts = (setSuccess) => {

	const responseOptions = {
		successTrigger: setSuccess,
		successCode: 200,
		successMessage: 'Products successfully retrieved',
		errorMessage: "Couldn't retrieve products",
	};

	return useAxios('get', 'products', null, responseOptions);
};

export { getAllProducts };
