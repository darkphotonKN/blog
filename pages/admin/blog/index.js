import Link from 'next/link';
import Router from 'next/router';

import AdminLayout from '../../../components/shared/Layout/AdminLayout';
import withAuthentication from '../../../components/HOC/withAuthentication';
import { fetchData, postData } from '../../../api/helper';

class BlogIndex extends React.Component {
  state = {
    blogPosts: null,

    deletedPost: undefined
  };

  async componentDidMount() {
    const blogPosts = await fetchData('/api/posts');

    this.setState({
      blogPosts
    });
  }

  handleDelete = async (e, id) => {
    // stops event bubbling
    e.stopPropagation();
    const { data } = await postData(`/api/posts/delete/${id}`);

    this.setState({
      deletedPost: data
    });
  };

  render() {
    const { blogPosts, deletedPost } = this.state;

    console.log('BlogPosts:', blogPosts);

    return (
      <AdminLayout user={this.props.user}>
        <section id="admin-blog">
          <div className="row">
            <div className="col-12 text-right">
              <Link href="/admin/blog/add">
                <button className="submit-btn">新增</button>
              </Link>
            </div>
          </div>

          {blogPosts
            ? blogPosts.map((post, index) => (
                <div className="post row col-12 col-md-10" key={post._id}>
                  {deletedPost && deletedPost._id === post._id ? (
                    <div className="mt-4 col-12 col-md-10">
                      <div className="post-no">Post {index + 1}</div>
                      <hr />
                      <div className="title">
                        <span>名稱</span> {post.title}{' '}
                        <button
                          className="delete-btn"
                          onClick={() => this.handleDelete(post._id)}
                          style={{ float: 'right' }}
                        >
                          刪除
                        </button>
                      </div>
                      <div className="date">
                        <span>日期</span> {post.date}
                      </div>
                      <div className="content-title">
                        <span>內容</span>
                      </div>
                      <div className="content-detail">{post.content}</div>
                    </div>
                  ) : (
                    <Link href={`/admin/blog/edit?id=${post._id}`}>
                      <div className="mt-4 col-12 col-md-10">
                        <div className="post-no">Post {index + 1}</div>
                        <hr />
                        <div className="title">
                          <span>名稱</span> {post.title}{' '}
                          <button
                            className="delete-btn"
                            onClick={(e) => this.handleDelete(e, post._id)}
                            style={{ float: 'right' }}
                          >
                            刪除
                          </button>
                        </div>
                        <div className="date">
                          <span>日期</span> {post.date}
                        </div>
                        <div className="content-title">
                          <span>內容</span>
                        </div>
                        <div className="content-detail">{post.content}</div>
                      </div>
                    </Link>
                  )}
                  <div className="col-12 col-md-2 text-center text-md-left"></div>
                  {deletedPost && deletedPost._id === post._id ? (
                    <div className="col-12 mt-3">
                      <p className="deleted-post-msg">
                        成功刪除了 “{post.title}”
                      </p>
                    </div>
                  ) : null}
                </div>
              ))
            : null}
        </section>
      </AdminLayout>
    );
  }
}

export default withAuthentication(BlogIndex);
