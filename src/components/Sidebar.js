import { ChevronFirst, ChevronLast, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.svg'
export default function Sidebar({ children }) {
  return (
    <aside className="h-screen w-64 fixed bg-white border-r shadow-sm">
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src={logo} alt="logo" className='w-22' />
          <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            <ChevronFirst /> 
          </button>
        </div>
        <ul className='flex-1 px-3 pt-4'>{children}</ul>
      </nav>
    </aside>
  );
}

export function SidebarItem({icon, text, active, alert}){
return (
  <li
    className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group 
    ${
      active
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-800 text-white"
        : "hover:bg-indigo-50 text-gray-600"
    }`}
  >
    {icon}
    <span className="w-52 ml-3">{text}</span>
  </li>
);
}