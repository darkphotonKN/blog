import ReactPagination from 'react-paginate';

import Layout from '../components/shared/Layout/Layout';
import BlogPost from '../components/shared/MainContent/BlogPost';
// import Pagination from '../components/shared/MainContent/Pagination';

class Index extends React.Component {
  static async getInitialProps() {
    // in list of backend posts
    return {
      blogPosts: [
        {
          id: 1,
          date: '25th June, 2019',

          title: 'How to live in the moment...',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam dolorem quis soluta, ad est repudiandae doloremque expedita deleniti, voluptatum officia alias laudantium ut cupiditate eos sequi consequuntur cumque, excepturi labore. Vel laboriosam quos, voluptate iure recusandae at dicta sed autem quibusdam sint nobis corrupti? Minus voluptates quam qui placeat blanditiis veniam tenetur ipsa distinctio voluptatem, quos eius iusto quas sapiente unde assumenda quidem. Tenetur ut placeat delectus, beatae necessitatibus aspernatur natus. Vitae, dignissimos debitis explicabo ut praesentium expedita veniam?'
        },
        {
          id: 2,
          date: '15th May, 2019',

          title: 'The art of chinese medicine',
          content:
            'eius iusto quas sapiente unde assumenda quidem. Tenetur ut placeat delectus, beatae necessitatibus aspernatur natus. Vitae, dignissimos debitis explicabo ut praesentium expedita veniam?'
        },
        {
          id: 3,
          date: '28th April, 2019',
          title: 'If the west is the best, where is the history of medicine?',
          content:
            'consequuntur cumque, excepturi labore. Vel laboriosam quos, voluptate iure recusandae at dicta sed autem quibusdam sint nobis corrupti? Minus voluptates quam qui placeat blanditiis veniam tenetur ipsa distinctio voluptatem, quos eius iusto quas sapiente unde assumenda quidem. Tenetur ut placeat delectus, beatae necessitatibus aspernatur natus. Vitae, dignissimos debitis explicabo ut praesentium expedita veniam?'
        }
      ]
    };
  }

  render() {
    const { blogPosts } = this.props;
    return (
      <Layout subtitle={'最新文章'} sidebar>
        <div className="blog-post-list">
          {blogPosts
            ? blogPosts.map((blog) => (
                <BlogPost
                  key={blog.id}
                  id={blog.id}
                  date={blog.date}
                  content={blog.content}
                  title={blog.title}
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
