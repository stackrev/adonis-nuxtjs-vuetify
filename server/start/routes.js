'use strict';

const Route = use('Route');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});

/**
 * API Routes V1
 */
require('./routes/index');
