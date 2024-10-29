import React, { useContext, useState, useEffect }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import AddContact from "../component/addContact";
import ContactCard from '../component/contactCard'
import UpdateContact from '../component/updateContact'

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(() => {
		const createAgenda = async () => {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque", {
				type:"string",
				method: "POST",
				headers: {"Content-Type": "application/json"},
			})
			let data = await response.json()
			
			if(data.slug != "pmvroque") {
				let postResponse = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque", {
					type: "string",
					method: "POST"
				})
				
				let postData = await response.json()
			}
		}
		
	}, [])

	

	return (
	<div>
		<Link to={'/addContact'} className="btn btn-info">Create Contact</Link>
		<ContactCard />
			
		
		
	</div>
	)
};
