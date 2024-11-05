import { Navigate } from "react-router";
import { UpdateContact } from "../component/updateContact";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [], 
			updateUserData: {}
		},
		
		actions: {
			
			updateContactData: (userData) => {
				setStore({updateUserData:userData})
			},

			getAllContacts: async (users) => {
				let response = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque/contacts", {
			
				  method:"GET",
				  headers: {"Content-Type": "application/json"},
				  body: JSON.stringify(users)
				})
				let data = await response.json()
				
				setStore({users:data.contacts})
			}
			
		}
	};
};

export default getState;
