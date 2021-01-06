import {USER_MOCK} from '../utils';
import {toast} from 'react-toastify';

const axios = require('axios');

export const getUser = async()=> {
	return await axios.get('http://www.mocky.io/v2/5c923b0932000029056bce39')
	.then(function(response) {
		let data = Object.assign({}, USER_MOCK, response.data);
		return data;
	})
	.catch(function(error) {
		toast.error('Ocorreu um erro ao carregar os dados do usuário!');
		return false;
	})	
};