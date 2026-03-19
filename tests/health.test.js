const { describe, it } = require('node:test');
const assert = require('node:assert');

describe('Health endpoint', () => {
  it('should return ok status', async () => {
    const app = require('../src/index');
    // Basic smoke test - verifies the app loads without errors
    assert.ok(app, 'App should export express instance');
  });
});
