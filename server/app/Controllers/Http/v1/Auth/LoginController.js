'use strict';
const Database = use('Database');
let User = use('App/Models/User');

class LoginController {
  async login({ request, response, auth }) {
    const { username, password } = request.all();
    console.log(username);

    let user = await User.findBy({ username });

    if (user) {
      await Database.table('tokens')
        .where('user_id', user.id)
        .delete();
    }

    let tokens = await auth.withRefreshToken().attempt(username, password);

    return {
      token: tokens.token
    };
  }
}

module.exports = LoginController;
