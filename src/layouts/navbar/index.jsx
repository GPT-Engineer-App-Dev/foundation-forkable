import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-green-50 dark:bg-green-900">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-800 px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;