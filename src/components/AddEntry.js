import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/AddEntry.css'

const AddEntry = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();


    AddNewEntry({ name, number }) ?
      (
        alert("Data Updated Successfully")

      ) :
      (alert("Error Updating Data"))


    setName('')
    setNumber('')
  }

  //Add Data
  const AddNewEntry = async (contact) => {
    let id = -1
    const contacts = await (await fetch('http://localhost:5000/contacts')).json()

    contacts.map((temp) => id = temp.id)
    contact.id = id + 1;

    await fetch(
      'http://localhost:5000/contacts',
      {
        method: 'POST',
        headers: { "content-type": "Application/json" },
        body: JSON.stringify(contact)

      }
    )
    return true;
  }

  return (
    <div id="mainArea2">

      <div className="form-group" id="profilegroup">
        <form onSubmit={onSubmit}>
          <h2 id="heading">Create New Contact</h2>

          <label>Contact Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />

          <br />
          <label>Contact Number</label>
          <input type="text" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Phone Number" required />

          <br />
          <button className="btn btn-outline-dark">Add Contact</button>
        </form>
      </div>

      <br />
      <br />
      <hr />
      <h4>
        <Link to="/">Home Page</Link>
      </h4>
    </div>


  )
}

export default AddEntry