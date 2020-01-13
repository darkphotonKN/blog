import Link from 'next/link';

const AdminBar = ({ user }) => {
  if (user)
    return (
      <div className="admin-bar ">
        <div className="title text-left">
          <Link href="/">Go to Blog</Link>
        </div>
        <div className="text-right user">歡迎回來, {user.name}</div>
      </div>
    );

  return <div className="admin-bar text-right">你好, Guest</div>;
};

export default AdminBar;
