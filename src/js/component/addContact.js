import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const AddContact = () => {
  const {user, setUser} = useState({"name" : "", "phone" : "", "email": "", "address": ""})
  const {actions, store} = useContext(Context)
  const navigate = useNavigate()


  const createContact = async () => {
        let response = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque/contacts",
        {
        type: "string",
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        })
        let data = await response.json()
        createContact()
        navigate("/")

      }
      
      
      
      
  
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Name
        </span>
        <input
        onChange={(e) => setUser({"name" : e.target.value, "phone": user.phone,  "email": user.email, "address": user.address})}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Email
        </span>
        <input
        onChange={(e) => setUser({"name" : user.name, "phone": user.phone, "email": e.target.value, "address": user.address})}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Phone
        </span>
        <input
        onChange={(e) => setUser({"name" : user.name,  "phone": e.target.value, "email": user.email, "address": user.address})}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Address
        </span>
        <input
        onChange={(e) => setUser({"name" : user.name,  "phone": user.phone, "email": user.email, "address": e.target.value})}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button className="btn btn-info" onClick={() => createContact()}>Create Contact</button>
    </div>
  );
};
