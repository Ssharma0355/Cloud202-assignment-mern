import { Home, LayoutDashboard, StickyNote } from 'lucide-react';
import Sidebar, { SidebarItem } from './components/Sidebar';


function App() {
  return (
    <div>
      <Sidebar>
        <SidebarItem icon={<Home size={20} text="Home" alert />} />
        <SidebarItem
          icon={<LayoutDashboard size={20} text="Dashboard" alert />}
        />
        <SidebarItem
          icon={<StickyNote size={20} text="Notes" alert />}
        />
      </Sidebar>
    </div>
  );
}

export default App;
