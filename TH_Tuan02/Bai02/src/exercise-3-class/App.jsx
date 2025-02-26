import { use, useState } from "react"
import ListContact  from "./ListContact"

function App() {
  const [listContact, setListContact] = useState([
    {
      id: 1,
      firstName: 'Chidi',
      lastName: 'Anagonye',
      phone: '555-366-8987',
      address: "St. Join's University, Sydney, Australia"
    },
    {
      id: 2,
      firstName: 'Eleanor',
      lastName: 'Shellstrop',
      phone: '555-483-1457',
      address: "335 Avalon St, Apt 2C, Pheonix, Arizona"
    },
    {
      id: 3,
      firstName: 'Tahani',
      lastName: 'AI-Jamil',
      phone: '555-276-7991',
      address: "1 Lancaster Terrace, London, England"
    },
    {
      id: 4,
      firstName: 'Jason',
      lastName: 'Mendoza',
      phone: '555-113-8388',
      address: "799 William St, Miami, Florida"
    }
  ]);

  function handleDelete(id){
      const listContactClone = listContact.filter((contact) => contact.id !== id)
      setListContact(listContactClone);
  }

  function handleDeleteAll(){
    setListContact([]);
  }
  return (
    <>
      <ListContact listContact = {listContact} handleDelete = {handleDelete} handleDeleteAll = {handleDeleteAll}></ListContact>
    </>
  )
}

export default App
