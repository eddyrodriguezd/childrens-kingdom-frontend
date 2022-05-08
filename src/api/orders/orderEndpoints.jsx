import useAxios from '../../hooks/useAxios';

const createOrder = (order) => {

	const responseOptions = {
		successCode: 200,
		successMessage: 'Order successfully created',
		errorMessage: "Couldn't create order",
	};

	return useAxios('post', 'orders', order, responseOptions);
};

export { createOrder };
