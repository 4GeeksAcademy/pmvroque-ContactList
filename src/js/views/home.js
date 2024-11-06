import React, { useContext, useState, useEffect }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import ContactCard from '../component/contactCard'
import UpdateContact from '../component/updateContact'

export const Home = () => {
  const [userArray, setUserArray] = useState([]) 
	const {store, actions} = useContext(Context)

	useEffect(() => {
    const createAgenda = async () => {
      let response = await fetch(
        "https://playground.4geeks.com/contact/agendas/pmvroque",
        {
          method: "GET",
        }
      );

      let data = await response.json();
      if (data.detail == 'Agenda "pmvroque" doesn\'t exist.') {
        console.log("no slug")
        let response = await fetch(
          "https://playground.4geeks.com/contact/agendas/pmvroque",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        let data = await response.json();
      }
    };
    createAgenda();
	actions.getAllContacts()
  }, []);
  if (userArray.length == 0) {
    setUserArray(store.users)
    console.log(userArray, "here's the user array")
  }
	
  const handleDelete = (user) => {
    let updatedUserArray = userArray.filter(filterUser => filterUser.id !== user.id)
    console.log(updatedUserArray, "here's the updated arr")
    console.log(userArray, "here's the user")
    setUserArray(updatedUserArray)
    // actions.deleteContact(user)
  }

	return (
	<div>
		<Link to={'/addContact'} className="btn btn-info">Create Contact</Link>
		
		{store.users?.length > 0 ? store.users.map((user, index) => {
			return(
			<ContactCard key={index} user={user} deleteContact={handleDelete}/>
			)
		})
		:
		<h1>No users!</h1>
	}
		
		
	</div>
	)
};
