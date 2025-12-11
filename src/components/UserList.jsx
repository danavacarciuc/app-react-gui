import { useEffect, useState } from "react";
import User from "./User";
import "./UserList.css";

const SERVER = "https://app-react-7pu7.onrender.com"; // FIX CORENT

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  const getUsers = async () => {
    try {
      const response = await fetch(`${SERVER}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error("Error loading users:", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map((u) => (
        <div key={u.id} onClick={() => props.onSelectUser(u)}>
          <User item={u} />
        </div>
      ))}
    </div>
  );
}

export default UserList;
