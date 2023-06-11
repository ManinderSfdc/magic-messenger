export default {
	welcome: `Welcome to our group! Here's a link to the new member paperwork:
`,
	renewal: `A friendly reminder that your membership is about to expire. Please renew your subscriptions at:
`,
	thankyou: `Thank you for supporting our group! Your membership has been renewed.
`,
	onOpen: () => {
		storeValue('msgName',appsmith.store.msgName || 'welcome')
	}
	
	
	

}