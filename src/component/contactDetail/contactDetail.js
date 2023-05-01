import { Link } from "react-router-dom";

const contactDetail = ({location}) => {
const {contact} = location.state
    return (
    <>
      <p>name:{contact.name}</p>
      <p>email:{contact.email}</p>
      <Link to={'/'}> go to contactList</Link>
    </>
  );
};

export default contactDetail;
