function UserInfoController(userService) {
    this.name = userService.getName();
}
UserInfoController.$inject = ['userService'];

export default UserInfoController;
