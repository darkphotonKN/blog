module.exports = authenticate = async (username, password) => {
  if (username === 'kin' && password === 'test123') {
    console.log('Matched username and password.');
    return {
      username,
      password,
      success: true
    };
  } else return false;
};
