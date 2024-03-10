import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "./SettingsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from 'react';
import Nav from "./components/Nav";


function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const handleNotificationToggle = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  const [email, setemail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = () => {
    // Perform save logic here
    console.log("Saving changes...");
  };

  return (
    <div className="split-pageSP">
      <Nav/>
      <div className="left">
        <h1>Edit Profile</h1>
        <div className="form-container1">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="emailAddress">Email address</label>
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
    <div className="right">
      <h1>Change Password</h1>
      <div className="login-detailsSP">
        <div className="form-containerSP">
          <label htmlFor="currentPassword">Current password</label>
          <input
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <label htmlFor="newPassword">New password</label>
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <h1>Notifications</h1>
        <div className="notifications">
          <div className="notification">
            <p>Notifications</p>
          </div>
          <div className="toggle-switch">
            <input type="checkbox" id="switch"  checked={notificationsEnabled} onChange={handleNotificationToggle} /><label htmlFor="switch">Toggle Notifications</label>
          </div>
        </div>
        <div className="button-containerSP">
          <button onClick={handleSave} className="save-button">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SettingsPage;


  