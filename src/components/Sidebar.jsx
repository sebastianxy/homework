import React from "react";
import MenuItem from "./MenuItem";

const Sidebar = ({ tree }) => {
  const root = tree.getRoot();

  return (
    <aside className="w-64 bg-gray-100 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-3">{root.value.title}</h2>
      <ul>
        {root.children.map((child, index) => (
          <MenuItem key={index} node={child} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
