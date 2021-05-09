import Layout from "components/Layout/Layout";
import EditProfile from "components/Profile/EditProfile";
import React from "react";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="site-layout-content">
        <EditProfile />
      </div>
    </Layout>
  );
}

export default ProfilePage;
