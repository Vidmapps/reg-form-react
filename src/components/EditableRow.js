import React, { useContext } from "react";
import UsersContext from "../store/users-context";
import Button from "./UI/Button";

const EditableRow = () => {
  const usersCtx = useContext(UsersContext);

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={usersCtx.editUserData.name}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={usersCtx.editUserData.email}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter city"
          name="city"
          value={usersCtx.editUserData.city}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter name"
          name="street"
          value={usersCtx.editUserData.street}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter house number"
          name="houseNumber"
          value={usersCtx.editUserData.houseNumber}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="Enter zip code"
          name="zipCode"
          value={usersCtx.editUserData.zipCode}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td></td>
      <td>
        <Button type="submit" onClick={usersCtx.onEditSave}>
          Save
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
