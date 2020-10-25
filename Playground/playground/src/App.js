import React, { useReducer, useState } from 'react';
import styles from './App.css';


const initialState = { name: "", apples: "", quantity: 0, giftwrap: false }
const formReducer = (state, action) => {

  if (action.name === "reset")
    return initialState;

  return {
    ...state,
    [action.name]: action.value
  }
}

const App = () => {

  const [formState, setFormState] = useReducer(formReducer, initialState);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log("Submitting ...")
      setIsFormSubmitting(true);

      setTimeout(() => {
        alert("Submit was completed !");
        setIsFormSubmitting(false);
        resetFormState();
      }, 3000)
    }
    else {
      console.log("Not Submitting ..")
    }

  }

  const resetFormState = () => {
    setFormState({
      name: 'reset'
    });
  }


  const handleChange = e => {

    const val =
      (e.target.type === "checkbox") ? e.target.checked : e.target.value;

    setFormState({
      name: e.target.name,
      value: val,
    });
  }

  const { name, apples, quantity, giftwrap } = formState;

  const disabledCount = apples === "" ? true : false;
  const isFormValid = () => {
    const err = [];

    for (const [name, value] of Object.entries(formState)) {
      if (name === 'giftwrap') continue;

      if (value === initialState[name]) {
        err.push(name)
      }
    }

    setErrors(err);

    return err.length === 0
  };

  return (
    <div className={styles.wrapper}>
      <h1>How About Them Apples</h1>

      {isFormSubmitting && <div>Is form submitting ...</div>}

      {isFormSubmitting &&
        <ul>
          {Object.entries(formState).map(([key, value]) => <li key={key}> {key}: {value.toString()}</li>)}
        </ul>
      }

      <form onSubmit={handleSubmit}>

        <fieldset className={styles.fieldset}>
          <label htmlFor="name">
            <p>Name</p>
            <input id="name" name="name" value={name} onChange={handleChange} />
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="apples">
            <p>Apples</p>
            <select id="apples" name="apples" value={apples} onChange={handleChange}>
              {["Default", "type1", "type2", "type3", "type4"].map((item, key) => <option key={key} value={item}>{item}</option>)}
            </select>
          </label>

          <label htmlFor="quantity">
            <p>Quantity</p>
            <input id="quantity" type="number" value={quantity} disabled={disabledCount} name="quantity" onChange={handleChange} />
          </label>

          <label htmlFor="giftwrap">
            <p>Gift Wrap it ?</p>
            <input id="bag" type="checkbox" checked={giftwrap} name="giftwrap" onChange={handleChange} />
          </label>
        </fieldset>

        {errors.length > 0 && <ul>Errors: {errors.map((err, key) => <li key={key}>{err}</li>)}</ul>}

        <button type="submit" disabled={isFormSubmitting}>Submit</button>
      </form>
    </div >
  );
}

export default App;