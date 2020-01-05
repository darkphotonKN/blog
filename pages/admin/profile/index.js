import { useState, useEffect } from 'react';

import AdminLayout from '../../../components/shared/Layout/AdminLayout';

import withAuthentication from '../../../components/HOC/withAuthentication';
import { getUserProfile } from '../../../utils/auth';
import { fetchData } from '../../../api/helper';

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    async function getData() {
      const profileData = await fetchData('/api/posts');
      setProfileData(profileData);
    }

    getData();
  }, []);

  console.log('User Data:', user);
  console.log('Profile Data:', profileData);

  return (
    <AdminLayout user={user}>
      <p>This is my Profile</p>
    </AdminLayout>
  );
};

export default withAuthentication(Profile);
