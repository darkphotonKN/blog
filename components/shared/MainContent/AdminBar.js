const AdminBar = ({ user }) => {
  return <div className="admin-bar text-right">Welcome back, {user.name}</div>;
};

export default AdminBar;
