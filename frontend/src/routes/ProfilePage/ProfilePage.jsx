import Layout from "components/Layout/Layout";
import Profile from "components/Profile/Profile";
import React from "react";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="site-layout-content">
        Profile page
        <Profile />
      </div>
    </Layout>
  );
}

export default ProfilePage;
