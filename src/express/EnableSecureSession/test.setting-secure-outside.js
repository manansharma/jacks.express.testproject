'use strict';

module.exports = function(app, session) {
  app.use(session({
  secret:"s3Cur3",
  key: "sessionId",
  cookie: {
      httpOnly: true,
      secure: false,
    domain: '.example.com',
    path: '/admin'
  }
}));

session.cookie.secure = false;

res.session.cookie.secure = false;
};

