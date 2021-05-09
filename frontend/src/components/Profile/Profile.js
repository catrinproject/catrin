import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faVenusMars } from "@fortawesome/free-solid-svg-icons";

console.log(Date.now());

const Profile = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector((store) => store.authReducer);
  const { profile } = useSelector((store) => store.profileReducer);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);
  return (
    <Fragment>
      {!profile ? (
        <h1>
          No profile found (yet)... Create one:{" "}
          <Link to="/edit-profile">New profile</Link>
        </h1>
      ) : (
        <Fragment>
          <div className="profile-grid my-1">
            <h1>
              <FontAwesomeIcon icon={faAddressCard} /> My profile{" "}
              <Link to="/edit-profile">(Edit)</Link>
            </h1>
            <h3>
              <b>Name: </b>
              {authReducer.user.name}
            </h3>
            <h3>
              <b>Gender: </b>
              {profile.gender ? profile.gender : "[-]"}
            </h3>
            <h3>
              <b>Born: </b>
              {profile.gender ? <TimeAgo date={profile.birthday} /> : "[-]"}
            </h3>
            <h3>
              <b>Height: </b>
              {profile.height ? <>{profile.height} cm</> : "[-]"}
            </h3>
            <h3>
              <b>Sports:</b>
              {profile.sports
                ? profile.sports.map((sport) => <li>{sport}</li>)
                : "[-]"}
            </h3>
            <h3>
              <b>Location: </b>
              {profile.location ? profile.location : "[-]"}
            </h3>
            <h3>
              <b>About:</b>
              <br />
              {profile.bio ? profile.bio : "[-]"}
            </h3>
            <h3>
              {profile.social ? <b>Social accounts:</b> : ""}
              {profile.social.instagram ? (
                <>
                  <br />
                  <FontAwesomeIcon icon={faInstagram} size="lg" />{" "}
                  <a
                    href={
                      "http://www.instagram.com/" + profile.social.instagram
                    }
                  >
                    {profile.social.instagram}
                  </a>
                </>
              ) : (
                ""
              )}

              {profile.social.facebook ? (
                <>
                  <br />
                  <FontAwesomeIcon icon={faFacebook} size="lg" />{" "}
                  <a
                    href={"http://www.facebook.com/" + profile.social.facebook}
                  >
                    {profile.social.facebook}
                  </a>
                </>
              ) : (
                ""
              )}

              {profile.social.twitter ? (
                <>
                  <br />
                  <FontAwesomeIcon icon={faTwitter} size="lg" />{" "}
                  <a href={"http://www.twitter.com/" + profile.social.twitter}>
                    {profile.social.twitter}
                  </a>
                </>
              ) : (
                ""
              )}

              {profile.social.youtube ? (
                <>
                  <br />
                  <FontAwesomeIcon icon={faYoutube} size="lg" />{" "}
                  <a href={"http://www.youtube.com/" + profile.social.youtube}>
                    {profile.social.youtube}
                  </a>
                </>
              ) : (
                ""
              )}
            </h3>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
