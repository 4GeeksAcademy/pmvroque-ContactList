import React from "react";
import { Link } from "react-router-dom";


export default function ContactCard(props) {

    return (
      
      <div className="card" style={{"width" : "18rem"}}> 
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {props.user?.name}</h5>
          <p className="card-text">Phone: {props.user?.phone}</p>
          <p className="card-text">Email: {props.user?.email}</p>
          <p className="card-text">Address: {props.user?.address}</p>
          <Link to={'/updateContact'} href="#" className="btn btn-primary mx-2">
            Update
          </Link>
          <a href="#" className="btn btn-primary mx-2">
            delete
          </a>
        </div> 
      </div>
      
    );
}