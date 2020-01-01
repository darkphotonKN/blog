import Link from 'next/link';
import Date from '../MainContent/Date';

class Nav extends React.Component {
  state = {
    currentURL: ''
  };

  componentDidMount() {
    this.setState({
      currentURL: window.location.pathname
    });
  }
  render() {
    const { currentURL } = this.state;

    console.log('Url:', currentURL);

    return (
      <div className="row nav-bar">
        <div className="col-md-7 col-12 nav-date">
          <Date />
        </div>
        <div className="col-md-5 col-12 text-center">
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="list-item">
                <Link prefetch href="/">
                  <a className={currentURL === '/' ? 'active' : ''}>Blog</a>
                </Link>
              </li>
              <li className="list-item">
                <Link prefetch href="/about">
                  <a className={currentURL === '/about' ? 'active' : ''}>
                    About
                  </a>
                </Link>
              </li>
              <li className="list-item">
                <Link prefetch href="/contact">
                  <a className={currentURL === '/contact' ? 'active' : ''}>
                    Contact
                  </a>
                </Link>
              </li>

              {/* Intagram */}
              <li className="list-item">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>

              {/* Facebook */}
              <li className="list-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
