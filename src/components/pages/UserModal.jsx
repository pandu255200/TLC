import React, { useState } from "react";
import "./usermodal.css";
import { X } from "lucide-react";

const AddUserModal = ({ closeModal, isEdit }) => {
  const [isActive, setIsActive] = useState(isEdit ? true : false);

  return (
    <div className="modal-overlay">
      <div className="user-modal">
        {/* Header */}
        <div className="modal-header">
          <h3>{isEdit ? "Edit User" : "Add User"}</h3>

          <button className="close-btn" onClick={closeModal}>
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="modal-form">
          <div className="form-group">
            <label>User ID</label>

            <input
              type="text"
              placeholder="Enter user ID"
              defaultValue={isEdit ? "U12347" : ""}
            />
          </div>

          <div className="form-group">
            <label>User Name</label>

            <input
              type="text"
              placeholder="Enter user name"
              defaultValue={isEdit ? "Ravi Kumar" : ""}
            />
          </div>

          <div className="form-group">
            <label>Role</label>

            <select defaultValue={isEdit ? "Operator" : ""}>
              <option value="" disabled>
                Select Role
              </option>

              <option>Admin</option>
              <option>Operator</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>

            <div className="status-toggle-wrapper">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => setIsActive(!isActive)}
                />

                <span className="slider"></span>
              </label>

              <span
                className={`status-text ${isActive ? "active" : "inactive"}`}
              >
                {/* {isActive ? "Active" : "Inactive"} */}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default AddUserModal;
