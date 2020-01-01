import { useState, useEffect } from 'react';

import AdminLayout from '../../../components/shared/Layout/AdminLayout';

import withAuthentication from '../../../components/HOC/withAuthentication';
import { getUserProfile } from '../../../utils/auth';

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    let data = {};
  }, []);

  console.log('Profile Data:', user);

  return (
    <AdminLayout user={user}>
      <p>This is my Profile</p>
    </AdminLayout>
  );
};

export default withAuthentication(Profile);
