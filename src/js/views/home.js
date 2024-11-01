import React, { useContext, useState, useEffect }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import ContactCard from '../component/contactCard'
import UpdateContact from '../component/updateContact'

export const Home = () => {
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
      if (data.details == 'Agenda "pmvroque" doesn\'t exist.') {
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

	

	return (
	<div>
		<Link to={'/addContact'} className="btn btn-info">Create Contact</Link>
		
		{store.users.length > 0 ? store.users.map((user, index) => {
			return(
			<ContactCard key={index} user={user}/>
			)
		})
		:
		<h1>No users!</h1>
	}
		
		
	</div>
	)
};
