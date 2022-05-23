import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className=" bg-[#effaf0] p-5 ">
    <ul className="flex max-w-5xl mx-auto items-center ">
      <li className="text-lg font-bold mr-auto">myMoney</li>
      <li className="mr-4">
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
