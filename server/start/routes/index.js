const Route = use('Route');

/** authenticate route module */
Route.group(function() {
  require('./auth.js');
})
  .prefix(`api/auth`)
  .namespace(`v1/Auth`);
// .middleware('throttle:60,1')
