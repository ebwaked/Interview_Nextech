/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */


function AppController(UsersDataService, $mdSidenav, $mdDialog) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.createUser = createUser;
    self.deleteUser = deleteUser;
    self.updateUser = updateUser;
    self.showCreateUserModal = showCreateUserModal;

    // Load all registered users

    UsersDataService
        .loadAllUsers()
        .then(function(users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser(user) {
        self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    function showCreateUserModal(ev) {
        $mdDialog.show({
            controller: CreateUserController,
            templateUrl: 'src/users/components/create/createDialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: self.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };

    function CreateUserController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };

        $scope.create = function(selected) {
            self.createUser(selected);
            $mdDialog.hide();
        };
    }

    // *********************************
    // External methods
    // *********************************

    function createUser(selected) {
        UsersDataService
            .createUser(selected)
            // .then(function() {
            //     self.selected = [].concat(selected);
            // })
            //console.log('selected var in appCtrler ' + selected);
    }

    function deleteUser(id) {
        UsersDataService
            .deleteUser(id)
            // .then(function() {
            //     self.userCreated = [].concat(userCreated);
            // })
        console.log('user ' + id + ' deleted');
    }

    function updateUser(id) {
        UsersDataService
            .updateUser(id)
            // .then(function() {
            //     self.userCreated = [].concat(userCreated);
            // })
        console.log('user ' + id + ' updated');
    }

}

export default ['UsersDataService', '$mdSidenav', '$mdDialog', AppController];