const assert = require('assert');
const app = require('../../src/app');

describe('\'luxun\' service', () => {
  it('registered the service', () => {
    const service = app.service('luxun');

    assert.ok(service, 'Registered the service');
  });
});
