import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav className=" flex gap-40 lg:flex justify-between mt-4">
            <img className="w-44" src="https://i.ibb.co/p3Q5qvP/Logo.png" alt="" />
       <ul className="flex gap-5 mt-4 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
