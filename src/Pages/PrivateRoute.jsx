import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  // extract the necessary variables using context API
  const { user, loading } = useContext(AuthContext)

  // show the progress bar to the during while fetching data
  if (loading) {
    return <progress className="progress progress-primary w-56" value="70" max="100"></progress>
  }
  if (user) {
    return children
  }

  // change the state to take the user to the last browsed page after a successful login
  return <Navigate to="/signIn" state={{ from: location }} replace={true}></Navigate>

};

export default PrivateRoute;