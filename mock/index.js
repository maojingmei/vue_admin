import Mock from 'mockjs';
import userAPI from './user';
import menuApi from './menu'

// User
Mock.mock(/\/user\/login/, 'post', userAPI.login);
Mock.mock(/\/user\/info/, 'get', userAPI.getInfo);
Mock.mock(/\/user\/logout/, 'post', userAPI.logout);
Mock.mock(/\/menu/,'get',menuApi.getMenu)

export default Mock;