import { useState } from "react";
import "./Card.css";

const Card = ({ users }) => {
  const [followStatus, setFollowStatus] = useState({});

  const handleFollow = (userName) => {
    setFollowStatus((prevStatus) => ({
      ...prevStatus,
      [userName]: !prevStatus[userName],
    }));
  };
  return users.map((user) => (
    <div
      key={user.userName}
      className={`card ${user.isAdminUser ? "admin-card" : ""}`}
    >
      <div className="card-content">
        <img
          src={user.profileImg}
          alt={`Avatar de ${user.userName}`}
          className="card-avatar"
        />
        <div className="card-details">
          <h5 className="card-title">{user.userName}</h5>
          <p className="card-text">{user.description}</p>
        </div>
      </div>
      <a
        style={{ marginTop: "-50px" }}
        className="btn btn-primary"
        onClick={() => handleFollow(user.userName)}
      >
        {followStatus[user.userName] ? "Dejar de seguir" : "Seguir"}
      </a>
    </div>
  ));
};

export default Card;
