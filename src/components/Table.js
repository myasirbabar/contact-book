import './css/Table.css'
import Entry from './Entry'

const Table = ({ contacts, onDelete }) => {
  return (
    <div id="mainArea">

      <h3 id="mainheading">All Contacts</h3>
      <hr />
      <table className="table table-bordered table-dark" style={{ "fontSize": 15 }}>
        <thead>
          <tr>
            <th scope="col">Serial Number</th>
            <th scope="col">Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) => (
              <Entry key={contact.id} contact={contact} onDelete={onDelete} />
            ))

          }
        </tbody>
      </table>
    </div>
  )
}

export default Table