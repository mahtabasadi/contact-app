import "./ContactAdd.css";
import { useState } from "react";
import addOneContacts from "../../sevices/PushContactHandeler";
const ContactAdd = ({ history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandeler = (e) => {
    console.log(e.target.value);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory !");
    }
    e.preventDefault();
    try {
      await addOneContacts(contact);
      setContact({ name: "", email: "" });
      history.push("/");
    } catch (error) {}
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label>name</label>
        <input
          type="text"
          // id="inputName"
          name="name"
          value={contact.name}
          onChange={changeHandeler}
        />
      </div>
      <div className="formControl">
        <label>email</label>
        <input
          type="text"
          // id="inputEmail"
          name="email"
          value={contact.email}
          onChange={changeHandeler}
        />
      </div>
      <button type="submit"> add contact </button>
    </form>
  );
};

export default ContactAdd;
