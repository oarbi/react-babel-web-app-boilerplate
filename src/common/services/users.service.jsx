import constants from '#/common/constants';

const getUser = async () => {
  const data = await fetch(constants.USER_ENDPOINT);
  const user = (await data.json()).results[0];
  return user;
};

export default getUser;
