import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Barcode,
  Settings,
  Logs,
  LayoutList,
  Users,
} from "lucide-react";

function Navigation() {
  return (
    <div className="mt-15 flex h-full flex-col gap-4">
      <Item icon={<LayoutDashboard size={24} strokeWidth={1.5} />}>
        Dashboard
      </Item>
      <Item className="icon" icon={<Barcode size={24} strokeWidth={1.5} />}>
        Products
      </Item>
      <Item icon={<LayoutList size={24} strokeWidth={1.5} />}>Categories</Item>
      <Item icon={<Logs size={24} strokeWidth={1.5} />}>Orders</Item>
      <Item icon={<Users size={24} strokeWidth={1.5} />}>Users</Item>
      <Item icon={<Settings size={24} strokeWidth={1.5} />}>Settings</Item>
    </div>
  );
}

function Item({ children, icon }) {
  return (
    <NavLink
      to={`/${children.toLowerCase()}`}
      className="flex cursor-pointer items-center gap-3"
    >
      <span id="sidebar-icon" className="text-gray-400">
        {icon}
      </span>
      <span id="sidebar-text" className="text-gray-500">
        {children}
      </span>
    </NavLink>
  );
}

export { Navigation };
