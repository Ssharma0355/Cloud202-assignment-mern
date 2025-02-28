import { ChevronFirst, ChevronRight } from 'lucide-react';
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
        <ul className='flex-1 px-3'>{children}</ul>
      </nav>
    </aside>
  );
}


export function SidebarItem({icon, text, active, alert}){
return(
    <li>
        {icon}
        <span>{text}</span>
    </li>
)
}