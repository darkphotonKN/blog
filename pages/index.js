import ReactPagination from 'react-paginate';

import Layout from '../components/shared/Layout/Layout';
import BlogPost from '../components/shared/MainContent/BlogPost';

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
    posts: []
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
      <Layout subtitle={'最新文章'} sidebar>
        <div className="blog-post-list">
          {posts
            ? posts.map((post) => (
                <BlogPost
                  key={post._id}
                  id={post._id}
                  date={post.date}
                  content={post.content}
                  title={post.title}
                />
              ))
            : null}

          {/* <Pagination /> */}
        </div>
      </Layout>
    );
  }
}

export default Index;
