import logo from '../../../../public/icon.jpeg'
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (



    <footer className="footer p-10 bg-blue-500">
      <div>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={logo} />
          </div>
        </div>

        <p className='font-bold text-xl'>EnjoyToy Industries Ltd </p>
        <p> High Quality Toy Zone since 1992</p>
        <p>© 2023 EnjoyToy Industries Ltd. All rights reserved. </p>
      </div>

      <div>
        <span className="font-bold text-xl">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="font-bold text-xl">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>


      <div>
        <span className="font-bold text-xl">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a><FaTwitter className='text-3xl hover:text-blue-700' /></a>
          <a><FaYoutube className='text-3xl hover:text-red-700' /></a>

          <a><FaFacebook className='text-3xl hover:text-blue-900' /></a>
        </div>
        <div>
          <p> | Address: 123 Main Street, Los Angeles, California, 90001</p> <p>| Phone: (123) 456-7890</p> <p>| Email: info@enjoyToy.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;