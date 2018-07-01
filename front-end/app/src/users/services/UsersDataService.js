/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
    var users = [{
            name: 'Juan Jaspe',
            githubHandle: 'jjaspenextech'
        },
        {
            name: 'Brandon Ripley',
            githubHandle: 'bripley-nxtech'
        },
        {
            name: 'Brad Savon',
            githubHandle: 'bradsavon'
        }
        // ,
        // {
        //     name: 'Eddie Waked',
        //     githubHandle: 'ebwaked'
        // }
    ];

    // Promise-based API
    return {
        loadAllUsers: function() {
            // Simulate async nature of real remote calls
            console.log('User loadAll method called in service!');
            return $q.when(users);
        },

        createUser: function(selected) {
            // Simulate async nature of real remote calls
            console.log('User create method called in service!');
            console.log('selected info in service ' + selected);
            return $q.when(users);
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