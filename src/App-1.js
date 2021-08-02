import React from "react";
import CustomHooksUsingArrayFormat from "./hooks/inputHooks";

import "./App.css";

function App() {
  //pass in empty string, basically we are assigning a variable
  //name to the 'value' from CustomHooksUsingArrayFormat --> "firstName"
  //and destructuring at the same time.
  //DESTRUCTURING SECTION BELOW
  const [
    firstName,
    firstNameOnChange,
    clearFirstNameInput,
    greetUserByFirstName,
  ] = CustomHooksUsingArrayFormat("");

  const [lastName, lastNameOnChange, clearLastNameInput, , showLastName] =
    CustomHooksUsingArrayFormat("");

  const [email, emailOnChange, clearEmailInput] =
    CustomHooksUsingArrayFormat("");

  const [phone, phoneOnChange, clearPhoneInput] =
    CustomHooksUsingArrayFormat("");

  //Calling functions to handle specific values we destructured.
  function handleOnSubmit(e) {
    e.preventDefault();
    greetUserByFirstName();
    showLastName();
    clearFirstNameInput();
    clearLastNameInput();
    clearEmailInput();
    clearPhoneInput();
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => firstNameOnChange(e.target.value)}
          // onChange={firstNameOnChange}
        />
        <br />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => lastNameOnChange(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => emailOnChange(e.target.value)}
        />
        <br />
        <input
          type="tel"
          placeholder="enter contact number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" //figure out how to auto add dashes upon user input
          value={phone}
          onChange={(e) => phoneOnChange(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// The beginning way to use React Hooks
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");

// function handleOnSubmit(e) {
//   e.preventDefault();

//   console.log(firstName);
//   console.log(lastName);
//   console.log(email);
//   console.log(phone);
// }

export default App;
