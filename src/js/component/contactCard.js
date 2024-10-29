import React from "react";
import { Link } from "react-router-dom";


export default function ContactCard(props) {

    return (
      <div className="card" style={{"width": "18rem;"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.email} </p>
          <p className="card-text">{props.breed} </p>
          <p className="card-text">{props.gender} </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
}