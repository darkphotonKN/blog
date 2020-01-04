const AdminBar = ({ user }) => {
  if (user)
    return <div className="admin-bar text-right">歡迎回來, {user.name}</div>;

  return <div className="admin-bar text-right">你好, Guest</div>;
};

export default AdminBar;
