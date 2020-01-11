import AdminLayout from '../../../components/shared/Layout/AdminLayout';
import AddPostForm from '../../../components/shared/Form/AddPostForm';

import withAuthentication from '../../../components/HOC/withAuthentication';

const AdminBlogAdd = () => {
  return (
    <AdminLayout>
      <AddPostForm />
    </AdminLayout>
  );
};

export default withAuthentication(AdminBlogAdd);
