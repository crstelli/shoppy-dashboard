import { useMutation } from "@tanstack/react-query";
import { User, Moon, Sun, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

import { useDarkMode } from "../../shared/context/useDarkMode";

function Header() {
  const navigate = useNavigate();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      navigate("/");
      toast.success("Logged out successfully.");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { isDark, switchTheme } = useDarkMode();

  return (
    <div className="flex items-center justify-end gap-3 bg-gray-50 px-10 py-4 text-gray-600">
      <div className="size-9 rounded-full bg-emerald-500"></div>
      <h4 className="mr-4 text-gray-700">Giuseppe</h4>
      <Link to="/account">
        <User className="cursor-pointer" />
      </Link>
      <span onClick={switchTheme} className="cursor-pointer">
        {isDark ? <Moon /> : <Sun />}
      </span>
      <LogOut onClick={logout} className="cursor-pointer" />
    </div>
  );
}

export { Header };
