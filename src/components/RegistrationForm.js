import React, { useState, useContext } from "react";
import UsersContext from "../store/users-context";

import styles from "./RegistrationForm.module.scss";
import Button from "./UI/Button";

const RegistrationForm = () => {
  const usersCtx = useContext(UsersContext);

  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
  });

  let initVal = false;

  const addFormHandler = (event) => {
    initVal = false;

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    initVal = true;
    console.log(initVal);
    usersCtx.onAddUser({
      id: Math.random(),
      name: addFormData.name,
      email: addFormData.email,
      city: addFormData.city,
      street: addFormData.street,
      houseNumber: addFormData.houseNumber,
      zipCode: addFormData.zipCode,
    });
  };

  return (
    <div className={styles.alignCenter}>
      <h1>Registration form</h1>
      <form className={styles.formStyle} onSubmit={submitHandler}>
        <h3>User</h3>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Full name"
            className={styles.formControl}
            name="name"
            value={initVal ? "" : addFormData.name}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            className={styles.formControl}
            name="email"
            onChange={addFormHandler}
            required
          />
        </div>
        <h3>Address</h3>
        <div className={styles.formGroup}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="City"
            className={styles.formControl}
            name="city"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            placeholder="Street"
            className={styles.formControl}
            name="street"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="houseNumber">House</label>
          <input
            type="text"
            placeholder="House number"
            className={styles.formControl}
            name="houseNumber"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="zipCode">Zip code</label>
          <input
            type="number"
            placeholder="Zip code"
            className={styles.formControl}
            name="zipCode"
            onChange={addFormHandler}
            required
          />
        </div>
        <div>
          <Button type="submit">Add Customer</Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
