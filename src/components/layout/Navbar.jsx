import { Link } from "react-router-dom";
import Button from "../common/Button";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="WiseKing Clinic" className="h-10" />
          <span className="text-xl font-bold text-blue-600">
            WiseKing MediTrack
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#doctors" className="hover:text-blue-600">Doctors</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
