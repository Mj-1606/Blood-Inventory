import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx  mt-4">
          <h1>
            Welcome  <i className="text-success">{user?.name}</i>
          </h1>
          <hr />
          <p>
          <h3>Manage all Records by navigating to different data-list on left sidebar </h3>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
