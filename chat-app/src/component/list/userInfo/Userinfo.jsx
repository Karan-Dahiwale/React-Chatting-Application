import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="Avatar" />
        <h2>karan</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="More options" />
        <img src="./video.png" alt="Video" />
        <img src="./edit.png" alt="Edit" />
      </div>
    </div>
  );
};

export default UserInfo;
