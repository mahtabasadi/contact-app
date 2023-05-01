import { useEffect, useState } from "react";
import getOnContact from "../../sevices/GetOneContact";
import updateContact from "../../sevices/updateContact";
const ContactAdd = ({ history, match }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandeler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory !");
      return;
    }
    e.preventDefault();
    try {
      await updateContact(match.params.id, contact);
      history.push("/");
    } catch (error) {}
  };

  useEffect(() => {
    // const localFetch = async () =>{
    //   try {
    //     const {data} = await getOnContact(match.params.id)
    //     setContact({name:data.name , email:data.email})
    //   } catch (error) {

    //   }
    // }
    // localFetch()

    getOnContact(match.params.id)
      .then((res) => setContact({ name: res.data.name, email: res.data.email }))
      .catch((err) => console.log(err));
  }, []);

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
      <button type="submit"> Edite contact </button>
    </form>
  );
};

export default ContactAdd;
