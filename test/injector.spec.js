var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
describe('default test injector', function () {
    testing_1.it('should provide default id', testing_1.inject([core_1.APP_ID], function (id) {
        expect(id).toBe('a');
    }));
});
//# sourceMappingURL=injector.spec.js.map