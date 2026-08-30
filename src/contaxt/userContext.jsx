import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);
export default useUserContext;

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`, {
          headers: {
            Authorization: `Beared ${token}`,
          },
        });
        setUsers(res.data.users);
      } catch (err) {
        console.log(err);
        console.log(err.response.data.message);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <UserContext.Provider value={{ users: users }}>
      {children}
    </UserContext.Provider>
  );
};
