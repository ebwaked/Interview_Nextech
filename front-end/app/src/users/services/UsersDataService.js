/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var users = [
    {
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
      return $q.when(users);
    }
  };
}

export default ['$q', UsersDataService];

