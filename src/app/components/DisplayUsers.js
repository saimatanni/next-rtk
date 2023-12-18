"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const userdata = useSelector((data) => data.userInfo.userdata || []);
 
 
  console.log("userdata", userdata);
  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <div className="display-user">
      <h3>User list</h3>
      {userdata?.map((item) => (
        <div key={item.id} className="user-item">
          <span>{item.name}</span>
          <button onClick={() => handleRemoveUser(item.id)}>remove</button>
        </div>
      ))}
      
    </div>
  );
};

export default DisplayUsers;
