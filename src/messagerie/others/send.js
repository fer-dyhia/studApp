import React, { useEffect, useState } from "react";
import { MdRvHookup } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MessageUser } from "../../Redux/Actions/dataAction";
import { ReadMsg } from "../../Redux/Actions/dataAction";
import {MdSend} from "react-icons/md"
import {BsImageFill} from "react-icons/bs"

const Send = (props) => {
  const [Message, setMessage] = useState();
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.user)
  console.log(user.credentials.username)

  const send = () => {
    const message = {
      sourceName: user.credentials.username,
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
          <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white focus:outline-none">
            <BsImageFill/>
          </button>
        </div>
        <input
          type="text"
          value={Message}
          onFocus={focus}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrivez votre message ..."
          className="w-full focus:outline-none placeholder-gray-400 focus:placeholder-gray-300 text-gray-700 placeholder-gray-600 px-10 bg-gray-100 rounded-full py-2"
        />
        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            onClick={() => send()}
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-lg text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white focus:outline-none"
          >
            <MdSend/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Send;
