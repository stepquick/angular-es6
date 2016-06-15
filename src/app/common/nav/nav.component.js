import controller from './nav.controller.js';

const NavComponent = {
	controller,
	template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" ng-click="$ctrl.collapsed = !$ctrl.collapsed" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" ui-sref="app.home">Angular JS 1.5</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse" uib-collapse="$ctrl.collapsed">
                    <ul class="nav navbar-nav">
                        <li ui-sref-active="active"><a ui-sref="app.about">About</a></li>
                        <li ui-sref-active="active"><a ui-sref="app.test">Test</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
	bindings: {
		collapsed: '<'
	}
};

export default NavComponent;
