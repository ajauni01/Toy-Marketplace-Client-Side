import './NavBar.css'
import logo from '../../../../public/icon.jpeg'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navItems = <>
    <li><a>Home</a></li>
    <li><a>All Toys</a></li>
    <li><a>My Toys</a></li>
    <li><a>Add A Toy</a></li>
    <li><a>Blogs</a></li>
  </>
  return (
    <div className="navbar bg-blue-500 hover:bg-blue-600 text-xl ">
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
            <img src={logo} />
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
        <Link to="/signIn"><a className="btn">Sign In</a></Link>
      </div>
    </div>
  );
};

export default NavBar;