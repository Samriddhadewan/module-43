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
      <nav>
        <div  onClick={() =>setOpen(!open)} className="text-4xl md:hidden">
        
            {
            open === true ? <IoIosMenu></IoIosMenu>: <CgClose ></CgClose>  
            } 
        
        </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
