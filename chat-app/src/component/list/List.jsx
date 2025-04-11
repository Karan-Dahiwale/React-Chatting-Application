import "./list.css";
import Userinfo from "./userInfo/Userinfo";
import ChatList from "./chatList/Chatlist";

const list = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};

export default list;
