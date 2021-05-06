import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((store) => store.profileReducer);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);
  return (
    <Fragment>
      {!profile ? (
        <h1>No profile found (yet)...</h1>
      ) : (
        <Fragment>
          <div className="profile-grid my-1">
            <h1>{profile.company}</h1>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
