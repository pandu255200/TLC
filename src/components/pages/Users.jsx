import React, { useState } from "react";
import "../styles/usermanagement.css";
import AddUserModal from "../pages/UserModal";

import {
  Search,
  Pencil,
  Trash2,
  ChevronDown,
  CircleHelp,
  HelpCircle,
} from "lucide-react";

const Users = () => {
  const [openModal, setOpenModal] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  // SEARCH + FILTER STATES
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedShift, setSelectedShift] = useState("");

  // USERS STATE
  const [users, setUsers] = useState([
    {
      id: "U12547",
      name: "Sagar Kumar",
      role: "Operator",
      shift: "Shift 1",
      status: "Active",
    },
    {
      id: "U123348",
      name: "Sita Patel",
      role: "Operator",
      shift: "Shift 2",
      status: "Inactive",
    },
    {
      id: "U13467",
      name: "Amit Sharma",
      role: "Operator",
      shift: "Shift 2",
      status: "Active",
    },
    {
      id: "U13288",
      name: "Swetha Patil",
      role: "Admin",
      shift: "Shift 3",
      status: "Inactive",
    },
    {
      id: "U33357",
      name: "Vikram Kumar",
      role: "Admin",
      shift: "Shift 1",
      status: "Active",
    },
  ]);

  // DELETE
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  // ADD USER
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // EDIT USER
  const handleEditUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user,
    );

    setUsers(updatedUsers);
  };

  // FILTERED USERS
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = selectedRole === "" || user.role === selectedRole;

    const matchesStatus =
      selectedStatus === "" || user.status === selectedStatus;

    const matchesShift = selectedShift === "" || user.shift === selectedShift;

    return matchesSearch && matchesRole && matchesStatus && matchesShift;
  });

  return (
    <div className="users-page">
      {/* MODAL */}
      {openModal && (
        <AddUserModal
          closeModal={() => setOpenModal(false)}
          isEdit={isEdit}
          selectedUser={selectedUser}
          handleAddUser={handleAddUser}
          handleEditUser={handleEditUser}
        />
      )}

      {/* Header */}
      <div className="users-header">
        <div className="header-left">
          <span className="menu-text">Menu /</span>

          <h2>User Management</h2>
        </div>
      </div>

      {/* FILTERS */}
      <div className="users-controls">
        {/* SEARCH */}
        <div className="search-box">
          <Search size={16} className="search-icon" />

          <input
            type="text"
            placeholder="Search by ID or Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ROLE */}
        <div className="select-box">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Role</option>

            <option value="Admin">Admin</option>

            <option value="Operator">Operator</option>
          </select>

          <ChevronDown size={14} />
        </div>

        {/* STATUS */}
        <div className="select-box">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Status</option>

            <option value="Active">Active</option>

            <option value="Inactive">Inactive</option>
          </select>

          <ChevronDown size={14} />
        </div>

        {/* SHIFT */}
        <div className="select-box">
          <select
            value={selectedShift}
            onChange={(e) => setSelectedShift(e.target.value)}
          >
            <option value="">Shift</option>

            <option value="Shift A">Shift 1</option>

            <option value="Shift B">Shift 2</option>

            <option value="Shift C">Shift 3</option>
          </select>

          <ChevronDown size={14} />
        </div>
        <button
          className="add-user-btn"
          onClick={() => {
            setOpenModal(true);
            setIsEdit(false);
            setSelectedUser(null);
          }}
        >
          + Add User
        </button>
      </div>

      {/* TABLE */}
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Role</th>
              <th>Shift</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, i) => (
                <tr key={i}>
                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.role}</td>

                  <td>{user.shift}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        user.status === "Active" ? "active" : "inactive"
                      }`}
                    >
                      {user.status}

                      <span className="dot"></span>
                    </span>
                  </td>

                  <td className="action-icons">
                    {/* EDIT */}
                    <Pencil
                      size={15}
                      onClick={() => {
                        setOpenModal(true);
                        setIsEdit(true);
                        setSelectedUser(user);
                      }}
                    />

                    {/* DELETE */}
                    <Trash2 size={15} onClick={() => handleDelete(user.id)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-users">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* HELP BUTTON */}
      <div className="help-button">
        <HelpCircle className="help-icon" strokeWidth={1.2} size={24} />
      </div>
    </div>
  );
};

export default Users;
