"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import Link from "next/link";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const userDispatch = () => {
    dispatch(addUser(name));
    setName("");
  };
  return (
    <div className="add-user">
      <h3>Display User</h3>
      <input
        type="text"
        value={name}
        placeholder="Add new user"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch}>Add user</button>
      <br />
      <Link href="/removeuser">Remove user</Link>
      <br />
      <Link href="/todolist">Todo Page</Link> 
      <br />
      <Link href="/apiusers">Apiusers Page</Link>
    </div>
  );
};

export default AddUser;
