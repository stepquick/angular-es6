class AppController {
    constructor(userService) {
        this.name = userService.getName();
        this.year = new Date().getFullYear();
    }
}
AppController.$inject = ['userService'];

export default AppController;
