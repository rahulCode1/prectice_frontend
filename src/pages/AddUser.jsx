import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const [selectFile, setSelectFile] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevStat) => ({ ...prevStat, [name]: value }));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectFile(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("image", selectFile);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/addUser`,
        formData,
      );
      setUserData(initialState);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <input
          type="file"
          accept=".jpg,.png,.jpeg"
          name="image"
          onChange={handleFileSelect}
        />
      </div>
      <button type="submit">Submit </button>
    </form>
  );
};

export default AddUser;
