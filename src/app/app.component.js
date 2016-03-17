export default class AppComponent {
    constructor(userService) {
        this.name = userService.getName();
        this.year = new Date().getFullYear();
        this.navCollapsed = true;
    }
}
