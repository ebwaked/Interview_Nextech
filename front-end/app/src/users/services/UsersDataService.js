/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @returns {{createUser: Function}}
 * @constructor
 */

function UsersDataService($q) {
    var users = [{
            id: '1',
            name: 'Juan Jaspe',
            githubHandle: 'jjaspenextech',
            address: '110 Rally Rd.',
            city: 'Tampa',
            state: 'FL',
            zip: '33607'
        },
        {
            id: '2',
            name: 'Brandon Ripley',
            githubHandle: 'bripley-nxtech',
            address: '9112 Lois Ave.',
            city: 'Tampa',
            state: 'FL',
            zip: '33607'
        },
        {
            id: '3',
            name: 'Brad Savon',
            githubHandle: 'bradsavon',
            address: '56113 Henderson Way',
            city: 'Tampa',
            state: 'FL',
            zip: '33607'
        }
    ];

    // Promise-based API
    return {
        loadAllUsers: function() {
            // Simulate async nature of real remote calls
            console.log('User loadAll method called in service!');
            return $q.when(users);
        },

        createUser: function(selected) {
            var obj = new Object();
            obj.Id = '';
            obj.Name = selected.name;
            obj.GithubHandle = selected.githubHandle;
            return $q.when(obj);
        },

        deleteUser: function() {
            // Simulate async nature of real remote calls
            console.log('User delete method called in service!');
            return $q.when(users);
        },

        updateUser: function() {
            // Simulate async nature of real remote calls
            console.log('User update method called in service!');
            return $q.when(users);
        }
    };
}

export default ['$q', UsersDataService];