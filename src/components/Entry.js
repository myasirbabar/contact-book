import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Entry = ({ contact,onDelete }) => {
  return (
      <tr>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td ><FaTimes style={{ color: 'red',cursor: 'pointer' }} onClick={() => onDelete(contact.id)} /></td>
      </tr>
  )
}

export default Entry