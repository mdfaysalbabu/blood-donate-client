import { ReactNode } from "react";
import { FaBars } from "react-icons/fa";

const DashboardDrawer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn bg-red-700 drawer-button lg:hidden absolute top-1 left-1 btn-xs text-white"
        >
          <FaBars size={16} />
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-pink-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;
