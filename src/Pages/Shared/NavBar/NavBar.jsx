import './NavBar.css'
import logo from '../../../../public/icon.jpeg'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isHovered, setIsHovered] = useState(false);
  console.log('Context API User', user)

  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><a>All Toys</a></li>
    {user?.displayName ? <> <li><a>My Toys</a></li>
      <li><a>Add A Toy</a></li></> : <> </>
    }
    <li><Link to="/blogs">Blogs</Link></li>
  </>

  // function to handle ser sign out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // show the successful sign out message
        Swal.fire({
          title: 'Success!',
          text: 'Successfully Signed Out',
          icon: 'success',
          confirmButtonText: 'Ok'
        })

      })
      .catch((error) => {
        console.error(error.mess
        )
        // show the error message
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
  }


  return (
    <div className="navbar bg-blue-500  text-xl ">



      {/* navbar-starts */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
            {
              navItems
            }
          </ul>
        </div>

        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Link to="/"><img src={logo} /></Link>
          </div>
        </div>
        <a className="btn btn-ghost normal-case text-5xl">EnjoyToy</a>
      </div>
      {/* navbar-center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          {
            navItems
          }
        </ul>
      </div>
      {/* navbar-ends */}
      <div className="navbar-end">
        {user?.displayName ? (
          <div
            className="avatar me-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >


            <div className={`w-20 me-3 rounded-full ${isHovered ? 'ring ring-primary ring-offset-base-100 ring-offset-2' : ''}`}>
              <img src={user.photoURL} alt="User Avatar" />
            </div>
            {isHovered && <span className='p-5'>{user.displayName}</span>}


            <button onClick={handleSignOut} className="btn me-2 mt-4 ">Sign Out</button>
          </div>
        ) : (
          <Link to="/signIn">
            <button className="btn">Sign In</button>
          </Link>
        )}
      </div>
    </div>

  );
};

export default NavBar;