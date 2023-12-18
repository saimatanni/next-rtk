"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const RemoveUser = () => {
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };
  const userdata = useSelector((data) => data.userInfo.userdata || []);

  return (
    <div className="add-user">
      <h2>Remove User</h2>
      {userdata.map((item) => (
        <div key={item.id} className="user-item">
          <span>{item.name}</span>
          <button onClick={() => handleRemoveUser(item.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default RemoveUser;
