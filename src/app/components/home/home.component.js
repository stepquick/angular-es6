import controller from './home.controller';
import template from './home.tpl.html';

const HomeComponent = {
    controller,
    template,
    bindings: {
		name: '<'
	}
};

export default HomeComponent;
