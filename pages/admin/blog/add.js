import AdminLayout from '../../../components/shared/Layout/AdminLayout';
import AddPostForm from '../../../components/shared/Form/AddPostForm';

import withAuthentication from '../../../components/HOC/withAuthentication';

const AdminBlogAdd = (props) => {
  return (
    <AdminLayout user={props.user}>
      <AddPostForm />
    </AdminLayout>
  );
};

export default withAuthentication(AdminBlogAdd);
