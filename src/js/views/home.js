import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import AddContact from "../component/addContact";
import ContactCard from '../component/contactCard'
import UpdateContact from '../component/updateContact'

export const Home = () => {
	const {store, actions} = useContext(Context)


	return (
	<div>
		<Link to={'/addContact'} className="btn btn-info">go to Profile</Link>
		
		<ContactCard />
	</div>
	)
};
