import { Form } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const userData = Object.fromEntries(formData);

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        userData,
      );
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
      console.log(err.response.data?.message);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
      </div>

      <button type="submit">Submit </button>
    </Form>
  );
};

export default Login;
