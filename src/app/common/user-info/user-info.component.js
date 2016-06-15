import controller from './user-info.controller';

const userInfoComponent = {
    controller,
    template: '{{$ctrl.name}} <i class="glyphicon glyphicon-info-sign" uib-tooltip="Name is pulled via User Service"></i>'
};

export default userInfoComponent;
