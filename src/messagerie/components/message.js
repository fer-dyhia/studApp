import React from "react";
const Message = (props) => {
  const name = props.convId;
  const img = props.img;
  const username = props.username;
  console.log(username);

  return (
    <div className="flex flex-col sm:shadow-md shadow-none font-medium px-2 py-2 mb-2  transition duration-700 ease-in-out text-gray-700 hover:text-gray-600 rounded bg-transparent sm:bg-white hover:bg-gray-200 focus:outline-none ">
      <button
        onClick={() => {
          props.get_user(name, username, img);
          props.ClickOn(name);
        }}
      >
        <div className="flex flex-row justify-between focus:outline-none">
          <img
            alt="profile pic"
            className="rounded-full sm:mx-16 md:mx-0 h-20 w-20 md:h-10 md:w-10 sm:h-14 sm:w-14 ml-2"
            src={props.img}
          />
          <div className="font-semibold text-base invisible md:visible focus:outline-none sm:invisible">
            {props.username}
          </div>

          <div className="text-gray-400 focus:outline-none invisible md:visible sm:invisible">
            {props.time}
          </div>
        </div>
        <div className="flex mt-2 focus:outline-none">
          <div className=" text-sm w-full invisible md:visible sm:visible focus:outline-none">
            {props.content}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Message;
