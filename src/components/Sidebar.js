import { Link } from "react-router-dom";
import { Home, Layers, LayoutDashboard, StickyNote } from "lucide-react";

export const SidebarItem = ({ icon, text, to }) => {
  return (
    <li className="p-2 hover:bg-gray-700 rounded">
      <Link to={to} className="flex items-center gap-2 text-white">
        {icon}
        {text}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-52 bg-gray-800 text-white h-screen p-4 ">
      <nav>

        <ul>
          <SidebarItem icon={<Home size={20} />} text="Home" to="/" />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            to="/dashboard"
          />
          <SidebarItem
            icon={<StickyNote size={20} />}
            text="Notes"
            to="/notes"
          />
          <SidebarItem icon={<Layers size={20} />} text="Layers" to="/layers" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
