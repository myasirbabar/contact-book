import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import Table from "./Table"

const Home = () => {
    const[contacts,setContacts] = useState([])

    //Loading Data from JSON Server
    useEffect(()=>{
        const getContacts = async ()=>{
            setContacts(await fetchContacts())
        }

        getContacts()
    }
        ,[])

    //fetch Contacts 
    const fetchContacts = async ()=>{
        return await(await fetch('http://localhost:5000/contacts')).json()
    }

    //Delete Contact
    const DeleteContact = async (id)=>{
        await fetch('http://localhost:5000/contacts/'+id, {method:'DELETE'})

        setContacts(await fetchContacts())
    }

    return (
    <div id="Home">
        <button className="btn btn-outline-light" type="button"><Link to='/new'><b>Add New Entry</b></Link></button>
        
        <Table contacts={contacts} onDelete={DeleteContact}/>
        <Footer />
    </div>
  )
}

export default Home