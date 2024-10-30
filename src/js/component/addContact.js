import React, { useState } from "react";
import { useNavigate } from "react-router";


export const AddContact = () => {
  const [user, setUser] = useState({name: "", phone: "", email: "", address: ""})
  const navigate = useNavigate()


  const createContact = async () => {
    
        let response = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque/contacts",
        {
        
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        
        })
        let data = await response.json()
        navigate("/")

      }
      

  return (
    <div>
      
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Name
        </span>
        <input
        onChange={(e) => setUser(
          (prvUser) => ({...prvUser, name: e.target.value})
        )}
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
        onChange={(e) => setUser(
          (prvUser) => ({...prvUser, email: e.target.value})
        )}
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
        onChange={(e) => setUser(
          (prvUser) => ({...prvUser, phone: e.target.value})
        )}
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
        onChange={(e) => setUser(
          (prvUser) => ({...prvUser, address: e.target.value})
        )}
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
