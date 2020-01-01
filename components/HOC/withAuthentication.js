import Link from 'next/link';

import { logoutUser } from '../../utils/auth';
import AdminLayout from '../../components/shared/Layout/AdminLayout';

import { checkUserAuthenticated } from '../../utils/auth';

const withAuthentication = (WrappedComponent) => {
  return class AuthenticatedComponent extends React.Component {
    static async getInitialProps() {
      // get wrapped component's getInitialProps
      let componentProps = {};

      if (WrappedComponent.getInitialProps) {
        componentProps = await WrappedComponent.getInitialProps();
      }

      // return those props
      return {
        ...componentProps
      };
    }

    state = {
      authenticatedUser: false
    };

    async componentDidMount() {
      // check for authenticated user from server
      const authenticatedUser = await checkUserAuthenticated();

      this.setState({
        authenticatedUser
      });
    }

    render() {
      const { authenticatedUser } = this.state;

      console.log('Authenticated User:', authenticatedUser);

      // if authenticated, return the wrapped component
      if (authenticatedUser) {
        // pass initial props back to wrapped component
        return <WrappedComponent {...this.props} user={authenticatedUser} />;
      }
      // else show error message and request log in
      else {
        return (
          <AdminLayout>
            <div className="pt-5">您未登入, 請登入後在回到這一頁</div>
            <div className="mt-5">
              <a href="javascript:;" onClick={() => logoutUser()}>
                登入
              </a>
            </div>
            <div className="mt-5">
              <Link href="/">
                <a>首頁</a>
              </Link>
            </div>
          </AdminLayout>
        );
      }
    }
  };
};

export default withAuthentication;
