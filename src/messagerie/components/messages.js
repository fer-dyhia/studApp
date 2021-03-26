import React from "react";
import {useSelector} from "react-redux";
import Message from "./message";
import rcv from "../../img/receiver.jpg";
import f2 from "../../img/friend2.jpg";
import g1 from "../../img/spongebob.png";
import f3 from "../../img/friend3.jpg";
import f4 from "../../img/friend4.jpg";
import f5 from "../../img/friend5.jpg";
import BNewmsg from "../buttons/bnewmsg";

const Messages = (props) => {
  const userData=useSelector((state) => state.user
    
  )
  const users = props.users;
  console.log(users)
  return (
    <div className="">
      <div className="mt-10 mb-10 flex flex-row">
        <p className="flex text-gray-400 justify-start w-4/5 sm:visible invisible">
          Conversations
        </p>
        <div className="flex justify-around sm:w-1/5 -ml-20 sm:-ml-2 md:-ml-1">
          <BNewmsg />
        </div>
      </div>
      <div className="overflow-y-scroll h-screen scrollbar">
        {users.map((user) => {
          const index = user.Users.findIndex((User) => User == userData.credentials.username);
          let Username = user.Users[1 - index];
          console.log(Username);
          return (
            <Message
              username={Username}
              convId={user.convId}
              key={user.convId}
              time="23:19"
              content={user.LastMsg.body}
              img={rcv}
              get_user={(name, img) => props.parentGetUser(name, img)}
              ClickOn={(name) => props.Click(name)}
            />
          );
        })}

        {/* <Message
          name="Friend1"
          time="23:19"
          content="Ahh merci ! j'ai hâte d'y être"
          img={rcv}
        />
        <Message name="Friend2" time="20:52" content="Salut !" img={f2} />
        <Message name="Group1" time="17:00" content="T'es ou ??" img={g1} />
        <Message
          name="Friend3"
          time="12:22"
          content="Yo.. D lawan kan"
          img={f3}
        />
        <Message
          name="Friend4"
          time="Sun  11:46"
          content="C'est bon je suis passée"
          img={f4}
        />
        <Message name="Friend5" time="Fri  07:01" content="Too late" img={f5} /> */}
      </div>
    </div>
  );
};

export default Messages;
