var assert = require('assert');
const express = require('express');
const app = express();
const helpers = require('../includes/helpers.js');

describe('Always true test', function () {
  it('should always equal true 1=1', function () {
    assert.equal(1, 1);
  });
});


//Register User
describe('Register User Function - Missing data param 1', function () {
  it('null, "a", "a", "a" - should have one error message', function () {
    assert.equal(helpers.register(null, "a", "a", "a").errors.length, 1);
  });
  it('Error Message is - Name is not defined', function () {
    assert.equal(helpers.register(null, "a", "a", "a").errors[0], 'Name is not defined');
  });
});

describe('Register User Function - Missing data param 2', function () {
  it('"a", null , "a", "a" - should have one error message', function () {
    assert.equal(helpers.register("a", null , "a", "a").errors.length, 1);
  });
  it('Error Message is - Password is not defined', function () {
    assert.equal(helpers.register("a", null, "a", "a").errors[0], 'Password is not defined');
  });
});

describe('Register User Function - Missing data param 3', function () {
  it('"a", "a", null, "a" - should have one error message', function () {
    assert.equal(helpers.register("a", "a", null, "a").errors.length, 1);
  });
  it('Error Message is - Email is not defined', function () {
    assert.equal(helpers.register("a", "a", null, "a").errors[0], 'Email is not defined');
  });
});

describe('Register User Function - Missing data param 4', function () {
  it('"a", "a", "a", null - should have one error message', function () {
    assert.equal(helpers.register("a", "a", "a", null).errors.length, 1);
  });
  it('Error Message is - Role is not defined', function () {
    assert.equal(helpers.register("a", "a", "a", null).errors[0], 'Role is not defined');
  });
});

describe('Register User Function - Missing all params', function () {
  it('null, null, null ,null - should have four error message', function () {
    assert.equal(helpers.register(null, null, null ,null).errors.length, 4);
  });
});

// Delete user
describe('Delete User Function - Missing data param 1', function () {
  it('null - should have one error message', function () {
    assert.equal(helpers.delete(null).errors.length, 1);
  });
  it('Error Message is - Name is not defined', function () {
    assert.equal(helpers.delete(null).errors[0], 'Name is not defined');
  });
});

describe('Delete User Function - Missing all params', function () {
  it('null - should have one error message', function () {
    assert.equal(helpers.delete(null).errors.length, 1);
  });
});

//Auth User
describe('Auth User Function - Missing data param 1', function () {
  it('null, "a" - should have one error message', function () {
    assert.equal(helpers.auth(null, "a").errors.length, 1);
  });
  it('Error Message is - Name is not defined', function () {
    assert.equal(helpers.auth(null, "a").errors[0], 'Name is not defined');
  });
});

describe('Auth User Function - Missing data param 2', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.auth("a", null).errors.length, 1);
  });
  it('Error Message is - Password is not defined', function () {
    assert.equal(helpers.auth("a", null).errors[0], 'Password is not defined');
  });
});

describe('Auth User Function - Missing all params', function () {
  it('null, null - should have two error message', function () {
    assert.equal(helpers.auth(null, null).errors.length, 2);
  });
});

// Create Group
describe('Create Group Function - Missing data param 1', function () {
  it('null - should have one error message', function () {
    assert.equal(helpers.createGroup(null).errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.createGroup(null).errors[0], 'Group Name is not defined');
  });
});

// Delete Group
describe('Delete Group Function - Missing data param 1', function () {
  it('null - should have one error message', function () {
    assert.equal(helpers.deleteGroup(null).errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.deleteGroup(null).errors[0], 'Group Name is not defined');
  });
});


// Add User to Group
describe('Add user to Group Function - Missing data param 1', function () {
  it('null, "a" - should have one error message', function () {
    assert.equal(helpers.addUserToGroup(null, "a").errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.addUserToGroup(null, "a").errors[0], 'Group Name is not defined');
  });
});

describe('Add user to Group Function - Missing data param 2', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.addUserToGroup("a", null).errors.length, 1);
  });
  it('Error Message is - Username is not defined', function () {
    assert.equal(helpers.addUserToGroup("a", null).errors[0], 'Username is not defined');
  });
});

describe('Add user to Group Function - Missing all params', function () {
  it('null, null - should have two error message', function () {
    assert.equal(helpers.addUserToGroup(null, null).errors.length, 2);
  });
});

// Delete User from Group
describe('Delete User from Group Function - Missing data param 1', function () {
  it('null, "a" - should have one error message', function () {
    assert.equal(helpers.deleteUserFromGroup(null, "a").errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.deleteUserFromGroup(null, "a").errors[0], 'Group Name is not defined');
  });
});

describe('Delete User from Group Function - Missing data param 2', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.deleteUserFromGroup("a", null).errors.length, 1);
  });
  it('Error Message is - Username is not defined', function () {
    assert.equal(helpers.deleteUserFromGroup("a", null).errors[0], 'Username is not defined');
  });
});

describe('Delete User from Group Function - Missing all params', function () {
  it('null, null, null - should have two error message', function () {
    assert.equal(helpers.deleteUserFromGroup(null, null).errors.length, 2);
  });
});

// Create Channel
describe('Create Channel Function - Missing data param 1', function () {
  it('null, "a" - should have one error message', function () {
    assert.equal(helpers.createChannel(null, "a").errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.createChannel(null, "a").errors[0], 'Group Name is not defined');
  });
});

describe('Create Channel Function - Missing data param 2', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.createChannel("a", null).errors.length, 1);
  });
  it('Error Message is - Channel Name is not defined', function () {
    assert.equal(helpers.createChannel("a", null).errors[0], 'Channel Name is not defined');
  });
});

describe('Create Channel Function - Missing all params', function () {
  it('null, null - should have two error message', function () {
    assert.equal(helpers.createChannel(null, null).errors.length, 2);
  });
});
// Delete Channel
describe('Delete Channel Function - Missing data param 1', function () {
  it('null, "a" - should have one error message', function () {
    assert.equal(helpers.deleteChannel(null, "a").errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.deleteChannel(null, "a").errors[0], 'Group Name is not defined');
  });
});

describe('Delete Channel Function - Missing data param 2', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.deleteChannel("a", null).errors.length, 1);
  });
  it('Error Message is - Channel Name is not defined', function () {
    assert.equal(helpers.deleteChannel("a", null).errors[0], 'Channel Name is not defined');
  });
});

describe('Delete Channel Function - Missing all params', function () {
  it('null, null - should have two error message', function () {
    assert.equal(helpers.deleteChannel(null, null).errors.length, 2);
  });
});

// Add User To Channel
describe('Add User To Channel Function - Missing data param 1', function () {
  it('null, "a" - should have one error message', function () {
    assert.equal(helpers.addUserToChannel(null, "a", "a").errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.addUserToChannel(null, "a", "a").errors[0], 'Group Name is not defined');
  });
});

describe('Add User To Channel Function - Missing data param 2', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.addUserToChannel("a", null, "a").errors.length, 1);
  });
  it('Error Message is - Channel Name is not defined', function () {
    assert.equal(helpers.addUserToChannel("a", null, "a").errors[0], 'Channel Name is not defined');
  });
});

describe('Add User To Channel Function - Missing data param 3', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.addUserToChannel("a", "a", null).errors.length, 1);
  });
  it('Error Message is - Username is not defined', function () {
    assert.equal(helpers.addUserToChannel("a", "a", null).errors[0], 'Username is not defined');
  });
});

describe('Add User To Channel Function - Missing all params', function () {
  it('null, null, null - should have three error message', function () {
    assert.equal(helpers.addUserToChannel(null, null, null).errors.length, 3);
  });
});
// Delete User From Channel
describe('Delete User From Channel Function - Missing data param 1', function () {
  it('null, "a" - should have one error message', function () {
    assert.equal(helpers.deleteUserFromChannel(null, "a", "a").errors.length, 1);
  });
  it('Error Message is - Group Name is not defined', function () {
    assert.equal(helpers.deleteUserFromChannel(null, "a", "a").errors[0], 'Group Name is not defined');
  });
});

describe('Delete User From Channel Function - Missing data param 2', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.deleteUserFromChannel("a", null, "a").errors.length, 1);
  });
  it('Error Message is - Channel Name is not defined', function () {
    assert.equal(helpers.deleteUserFromChannel("a", null, "a").errors[0], 'Channel Name is not defined');
  });
});

describe('Delete User From Channel Function - Missing data param 3', function () {
  it('"a", null - should have one error message', function () {
    assert.equal(helpers.deleteUserFromChannel("a", "a", null).errors.length, 1);
  });
  it('Error Message is - Username is not defined', function () {
    assert.equal(helpers.deleteUserFromChannel("a", "a", null).errors[0], 'Username is not defined');
  });
});

describe('Delete User From Channel Function - Missing all params', function () {
  it('null, null, null - should have three error message', function () {
    assert.equal(helpers.deleteUserFromChannel(null, null, null).errors.length, 3);
  });
});
