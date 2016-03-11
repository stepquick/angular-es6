import './user-info-component.css';

export default {
    bindings: {
        name: '<'
    },
    template: '<span>Hi {{$ctrl.name}}!</span>'
};
