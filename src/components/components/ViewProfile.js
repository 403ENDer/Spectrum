import "../../stylesheets/View.css";
import profile from "../../images/profile.jpeg";
function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img className="profileUserImg" src={profile} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Sagaptham</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
              <div className="profileCounts">
                <p className="count">
                  20 <span>Followers</span>
                </p>
                <p className="count">
                  10 <span>Communities</span>
                </p>
              </div>
            </div>
            <h4 className="profileInfoName">Post</h4>
          </div>
          <div className="profileRightBottom"></div>
        </div>

        <div className="postGlobe">
          {/* ... Implement globe-like layout for post photos here ... */}
          <img
            className="postPhoto"
            src="assets/post/2.jpeg" // Replace with photo URL property
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
