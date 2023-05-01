import "./App.css";
import { Route, Switch } from "react-router-dom";
import ContactAdd from "./component/ContactAdd/ContactAdd";
import contactDetail from "./component/contactDetail/contactDetail";
import ContactList from "./component/ContactList/ContactList";
import EditContact from "./component/ContactEdit/ContactEdit"

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={contactDetail} />
        <Route path="/add" component={ContactAdd} />
        <Route path="/" component={ContactList} />
      </Switch>
    </div>
  );
}

export default App;

