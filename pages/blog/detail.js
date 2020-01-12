import Layout from '../../components/shared/Layout/Layout';
import BlogPostFull from '../../components/shared/MainContent/BlogPostFull';

import { fetchData } from '../../api/helper';

export default class BlogDetail extends React.Component {
  static async getInitialProps(context) {
    const { req } = context;
    console.log('Request:', req);
    const { id } = context.query;

    const { data } = fetchData(`http://localhost:3069/api/posts/${id}`);

    return {
      id,
      post: data
    };
  }

  render() {
    const { id, post } = this.props;

    console.log('Blog Post:', post);
    return (
      <Layout>
        <div className="blog-detail">
          {post ? (
            <BlogPostFull
              content={post.content}
              title={post.title}
              date={post.date}
            />
          ) : (
            <BlogPostFull noContent />
          )}
        </div>
      </Layout>
    );
  }
}
