/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */


function AppController(UsersDataService, $mdSidenav, $mdDialog, $http) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.createUser = createUser;
    self.deleteUser = deleteUser;
    self.updateUser = updateUser;
    self.showCreateUserModal = showCreateUserModal;
    self.showDeleteUserModal = showDeleteUserModal;
    self.removeByKey = removeByKey;

    var apiUrl = 'http://localhost:50537/';

    $http.defaults.useXDomain = true;


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

    self.appSelected = null;

    function showDeleteUserModal(ev, appSelected) {
        self.appSelected = appSelected;
        $mdDialog.show({
            controller: CreateUserController,
            templateUrl: 'src/users/components/create/deleteDialog.tmpl.html',
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

        $scope.create = function(selected) {
            self.createUser(selected);
            $mdDialog.hide();
        };

        $scope.delete = function() {
            self.deleteUser();
            $mdDialog.hide();
        };
    };

    // *********************************
    // External methods
    // *********************************

    function createUser(selected) {
        // local data to set the ID locally
        var data = {
            "id": self.users.length + 1,
            "name": selected.name,
            "githubHandle": selected.githubHandle,
            "address": selected.address,
            "city": selected.city,
            "state": selected.state,
            "zip": selected.state
        };
        self.users.push(data);
        var dataForApi = {
            //"Id": null,
            "Name": selected.name,
            "GithubHandle": selected.githubHandle,
            "Address": selected.address,
            "City": selected.city,
            "State": selected.state,
            "Zip": selected.state
        };
        $http.post(
            apiUrl + 'api/Users',
            JSON.stringify(dataForApi), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).success(function(data) {
            self.users = data;
        });
    };

    function deleteUser() {
        var index = self.appSelected.id;
        // UsersDataService
        //     .deleteUser(index);
        self.removeByKey(self.users, {
            key: 'id',
            value: index
        });
        $http.post(
            apiUrl + 'api/Users/index',
            JSON.stringify(index), {
                headers: {
                    'Accept': 'application/json'
                }
            }
        ).success(function(data) {
            self.users = data;
        });
        console.log('user ' + index + ' deleted');
    };

    function removeByKey(array, params) {
        array.some(function(item, index) {
            if (array[index][params.key] === params.value) {
                // found it!
                array.splice(index, 1);
                return true; // stops the loop
            }
            return false;
        });
        return array;
    }

    function updateUser(id) {
        // UsersDataService
        //     .updateUser(id)
        var data = {
            "id": self.users.length + 1,
            "name": selected.name,
            "githubHandle": selected.githubHandle,
            "address": selected.address,
            "city": selected.city,
            "state": selected.state,
            "zip": selected.state
        };
        self.users.push(data);
        $http.post(
            apiUrl + 'api/Users/index',
            JSON.stringify(index), {
                headers: {
                    'Accept': 'application/json'
                }
            }
        ).success(function(data) {
            self.users = data;
        });
        console.log('user ' + id + ' updated');
    };

}

export default ['UsersDataService', '$mdSidenav', '$mdDialog', '$http', AppController];