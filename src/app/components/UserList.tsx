import React from "react";
import { Profile } from "../../type";
interface UserListProps {
  users: Profile[];
}
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="container mx-auto p-4 bg-transparent min-h-[100vh] mb-16 rounded-lg shadow">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center bg-zinc-900 p-4 rounded">
        <div className="w-full sm:w-1/6 font-bold">User Name</div>
        <div className="w-full sm:w-1/3 font-bold">Email</div>
        <div className="w-full sm:w-1/6 font-bold">Registration</div>
        <div className="w-full sm:w-1/6 font-bold">Status</div>
        <div className="w-full  sm:w-1/6  font-bold">Plan</div>
      </div>

      {/* User List */}
      <div className="divide-y ">
        {users &&
          users.map((user, index) => (
            <div
              key={user._id}
              className={`flex flex-wrap justify-between border-t border-t-zinc-700 items-center p-4 bg-zinc-800 my-2 rounded shadow ${index % 2 ===0 ? "cardAnimation1":"cardAnimation2"} blurAnimation `}
            >
              {/* <div className="w-full sm:w-1/5">
            <img src="https://via.placeholder.com/48" alt="User Image" className="rounded-full object-cover w-12 h-12 mx-auto sm:mx-0" />
            </div> */}
              <div className="w-full sm:w-1/6 ">
                {" "}
                {user.name}{" "}
              </div>
              <div className="w-full sm:w-1/3 ">
                {" "}
                {user.email}{" "}
              </div>
              <div className="w-full sm:w-1/6 ">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </div>{" "}
              <div className="w-full sm:w-1/6 ">
                Premium
              </div>
              <div className="w-full  sm:w-1/6  ">
                Active
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
