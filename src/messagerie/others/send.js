import React, { useEffect, useState } from "react";
import { MdRvHookup } from "react-icons/md";
import { useDispatch } from "react-redux";
import { MessageUser } from "../../Redux/Actions/dataAction";
import { ReadMsg } from "../../Redux/Actions/dataAction";

const Send = (props) => {
  const [Message, setMessage] = useState();
  const dispatch = useDispatch();

  const send = () => {
    const message = {
      sourceName: "mohand",
      body: Message,
      imageUrl: "",
      convId: props.convId,
    };
    MessageUser(dispatch, message);
    setMessage("");
  };
  const focus = () => {
    let infos = {
      convId: props.convId,
      username: "mohand",
    };
    ReadMsg(dispatch, infos);
  };

  return (
    <div className=" px-2 pt-2 sm:mb-0">
      <div className="relative flex">
        <div className="absolute inset-y-0 flex items-center">
          <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
        <input
          type="text"
          value={Message}
          onFocus={focus}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Something"
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-700 placeholder-gray-600 pl-12 bg-gray-100 rounded-full py-2"
        />
        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            onClick={() => send()}
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Send;
