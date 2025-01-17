import { Link } from "./Link";

const Navbar = () => {

    const routes = [
        { id: 1, name: "Home", route: "/home" },
        { id: 2, name: "About", route: "/about" },
        { id: 3, name: "Services", route: "/services" },
        { id: 4, name: "Contact", route: "/contact" },
        { id: 5, name: "Profile", route: "/profile" }
      ];
      
  return (
    <div>

    <ul className="md:flex">
    {
        routes.map(route => <Link key={route.id} route={route}></Link>)
    }
    </ul>


    </div>
  )
}

export default Navbar