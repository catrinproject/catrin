import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const { Option } = Select;
const { TextArea } = Input;

const initialState = {
  gender: "",
  height: "",
  birthday: "",
  sports: "",
  location: "",
  bio: "",
  instagram: "",
  facebook: "",
  twitter: "",
  youtube: "",
};

const EditProfilePage = ({ createProfile, getCurrentProfile, history }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector((store) => store.authReducer);
  const { profile } = useSelector((store) => store.profileReducer);
  const [formData, setFormData] = useState(initialState);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  //   useEffect(() => {
  //     dispatch(getCurrentProfile());
  //   }, []);

  useEffect(() => {
    // if (!profile) getCurrentProfile();
    if (profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.sports))
        profileData.sports = profileData.sports.join(", ");
      setFormData(profileData);
    }
  }, [getCurrentProfile, profile]);

  const {
    gender,
    height,
    birthday,
    sports,
    location,
    bio,
    instagram,
    facebook,
    twitter,
    youtube,
  } = formData;

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 2 },
  };

  return (
    <Fragment>
      <h1>
        <FontAwesomeIcon icon={faUser} /> Add or update your profile
      </h1>
      <Form {...layout} name="profile" initialValues={{ remember: true }}>
        <Form.Item name="gender" label="Gender">
          <Select
            placeholder={profile.gender ? profile.gender : "Select gender"}
            allowClear
            onChange={handleInputChange}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Date of birth"
          name="birthday"
          onChange={handleInputChange}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item label="Height" name="height">
          <Input
            placeholder={
              profile.height
                ? profile.height
                : "Enter your height in centimeters"
            }
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Sports" name="sports">
          <Input
            placeholder={
              profile.sports
                ? profile.sports.map((sport) => " " + sport)
                : "Enter your sports separated with comma"
            }
            onChange={handleInputChange}
          />
        </Form.Item>{" "}
        <Form.Item label="Location" name="location">
          <Input
            placeholder={
              profile.location ? profile.location : "Enter your location"
            }
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="About" name="bio">
          <TextArea
            placeholder={profile.bio ? profile.bio : "Enter your bio"}
            onChange={handleInputChange}
          />
        </Form.Item>{" "}
        <h3></h3>
        <Button onClick={() => toggleSocialInputs(!displaySocialInputs)}>
          Add Social Network User Names
        </Button>
        {displaySocialInputs && (
          <Fragment>
            <Form.Item label="Instagram" name="instagram">
              <Input
                placeholder={
                  profile.social.instagram
                    ? profile.social.instagram
                    : "Enter your instagram user name"
                }
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Facebook" name="facebook">
              <Input
                placeholder={
                  profile.social.facebook
                    ? profile.social.facebook
                    : "Enter your Facebook user name"
                }
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Twitter" name="twitter">
              <Input
                placeholder={
                  profile.social.twitter
                    ? profile.social.twitter
                    : "Enter your Twitter user name"
                }
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="YouTube" name="youtube">
              <Input
                placeholder={
                  profile.social.youtube
                    ? profile.social.youtube
                    : "Enter your YouTube user name"
                }
                onChange={handleInputChange}
              />
            </Form.Item>
          </Fragment>
        )}
        <Form.Item {...tailLayout}>
          <Button type="primary" onSubmit={handleSubmit}>
            Submit
          </Button>
        </Form.Item>{" "}
      </Form>
      <Link to="/profile">Go Back</Link>
    </Fragment>
  );
};

export default EditProfilePage;
