import React from "react";

const MenuItem = ({ node }) => {
  return (
    <li className="ml-4">
      <a href={node.value.link} className="block text-blue-600 hover:underline">
        {node.value.title}
      </a>

      {node.children.length > 0 && (
        <ul className="ml-4 border-l pl-2">
          {node.children.map((child, index) => (
            <MenuItem key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
