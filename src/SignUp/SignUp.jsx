import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Footer from "../Pages/Shared/Footer/Footer";

const SignUp = () => {

  const { user, createUser } = useContext(AuthContext)
  console.log('Current User after auth change', user)
  const navigate = useNavigate()

  const handleRegister = event => {
    // prevent the browser from going back to the default setting
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value
    console.log('Register form info', name, email, password, photoUrl)

    // call the createUser function to complete new user sign up process
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        // show the successful sign up
        Swal.fire({
          title: 'Success!',
          text: 'Successfully Signed Up',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // re-set the form after a successful registration
        form.reset()
        // navigate the user to the home page after a successful registration
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

  return (
    <div>
      <NavBar></NavBar>
      <form onSubmit={handleRegister}>
        <div className="hero min-h-screen bg-blue-400">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Sign Up!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" name="name"
                    className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" placeholder="photo url" name="photoUrl" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>


                <p>Already have an account? <Link to="/signIn"> <button className="btn btn-link">Sign In</button></Link></p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;