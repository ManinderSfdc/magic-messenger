export default {
	verifySession: async () => {
		let response;
		try{
			response = await verifyMagicUrl.run();
		}catch(error){
			showAlert('Error while logging in. Contact the creator with this info.' + response?.body?.message +':' + response?.body?.type,'error');
			return;
		}
		console.log('response:'+ response);
		if(response?.userId){
			await storeValue('verified', true);
			navigateTo("dashboard");
		}else{
			showAlert('Error while logging in. Contact the app creator.','error');
		}       
	}
}