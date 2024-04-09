import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
         <div>
  <p>
    Thank you for taking on the important role of managing our blood bank. Your dedication and commitment are crucial in ensuring that our blood donation efforts are successful and that we can continue to save lives.
    <br /><br />
    As the administrator, you have access to various features and functionalities that allow you to efficiently manage the operations of the blood bank. From managing donor records to coordinating blood drives, your responsibilities play a vital role in supporting our community's health and well-being.
    <br /><br />
    <strong>Key Features:</strong>
  </p><ol>
    <li>Donor Management: Keep track of donor information, including contact details, blood type, and donation history.</li>
    <li>Inventory Management: Monitor blood supply levels, track expiration dates, and manage inventory replenishment.</li>
    <li>Appointment Scheduling: Coordinate donation appointments and ensure a smooth donation process for both donors and staff.</li>
    <li>Reporting and Analytics: Generate reports on donation trends, inventory levels, and operational efficiency to make informed decisions.</li>
    <li>Communication Tools: Communicate with donors, volunteers, and staff through email updates, newsletters, and event notifications.</li>
  </ol>
  We are confident that with your expertise and dedication, our blood bank will continue to thrive and make a positive impact in our community. Thank you for your invaluable contribution to our mission of saving lives through blood donation.
  <br /><br />
  <p />
</div>

        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;