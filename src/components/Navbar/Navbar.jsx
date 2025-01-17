import { useState } from "react";
import { Link } from "./Link";
import { IoIosMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";


const Navbar = () => {

    const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, name: "Home", route: "/home" },
    { id: 2, name: "About", route: "/about" },
    { id: 3, name: "Services", route: "/services" },
    { id: 4, name: "Contact", route: "/contact" },
    { id: 5, name: "Profile", route: "/profile" },
  ];

  return (
      <nav className=" bg-emerald-600 px-6">
        <div  onClick={() =>setOpen(!open)} className="text-4xl md:hidden">
        
            {
            open === true ? <CgClose ></CgClose> : <IoIosMenu></IoIosMenu>  
            } 
        
        </div>
      <ul className={`md:flex duration-1000  bg-emerald-600 absolute md:static md:w-full md:py-6 text-white px-4 ${open ? ' top-10 ':' -top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;