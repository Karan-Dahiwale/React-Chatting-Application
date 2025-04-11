import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>karan</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="title">
          <span>Privacy & Help</span>
          <img src="./arrowDown.png" alt="" />
        </div>

        <div className="title">
          <span>Chat Photos</span>
          <img src="./arrowUp.png" alt="" />
        </div>

        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt=""
              />
              <span>photo_2025_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt=""
              />
              <span>photo_2025_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt=""
              />
              <span>photo_2025_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>

        <div className="title">
          <span>Shared Files</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>

      <button>Block User</button>
      <button className="logout">logout</button>
    </div>
  );
};

export default Detail;
