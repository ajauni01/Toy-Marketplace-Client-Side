import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from 'react-icons/fa';
import auth from "../FireBase/Firebase.config";
import Footer from "../Pages/Shared/Footer/Footer";


const SingIn = () => {
  const navigate = useNavigate()
  const { user, signIn } = useContext(AuthContext)
  const provider = new GoogleAuthProvider();


  const handleSignIn = event => {
    // prevent the browser from going back to the default setting
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log('Register form info', email, password)

    // call the  signIn function to complete the current user sign in procedure
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        // show the successful sign in message
        Swal.fire({
          title: 'Success!',
          text: 'Successfully Signed In',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // re-set the form after a successful sign in
        form.reset()
        // navigate the user to the home page after a successful sign in
        navigate("/")
      })

      .catch(error => {
        console.error(error.mess
        )
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
  }

  // function to handle google sign in
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log('Pop Up User', user)
        // show the successful sign in message
        Swal.fire({
          title: 'Success!',
          text: 'Successfully Signed In',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // navigate the user to the home page after a successful sign in
        navigate("/")
      })
      .catch(error => {
        console.error(error.mess
        )
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
  }
  console.log('Context API User', user)


  return (
    <div>
      <div>
        <NavBar></NavBar>
        <form onSubmit={handleSignIn}>
          <div className="hero min-h-screen bg-blue-400">
            <div className="hero-content flex-col lg:flex-row">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Please Sign In!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">



                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary"> Sign In</button>
                  </div>
                  <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary"><FaGoogle className="me-2 text-3xl" />  SignIn With Google</button>
                  </div>

                  <p>New to EnjoyToy? <Link to="/signUp"> <button className="btn btn-link">Sign Up</button></Link></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingIn;