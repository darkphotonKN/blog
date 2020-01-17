import ReactPagination from 'react-paginate';
import moment from 'moment';

import Layout from '../components/shared/Layout/Layout';
import BlogPost from '../components/shared/MainContent/BlogPost';
import Loading from '../components/shared/MainContent/Loading';

import { fetchData } from '../api/helper';

class Index extends React.Component {
  static async getInitialProps() {
    // const blogPosts = await fetchData('/api/posts');

    return {
      // posts,
      // blogPostsa
      blogPosts: []
    };
  }

  state = {
    posts: undefined
  };

  async componentDidMount() {
    const posts = await fetchData('/api/posts');
    this.setState({
      posts
    });
  }

  render() {
    const { blogPosts } = this.props;
    const { posts } = this.state;

    console.log('POSTS:', posts);
    console.log('Blog POSTS:', blogPosts);

    return (
      <Layout subtitle={'Latest Stories'} sidebar>
        <div className="blog-post-list">
          {posts ? (
            posts
              .reverse()
              .map((post) => (
                <BlogPost
                  key={post._id}
                  id={post._id}
                  date={moment(post.date).format('YYYY/MM/DD')}
                  content={post.content}
                  title={post.title}
                />
              ))
          ) : (
            <Loading />
          )}

          {/* <Pagination /> */}
        </div>
      </Layout>
    );
  }
}

export default Index;
