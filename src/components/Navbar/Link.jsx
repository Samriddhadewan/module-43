import React from "react";

export const Link = ({route}) => {
  return (
    <div>
      <li className="mr-3">
        <a href={route.route}>{route.name}</a>
      </li>
    </div>
  );
};
