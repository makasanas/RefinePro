import  axios from 'axios';
	
const ROOT_URL = process.env.BACKEND_URL || 'https://cloudhome-staging.herokuapp.com';

var config = {
    headers: {
    	'Authorization': "Bearer "+localStorage.getItem("key"),
    	'Content-Type': "application/json"
    }
};

export const login = 'login';
export function loginStatus(data) {		
	const request = axios.post(`${ROOT_URL}/rest-auth/login/`, data);
	return{
		type:login,	
		payload:request		
	};
}

export const forgotPassword = 'forgotPassword';		
export function forgotPasswordRequest(data) {
	const request = axios.post(`${ROOT_URL}/rest-auth/password/reset/`, data);	

	return{
		type:forgotPassword,	
		payload:request		
	};
}

export const houses = 'houses';
export function housesData() {		
	const request = axios.get(`${ROOT_URL}/api/home/houses/`, config);	
		
	return{
		type:houses,	
		payload:request		
	};
}

export const assetType = 'assetType';
export function assetTypeData(id) {		
	const request = axios.get(`${ROOT_URL}/api/home/asset-types`);						
	return{
		type:assetType,	
		payload:request		
	};
}

export const assetTypeCounts = 'assetTypeCounts';
export function assetTypeCountsData(id) {		
	const request = axios.get(`${ROOT_URL}/api/home/houses/`+id+`/asset-type-counts`);						
	return{
		type:assetTypeCounts,	
		payload:request		
	};
}

export const asset = 'asset';		
export function assetData(id,type) {
	var request = '';
	if(type == undefined){
		request = axios.get(`${ROOT_URL}/api/home/houses/`+id+`/assets/`, config);
	}else{
		request = axios.get(`${ROOT_URL}/api/home/houses/`+id+`/assets/?type=`+type, config);	
	}		
						
	return{
		type:asset,	
		payload:request		
	};
}

