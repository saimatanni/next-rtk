"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";
import { useEffect } from "react";

const ApiUsers = () => {
  const userApiData = useSelector((data) => data.userInfo.userApiData || []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);

  return (
    <div className="display-user">
      <h3>Api Users </h3>
      {userApiData?.users?.map((item) => (
        <div key={item.id} className="user-item">
          <span>{item.username}</span>
          {/* <button onClick={() => handleRemoveUser(item.id)}>remove</button> */}
        </div>
      ))}
    </div>
  );
};

export default ApiUsers;
