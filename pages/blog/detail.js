import Layout from '../../components/shared/Layout/Layout';
import BlogPostFull from '../../components/shared/MainContent/BlogPostFull';

export default class BlogDetail extends React.Component {
  static async getInitialProps(context) {
    const { id } = context.query;

    // call api here
    const blogPosts = [
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
    ];

    const blogPost = blogPosts.find((blog) => blog.id === Number(id));

    return {
      id,
      blogPost: blogPost
    };
  }

  render() {
    const { id, blogPost } = this.props;

    console.log('ID:', id);
    console.log(blogPost);
    return (
      <Layout>
        <div className="blog-detail">
          {blogPost ? (
            <BlogPostFull
              content={blogPost.content}
              title={blogPost.title}
              date={blogPost.date}
            />
          ) : (
            <BlogPostFull noContent />
          )}
        </div>
      </Layout>
    );
  }
}
