module.exports = function (app, db, helpers) {
  app.post('/api/user/auth', (req, res) => {
    const assert = require('assert');
    
    var uname = req.body.username.toString();
    var upwd = req.body.password.toString();
    var valid = null;
    valid = helpers.auth(uname, upwd);
    if (valid.errors.length == 0) {
      const collection = db.collection('users');
      console.log("uname: " + uname);
      console.log("upwd: " + upwd);

      var myobj = { username: uname, upwd: upwd };
      collection.find(myobj).count(function (err, count) {
        assert.equal(null, err);
        console.log('Auth');
        if (count > 0) {
          res.send({ 'username': uname, 'success': true });
        } else {
          res.send({ 'username': '', 'success': false });
        }

      });
    } else {
      res.send({ 'username': '', 'success': false })
    }
  });
}
