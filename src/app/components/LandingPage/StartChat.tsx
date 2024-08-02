import React from "react";

const StartChat = () => {
  return (
    <div className="container m-auto px-28 mb-11">
      <div
        style={{ background: "#F5C5B0" }}
        className="rounded p-7 flex justify-between items-center"
      >
        <div className="">
          <p className="text-zinc-600 font-semibold text-sm">Got a question?</p>
          <h2 className="text-zinc-800  font-semibold text-lg">
            Our virtual assistant is here to help, ask us anything about
            ChannelCrawler
          </h2>
        </div>
        <div className="">
          <button className="border hover:bg-black hover:text-white flex border-black rounded py-4 font-semibold text-black px-5">Start a chat <span className="ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
					<path d="M4.25895 17.0936C3.14076 15.2086 2.74916 12.9802 3.15768 10.8269C3.56621 8.67365 4.74675 6.74356 6.47764 5.39909C8.20853 4.05462 10.3707 3.38826 12.5581 3.52514C14.7455 3.66202 16.8078 4.59273 18.3575 6.1425C19.9073 7.69226 20.838 9.75448 20.9749 11.9419C21.1118 14.1293 20.4455 16.2915 19.101 18.0224C17.7565 19.7533 15.8264 20.9338 13.6732 21.3424C11.5199 21.7509 9.29149 21.3593 7.40649 20.2411L7.40651 20.241L4.29808 21.1292C4.16947 21.1659 4.03338 21.1676 3.90391 21.134C3.77443 21.1005 3.65628 21.0329 3.5617 20.9384C3.46713 20.8438 3.39956 20.7256 3.36601 20.5961C3.33246 20.4667 3.33415 20.3306 3.37089 20.202L4.25901 17.0935L4.25895 17.0936Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M12 13.625C12.6213 13.625 13.125 13.1213 13.125 12.5C13.125 11.8787 12.6213 11.375 12 11.375C11.3787 11.375 10.875 11.8787 10.875 12.5C10.875 13.1213 11.3787 13.625 12 13.625Z" fill="currentColor"></path>
					<path d="M7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="currentColor"></path>
					<path d="M16.5 13.625C17.1213 13.625 17.625 13.1213 17.625 12.5C17.625 11.8787 17.1213 11.375 16.5 11.375C15.8787 11.375 15.375 11.8787 15.375 12.5C15.375 13.1213 15.8787 13.625 16.5 13.625Z" fill="currentColor"></path>
				</svg>
            
            
            
            </span></button>
        </div>
      </div>
    </div>
  );
};

export default StartChat;
