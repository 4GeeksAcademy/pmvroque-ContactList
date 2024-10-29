import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context)
	console.log(store.demo)



	return 
	<div >
		<link to={"/"}></link>
	</div>
};
