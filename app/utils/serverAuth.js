module.exports = authenticate = async (username, password) => {
  if (username === 'kin' && password === 'test123') {
    return {
      username,
      password,
      success: true
    };
  } else return false;
};
