import React, { Fragment, useContext } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import UsersContext from "../store/users-context";

import styles from "./UsersList.module.scss";

const UsersList = () => {
  const usersCtx = useContext(UsersContext);

  return (
    <div className={styles.userList}>
      <h1>Users list</h1>
      <div className={styles.tableFlow}>
        <form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Street</th>
                <th>House number</th>
                <th>Zip Code</th>
                <th>Coordinates</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersCtx.users.map((user) => (
                <Fragment key={user.id}>
                  {usersCtx.editUserId === user.id ? (
                    <EditableRow />
                  ) : (
                    <ReadOnlyRow user={user} />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UsersList;
