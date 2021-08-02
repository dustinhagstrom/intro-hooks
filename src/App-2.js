import React, { useState } from "react";

import "./App.css";

function CustomHooksUsingObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  //since clear input is not a recognized prop on a DOM element we cannot use spread operator to add props to input fields below
  function clearInput() {
    setValue("");
  }

  return { value, onChange, clearInput };
}

function App() {
  function handleOnSubmit(e) {
    e.preventDefault();

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
  }

  const {
    value: firstName,
    onChange: firstNameOnChange,
    clearinput: firstNameClearInput,
  } = CustomHooksUsingObjectFormat("");
  const {
    value: lastName,
    onChange: lastNameOnChange,
    clearinput: lastNameClearInput,
  } = CustomHooksUsingObjectFormat("");
  const {
    value: email,
    onChange: emailOnChange,
    clearinput: emailClearInput,
  } = CustomHooksUsingObjectFormat("");
  const {
    value: phone,
    onChange: phoneOnChange,
    clearinput: phoneClearInput,
  } = CustomHooksUsingObjectFormat("");

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        {/* if we did not have a custom prop then we could use the spread operator to transfer the props all at once */}
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={firstNameOnChange}
          clearinput={firstNameClearInput}
        />
        <br />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={lastNameOnChange}
          clearinput={lastNameClearInput}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={emailOnChange}
          clearinput={emailClearInput}
        />
        <br />
        <input
          type="tel"
          placeholder="enter contact number"
          value={phone}
          onChange={phoneOnChange}
          clearinput={phoneClearInput}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
