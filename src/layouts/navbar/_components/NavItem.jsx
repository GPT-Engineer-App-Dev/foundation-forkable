import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-green-800 dark:text-green-100"
          : "text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-100",
        className,
      )
    }
  >
    {children}
  </NavLink>
);