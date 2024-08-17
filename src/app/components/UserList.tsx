import React, { useState } from "react";
import { Profile } from "../../type";
import { useStore } from "@/store/useStore";

interface UserListProps {
  users: Profile[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const { setUsers, country, plans } = useStore();
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const [emailSearchTerm, setEmailSearchTerm] = useState("");

  const handleEmailSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/userList?email=${emailSearchTerm}&country=${countrySearchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      setUsers(data);
    } catch (error) {}
  };
 
  return (
    <div className="container mx-auto p-4 bg-transparent min-h-[100vh] mb-16 rounded-lg shadow">
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-4">
          <select
            value={countrySearchTerm}
            onChange={(e) => setCountrySearchTerm(e.target.value)}
            className="w-full sm:w-1/3 p-2 outline-none  rounded bg-zinc-800 shadow"
          >
            <option value="All">All</option>
            {country &&
              country.map((e, i) => {
                return (
                  <option value={`${e.country}`} key={i}>
                    {" "}
                    {e.country}{" "}
                  </option>
                );
              })}
          </select>

          <input
            type="text"
            value={emailSearchTerm}
            onChange={handleEmailSearch}
            placeholder="Search by Email"
            className="w-full sm:w-1/3 p-2 outline-none bg-zinc-800 rounded shadow"
          />
          <button
            className="bg-zinc-800 px-5 py-2 rounded shadow"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center bg-zinc-900 p-4 rounded">
        <div className="w-full sm:w-1/6 font-bold">User Name</div>
        <div className="w-full sm:w-1/3 font-bold">Email</div>
        <div className="w-full sm:w-1/6 font-bold">Registration</div>
        <div className="w-full sm:w-1/6 font-bold">Status</div>
        <div className="w-full sm:w-1/6 font-bold">Plan</div>
      </div>

      {/* User List */}
      <div className="divide-y ">
        {users &&
          users.map((user, index) => (
            <div
              key={user._id}
              className={`flex flex-wrap justify-between border-t border-t-zinc-700 items-center p-4 bg-zinc-800 my-2 rounded shadow ${
                index % 2 === 0 ? "cardAnimation1" : "cardAnimation2"
              } blurAnimation `}
            >
              {/* <div className="w-full sm:w-1/5">
            <img src="https://via.placeholder.com/48" alt="User Image" className="rounded-full object-cover w-12 h-12 mx-auto sm:mx-0" />
            </div> */}
              <div className="w-full sm:w-1/6 "> {user.name} </div>
              <div className="w-full sm:w-1/3 "> {user.email} </div>
              <div className="w-full sm:w-1/6 ">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </div>{" "}
              <div className="w-full sm:w-1/6 ">Premium</div>
              <div className="w-full  sm:w-1/6  ">
                <select
                  className="bg-zinc-800"
                  name=""
                  id=""
                  onChange={async(e)=>{
                   
                    try {
                      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/userList/${user._id}`, {
                        method: 'PUT',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          planId: e.target.value
                        }),
                      });
                
                      if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                
                      // Optionally, handle successful update (e.g., show a notification or refresh data)
                    } catch (error) {
                      console.error('Error updating user plan:', error);
                      // Optionally, handle the error (e.g., show an error message)
                    }
                  }}
                >
                  <option>
                    {
                      plans.find((p) => p.planId === parseInt(user.planId, 10))
                        ?.planTitle
                    }{" "}
                  </option>
                  {plans &&
                    plans.map((p, i) => {
                      return (
                        <option value={`${p.planId}`}> {p.planTitle} </option>
                      );
                    })}
                </select>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
