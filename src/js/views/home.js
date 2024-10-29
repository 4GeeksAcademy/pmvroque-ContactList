import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import AddContact from "../component/addContact";
import ContactCard from '../component/contactCard'
import UpdateCard from '../component/updateContact'

export const Home = () => {
	const {store, actions} = useContext(Context)
	const users = [{"name" : "Chib", "breed" : "Shih tzu", "gender" : "male", "email" : "Chibi@woof.com"},
				{"name" : "Cloudy", "breed" : "Dacshund", "gender" : "female", "email" : "Cloudy@woof.com"},
				{"name" : "Empi", "breed" : "Golden Retriver", "gender" : "female", "email" : "Empi@woof.com"},
				{"name" : "Chili", "breed" : "Shih tzu", "gender" : "male", "email" : "Chili@woof.com"}
	]


	return (
	<div>
		<Link to={"/addContact"} className="btn btn-info">go to Profile</Link>
		
		{users?.map((pet, index) => {
			return (
			<ContactCard name={pet.name} email={pet.email} breed={pet.breed} gender={pet.gender}/>
			
	)})}
		
	</div>
	)
};
