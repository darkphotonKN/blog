export default class AdminLayout extends React.Component {
  render() {
    return (
      <div className="admin-app">
        <div className="bg-overlay">{this.props.children}</div>
      </div>
    );
  }
}
