var provider_1 = require("angular2/src/core/di/provider");
var injector_1 = require("angular2/src/core/di/injector");
var blog_service_1 = require("../../../src/app/services/blog-service");
var http_1 = require('angular2/http');
var testing_1 = require('angular2/http/testing');
var testing_2 = require('angular2/testing');
var injector = injector_1.Injector.resolveAndCreate([
    http_1.BaseRequestOptions,
    testing_1.MockBackend,
    provider_1.provide(http_1.Http, { useFactory: function (backend, defaultOptions) {
            return new http_1.Http(backend, defaultOptions);
        },
        deps: [testing_1.MockBackend, http_1.BaseRequestOptions] })
]);
testing_2.xdescribe('Blog Roll', function () {
    var blogRoll;
    var blogs;
    var http = injector.get(http_1.Http);
    testing_2.it('Can be created', function () {
        var blogEntries = [];
        var blogService = new blog_service_1.BlogService(undefined);
    });
});
//# sourceMappingURL=blog-roll.spec.js.map