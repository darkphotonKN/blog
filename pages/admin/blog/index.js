import Link from 'next/link';
import Router from 'next/router';

import AdminLayout from '../../../components/shared/Layout/AdminLayout';
import withAuthentication from '../../../components/HOC/withAuthentication';
import { fetchData } from '../../../api/helper';

class BlogIndex extends React.Component {
  state = {
    blogPosts: null
  };

  async componentDidMount() {
    const blogPosts = await fetchData('/api/posts');

    this.setState({
      blogPosts
    });
  }

  render() {
    const { blogPosts } = this.state;

    console.log('BlogPosts:', blogPosts);

    return (
      <AdminLayout user={this.props.user}>
        <Link href="/admin/blog/add">
          <button className="add-new-btn">新增</button>
        </Link>

        {blogPosts
          ? blogPosts.map((post, index) => (
              <div className="post mt-4">
                <div className="post-no">Post {index + 1}</div>
                <div className="title">Title: {post.title}</div>
                <div className="date">Date: {post.date}</div>
                <div className="content-title">Content</div>
                <div className="content-detail">{post.content}</div>
              </div>
            ))
          : null}
      </AdminLayout>
    );
  }
}

export default withAuthentication(BlogIndex);
