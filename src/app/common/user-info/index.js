import UserInfoComponent from './user-info.component';

const userInfo = angular
	.module('main.app.common.userInfo', [])
	.component('userInfo', UserInfoComponent)
	.name;

export default userInfo;
