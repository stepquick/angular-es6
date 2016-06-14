class AppController {
    constructor(userService) {
        this.name = userService.getName();
        this.year = new Date().getFullYear();
        this.navCollapsed = true;
    }
}
AppController.$inject = ['userService'];

export default AppController;
