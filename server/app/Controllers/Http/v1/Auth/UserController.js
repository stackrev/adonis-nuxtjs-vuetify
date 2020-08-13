'use strict';
const Database = use('Database');
let User = use('App/Models/User');

class UserController {
  async user({ request, response, auth }) {
    let user = auth.user;

    return {
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name
      }
    };
  }
}

module.exports = UserController;
