import React, { useState } from "react";
import { results } from "../../data/userList.json";
import { User } from "./User/User";
import { BlogList } from "../BlogList/BlogList";

import "./UserList.css";

export const UserList = () => {
  const [selected, setSelected] = useState(false);
  const onClick = () => setSelected(!selected);
  return (
    <div className="container row">
      <button onClick={onClick}> Switch view</button>
      {selected
        ? results.map((user, index) => (
            <User
              imgOfUser={user.picture.thumbnail}
              firstName={user.name.first}
              email={user.email}
              dateOfBirth={user.dob.date}
              index={index}
            />
          ))
        : results.map((user, index) => (
            <BlogList
              imgOfUser={user.picture.large}
              firstName={user.name.first}
              email={user.email}
              dateOfBirth={user.dob.date}
              index={index}
            />
          ))}
    </div>
  );
};
