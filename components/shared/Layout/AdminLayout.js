import Link from 'next/link';

import AdminBar from '../MainContent/AdminBar';

export default class AdminLayout extends React.Component {
  render() {
    const { user, loginPage } = this.props;
    console.log('User:', user);

    return (
      <div className="admin-app">
        <AdminBar user={user} />

        <section id="admin-area">
          {!loginPage ? (
            <div className="nav-section">
              <nav>
                <ul>
                  <li>
                    <Link href="/admin/profile">
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/blog">
                      <a>Blog Posts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/profile">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          ) : null}
          <div className="bg-overlay">{this.props.children}</div>
        </section>
      </div>
    );
  }
}
