import { FaHome } from "react-icons/fa";
import {
  MdOutlineNotificationsNone,
  MdPeopleOutline,
  MdSearch,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();
  return (
    <header className="h-[70px] bg-gray-600 shadow-md max-sm:h-auto max-sm:py-3">
      <div className="flex gap-2 items-center h-full w-full max-w-container mx-auto px-1 justify-between max-sm:flex-col">
        <h1 className="text-lg">InstaFire🚀</h1>
        <nav className="flex gap-3 items-center justify-center">
          <Link to={"/"} className="px-4 py-2 rounded-md hover:bg-gray-700">
            <FaHome className="text-2xl" />
          </Link>
          <Link to={"/"} className="px-4 py-2 rounded-md hover:bg-gray-700">
            <MdPeopleOutline className="text-2xl" />
          </Link>
          <Link to={"/"} className="px-4 py-2 rounded-md hover:bg-gray-700">
            <MdOutlineNotificationsNone className="text-2xl" />
          </Link>
        </nav>
        <div className="flex gap-3 items-center">
          <form className="flex bg-gray-700 px-2 py-2 rounded-lg">
            <input
              type="text"
              className="flex-1 border-none bg-transparent outline-none px-2"
              placeholder="Search people.."
            />
            <button>
              <MdSearch className="text-2xl" />
            </button>
          </form>
          <Link to={"/profile"}>
            <img
              className="w-[50px] h-[50px] rounded-full object-cover"
              src={currentUser?.photoURL}
              alt={`${currentUser?.displayName}'s profile picture`}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
