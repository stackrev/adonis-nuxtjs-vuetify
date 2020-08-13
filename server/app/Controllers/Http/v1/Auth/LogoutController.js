'use strict';
const Database = use('Database');

class LogoutController {
  async logout({ request, response, auth }) {
    let user = auth.user;

    if (user) {
      await Database.table('tokens')
        .where('user_id', user.id)
        .delete();
    }

    return {
      data: {
        success: true,
        message: 'خروج با موفقیت انجام شد'
      }
    };
  }
}

module.exports = LogoutController;
