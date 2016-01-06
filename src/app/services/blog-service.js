var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var http_2 = require('angular2/http');
var core_1 = require('angular2/core');
var blog_entry_1 = require('../domain/blog-entry');
require('rxjs/add/operator/map');
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json; charset=utf-8');
        this.opts = new http_1.RequestOptions();
        this.opts.headers = headers;
    }
    BlogService.prototype.getBlogs = function () {
        return this.http.get('/api/blogs')
            .map(function (res) { return blog_entry_1.BlogEntry.asBlogEntries(res.json()); });
    };
    BlogService.prototype.saveBlog = function (blog) {
        if (blog.id) {
            return this.http.put('/api/blogs/' + blog.id, blog.json(), this.opts);
        }
        else {
            return this.http.post('/api/blogs', blog.json(), this.opts);
        }
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_2.Http])
    ], BlogService);
    return BlogService;
})();
exports.BlogService = BlogService;
//# sourceMappingURL=blog-service.js.map