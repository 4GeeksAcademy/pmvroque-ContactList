import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const UpdateContact = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({id: id, name: "", phone: "", email: "", address: ""})
  const {id} = useParams

  const updateContact = async (user) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/pmvroque/contacts/0", {

      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    let data = await response.json()
    setUser({...user, name:})
    navigate("/")
  }
  
  return (
      <div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Name
          </span>
          <input
          onChange={(e) => setUser(
            (prvUser) => ({...prvUser, name: e.target.value})
          )}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Email
          </span>
          <input
            onChange={(e) => setUser(
              (prvUser) => ({...prvUser, email: e.target.value})
            )}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Phone
          </span>
          <input
            onChange={(e) => setUser(
              (prvUser) => ({...prvUser, phone: e.target.value})
            )}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Address
          </span>
          <input
            onChange={(e) => setUser(
              (prvUser) => ({...prvUser, address: e.target.value})
            )}
            type="text"
            class="form-control"
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

