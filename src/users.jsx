import { useState } from "react";
export function Users() {
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  console.log(isEditing);
  function addUser() {
    const newUser = { ...user, id: count };
    setUsers([...users, newUser]);
    setCount((p) => p + 1);
    setUser({
      id: "",
      username: "",
      email: "",
      password: "",
    });
  }
  function updateUser() {
    {
      const updateUser = users.map((u) => {return(u.id === user.id ? user : u)});
      console.log(updateUser);
      console.log(user);
      setUsers(updateUser);
      setIsEditing(false);
      setUser({
        id: "",
        username: "",
        email: "",
        password: "",
      });
    }
  }
  function editUser(id) {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setUser(userToEdit);
      console.log(userToEdit);
      setIsEditing(true);
    }
  }
  function deleteUser(id) {
    const filteredData = users.filter((user) => user.id !== id);
    setUsers(filteredData);
  }

  return (
    <>
      <div className="user-container">
        <h2>Register</h2>
        <div className="user-form">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="input"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="user-form">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="user-form">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div className="button">
          {isEditing ? (
            <button onClick={updateUser}>Update</button>
          ) : (
            <button onClick={addUser}>Register</button>
          )}
        </div>
      </div>
      {users.length > 0 && (
        <div className="user-table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button
                      className="button"
                      onClick={() => editUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="button"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
