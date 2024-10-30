const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: []
		},
		actions: {

			getAllContacts: async (users) => {
				let response = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque/contacts", {
			
				  method:"GET",
				  headers: {"Content-Type": "application/json"},
				  body: JSON.stringify(users)
				})
				let data = await response.json()
				console.log(data, "here's your data")
				setStore({users:data.contacts})
			}
			
		}
	};
};

export default getState;
