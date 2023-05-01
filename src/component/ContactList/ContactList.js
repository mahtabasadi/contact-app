import React, { useEffect, useState } from "react";
import "./ContactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import getContacts from "../../sevices/GetContactsServices";
import deleteOneContacts from "../../sevices/DeleteContactHandler";
const ContactList = (props) => {
const [contacts ,setContacts]=useState(null)
const [AllContacs , setAllcontacs] = useState(null)
const [SearchTerm , setSearchTerm]=useState('')
useEffect(()=>{
  const fetchContacts = async () => {
    const {data} = await getContacts()
    setContacts(data)
    setAllcontacs(data)
  }
  try{fetchContacts()}
  catch (err) {}
},[])

  
  const deleteContactHandeler = async (id) => {
    try {
      const FilteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(FilteredContacts);
      setAllcontacs(AllContacs)
      await deleteOneContacts(id);
    } catch (error) {console.log('error...');}
  };

  const searchHandeler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    if (search !== '') {
      const FilteredContacts = AllContacs.filter((c)=>{
        return Object.values(c)
        .join(" ")
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
  
      })
      setContacts(FilteredContacts)
    } else {
      setContacts(AllContacs)
    }

  }

  return (
    <>
      <section className="ListWrapper">
        <div className="contactList">
          <div className="listHeader">
            <h2>Contacts</h2>
            <Link to="/add">
              <button>Add</button>
            </Link>
          </div>
          <div>
            <input type={'text'} value={SearchTerm} onChange={searchHandeler}/>
          </div>
          {contacts ? contacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} onDelete={deleteContactHandeler} />;
          }) : <p>Loading...</p>}
        </div>
      </section>
    </>
  );
};

export default ContactList;

