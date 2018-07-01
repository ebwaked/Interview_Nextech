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

// const HTTP = new WeakMap();

// class UsersService {
//     constructor($http) {
//         HTTP.set(this, $http);
//     }

//     getUsers() {
//         return HTTP.get(this).get('/api/activeBooks').then(result => result.data);
//     }

//     getUserByID() {
//         return HTTP.get(this).get('/api/archivedBooks').then(result => result.data);
//     }

//     createUser(userID, isBookRead) {
//         return HTTP.get(this).put(`/api/markRead/${bookId}`, { bookId: bookId, read: isBookRead });
//     }

//     addToArchive(bookId) {
//         return HTTP.get(this).put(`/api/addToArchive/${bookId}`, {});
//     }

//     checkIfBookExists(title) {
//         return HTTP.get(this).get(`/api/bookExists/${title}`).then(result => result.data);
//     }

//     addBook(book) {
//         return HTTP.get(this).post('/api/books', book);
//     }

//     static usersFactory($http) {
//         return new usersService($http);
//     }
// }