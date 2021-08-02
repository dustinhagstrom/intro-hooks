import { useState } from "react";

//below is a way to perform useState dynamically.
//the argument is the initial state of the value
//return in an array the value, the onChange func,
//and the clearInput func. This allows destructuring
//of these and then use as we see fit.
function CustomHooksUsingArrayFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e);
  }

  function clearInput() {
    setValue("");
  }

  function greetUser() {
    alert("Hi, " + value);
  }

  function showValue() {
    console.log(value);
  }

  return [value, onChange, clearInput, greetUser, showValue];
}

export default CustomHooksUsingArrayFormat;
