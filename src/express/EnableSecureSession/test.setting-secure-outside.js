'use strict';

module.exports = function(app, session) {
  var sess1 = {
    cookie: {
      httpOnly: true,
      secure: false,
      domain: 'codiscope.com',
      path: '/set-outside'
    }
  };

  sess1.cookie.secure = false;
};

