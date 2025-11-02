import { Outlet } from "react-router";

import { Header } from "../../features/header/Header";
import { Sidebar } from "../../features/sidebar/Sidebar";

function Layout() {
  return (
    <main className="grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-gray-50">
      <Sidebar />
      <Header />
      <div className="bg-gray-200/40 p-15 dark:bg-gray-900">
        <Outlet />
      </div>
    </main>
  );
}

export { Layout };
