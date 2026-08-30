import { useLoaderData } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const user = useLoaderData();

  return (
    <>
      <h1>User details </h1>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </>
  );
};

export default UserDetails;

export const loader = async ({ request, params }) => {
  const userId = params.id;

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/${userId}`,
    );
    const userDetails = res.data.user;
    return userDetails;
  } catch (err) {
    console.log(err);
    console.log(err.response.data.message);
  }
};
