import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import AddContact from "../component/addContact";
import ContactCard from '../component/contactCard'
import UpdateContact from '../component/updateContact'

export const Home = () => {
	const {store, actions} = useContext(Context)
	const pets = [
		{"name" : "Chibi", "gender" : "male", "breed" : "Shih tzu", "email" : "Chibi@woof.com"},
		{"name" : "Chili", "gender" : "male", "breed" : "Shih tzu", "email" : "Chili@woof.com"},
		{"name" : "Cloudy", "gender" : "female", "breed" : "daschund", "email" : "Cloudy@woof.com"},
		{"name" : "Empi", "gender" : "female", "breed" : "Golden Lab", "email" : "Empi@woof.com"}
	]

	return (
	<div>
		<Link to={'/addContact'} className="btn btn-info">Add A Pet</Link>
		{store.pets?.map((user, index) => {
			return (
			<ContactCard key={index} name={user.name} gender={user.gender} breed={user.breed} email={user.email}/>
			
		)})}
		
	</div>
	)
};
