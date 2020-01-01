import AdminBar from '../MainContent/AdminBar';

export default class AdminLayout extends React.Component {
  render() {
    const { user } = this.props;
    console.log('User:', user);

    return (
      <div className="admin-app">
        <AdminBar user={user ? user : { name: 'Guest' }} />
        <div className="bg-overlay">{this.props.children}</div>
      </div>
    );
  }
}
