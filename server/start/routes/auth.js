const Route = use('Route');
const as = 'auth';

Route.post('login', 'LoginController.login').as(`${as}.login`);
//   .validator([`${namespace}/Code`]);

Route.get('user', 'UserController.user')
  .as(`${as}.user`)
  .middleware(['auth']);

Route.get('logout', 'LogoutController.logout')
  .as(`${as}.logout`)
  .middleware(['auth']);
