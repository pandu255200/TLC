import React, { useState } from "react";
import "./usermodal.css";
import { X } from "lucide-react";

const AddUserModal = ({
  closeModal,
  isEdit,
  selectedUser,
  handleAddUser,
  handleEditUser,
}) => {
  const [userData, setUserData] = useState({
    id: selectedUser?.id || "",
    name: selectedUser?.name || "",
    role: selectedUser?.role || "",
    shift: selectedUser?.shift || "Shift A",
    status: selectedUser?.status || "Active",
  });

  const [isActive, setIsActive] = useState(
    selectedUser?.status === "Active" || false,
  );

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const finalUser = {
      ...userData,
      status: isActive ? "Active" : "Inactive",
    };

    if (isEdit) {
      handleEditUser(finalUser);
    } else {
      handleAddUser(finalUser);
    }

    closeModal();
  };

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
          {/* USER ID */}
          <div className="form-group">
            <label>User ID</label>

            <input
              type="text"
              name="id"
              placeholder="Enter user ID"
              value={userData.id}
              onChange={handleChange}
            />
          </div>

          {/* USER NAME */}
          <div className="form-group">
            <label>User Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter user name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          {/* ROLE */}
          <div className="form-group">
            <label>Role</label>

            <select name="role" value={userData.role} onChange={handleChange}>
              <option value="" disabled>
                Select Role
              </option>

              <option value="Admin">Admin</option>

              <option value="Operator">Operator</option>
            </select>
          </div>

          {/* SHIFT */}
          <div className="form-group">
            <label>Shift</label>

            <select name="shift" value={userData.shift} onChange={handleChange}>
              <option value="Shift A">Shift A</option>

              <option value="Shift B">Shift B</option>

              <option value="Shift C">Shift C</option>
            </select>
          </div>

          {/* STATUS */}
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
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
