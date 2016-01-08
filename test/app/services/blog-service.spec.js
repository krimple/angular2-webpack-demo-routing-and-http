var blog_service_1 = require("../../../src/app/services/blog-service");
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var testing_2 = require('angular2/http/testing');
var http_2 = require('angular2/http');
var blog_entry_1 = require('../../../src/app/domain/blog-entry');
testing_1.describe('Blog Service', function () {
    var injector, backend, blogService, options = new http_2.BaseResponseOptions();
    beforeEach(function () {
        injector = core_1.Injector.resolveAndCreate([
            http_1.HTTP_PROVIDERS, core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
            blog_service_1.BlogService
        ]);
        backend = injector.get(http_1.XHRBackend);
        blogService = injector.get(blog_service_1.BlogService);
    });
    testing_1.it('should be defined', function () {
        testing_1.expect(blogService).toBeDefined();
    });
    testing_1.it('should fetch blog entries', function () {
        backend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(options.merge({
                body: [
                    {
                        id: 234,
                        contentRendered: "<p><b>Hi there</b></p>",
                        contentMarkdown: "*Hi there*"
                    }]
            })));
        });
        blogService.getBlogs().subscribe(function (data) {
            testing_1.expect(data.length).toBe(1);
        });
    });
    testing_1.it('should save updates to an existing blog entry', function () {
        backend.connections.subscribe(function (connection) {
            var data = new blog_entry_1.BlogEntry("Blog Entry", "<p><b>Hi</b></p>", "*Hi*", 10);
            connection.mockRespond(new http_1.Response(options.merge({ status: 200 })));
            blogService.saveBlog(data).subscribe(function (result) {
                console.log(result);
                testing_1.expect(result.status).toBe(2);
            });
        });
    });
});
//# sourceMappingURL=blog-service.spec.js.map