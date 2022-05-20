import css from "styled-jsx/css";
import { GoLocation } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { GoLink } from "react-icons/go";

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-image-wrapper {
    width: 100%;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
    border-radius: 50%;
  }
  .profile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 25px;
  }
  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }
  .profile-user-infp {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .profile-user-info-text {
    margin-left: 6px;
  }
`;

const Profile = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <>
      <div className="profile-box">
        <div className="profile-image-wrapper">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt={`${user.name} profile image`}
          />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-bio">{user.bio}</p>
        {user.location ? (
          <p className="profile-user-info">
            <GoLocation size={16} color="#6a737d" />
            <span className="profile-user-info-text">{user.location}</span>
          </p>
        ) : null}
        {user.email ? (
          <p className="profile-user-info">
            <GoMail size={16} color="#6a737d" />
            <span className="profile-user-info-text">{user.email}</span>
          </p>
        ) : null}
        {user.blog ? (
          <p className="profile-user-info">
            <GoLink size={16} color="#6a737d" />
            <span className="profile-user-info-text">{user.blog}</span>
          </p>
        ) : null}
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Profile;
