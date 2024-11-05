import React, { useState, useContext }from 'react'
import { Context } from "../store/appContext";
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const UpdateContact = () => {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate()
  const userData =  store.updateUserData
  const [user, setUser] = useState({id: id, name: userData.name, phone: userData.phone, email: userData.email, address: userData.address})
  const {id} = useParams()

  const updateContact = async (user, name) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque/contacts/" + id, {

      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    let data = await response.json()
    setUser({...user, name})
    navigate("/")
  }
  
  return (
      <div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Name
          </span>
          <input
          value={user.name}
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
            value={user.email}
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
            value={user.phone}
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
            value={user.address}
            onChange={(e) => setUser(
              (prvUser) => ({...prvUser, address: e.target.value})
            )}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            
          />
        </div>
        <button onClick={(e)=> updateContact(user)} href="#" className="btn btn-primary mx-2">
            Update
          </button>
      </div>
    );
}

