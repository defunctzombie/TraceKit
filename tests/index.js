var assert = require('assert');
var TraceKit = require('../');

test('should report', function(done) {
    // for delayed timeout on IE
    this.timeout(4000);

    TraceKit.report.subscribe(function(err_report) {
        assert.equal(err_report.message, 'foobar');
        assert(err_report.stack.length >= 0);
        done();
    });

    // report will rethrow so we need to avoid that
    try {
        var err = new Error('foobar');
        TraceKit.report(err);
    } catch(err) {}
});

