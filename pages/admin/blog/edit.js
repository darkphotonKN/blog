import AdminLayout from '../../../components/shared/Layout/AdminLayout';
import EditPostForm from '../../../components/shared/Form/EditPostForm';
import BackButton from '../../../components/shared/MainContent/BackButton';

import withAuthentication from '../../../components/HOC/withAuthentication';

const AdminBlogEdit = (props) => {
  console.log('AdminBlogEdit Props:', props);
  return (
    <AdminLayout user={props.user}>
      <BackButton admin />
      <EditPostForm id={props.query.id} />
    </AdminLayout>
  );
};

export default withAuthentication(AdminBlogEdit);
