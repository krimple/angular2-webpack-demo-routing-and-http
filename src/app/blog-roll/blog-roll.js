var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var row_1 = require('../bootstrap/containers/row');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var blog_service_1 = require('../services/blog-service');
var markdown_service_1 = require('../services/markdown-service');
var BlogRoll = (function () {
    function BlogRoll(blogService, markdownService, router) {
        this.blogService = blogService;
        this.markdownService = markdownService;
        this.loadBlogEntries();
    }
    BlogRoll.prototype.loadBlogEntries = function () {
        var _this = this;
        this.blogService.getBlogs().subscribe(function (data) {
            console.log('data is', data);
            _this.blogs = data;
        }, function (error) {
            console.log('error!', error);
        });
    };
    BlogRoll.prototype.render = function (blog) {
        var _this = this;
        if (blog.contentMarkdown) {
            blog.contentRendered = this.markdownService.toHtml(blog.contentMarkdown);
            this.blogService
                .saveBlog(blog)
                .subscribe(function () { return _this.message = 'update complete'; }, function (error) { console.log(error); });
        }
    };
    BlogRoll.prototype.editBlogEntry = function (blog) {
        var _this = this;
        console.log('saving', blog);
        this.blogService.saveBlog(blog)
            .subscribe(function (res) {
            _this.router.navigate(['BlogEditorById', { id: blog.id }]);
        }, function (error) {
            console.log('error saving!', error);
        });
    };
    BlogRoll.prototype.clearMessage = function () {
        this.message = undefined;
    };
    BlogRoll = __decorate([
        core_1.Component({
            bindings: [blog_service_1.BlogService, markdown_service_1.MarkdownService],
            template: "\n\n    <row *ngFor=\"#blog of blogs\">\n         <h3>{{ blog.title }}</h3>\n         <h4 (click)=\"editBlogEntry(blog)\">Live Preview - Click to open editor...</h4>\n         <div style=\"width: 100%; height: 5em%;\"\n               [innerHtml]=\"blog.contentRendered\"></div>\n    </row>\n        ",
            selector: 'blog-roll',
            directives: [common_1.CORE_DIRECTIVES, row_1.Row]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, markdown_service_1.MarkdownService, router_1.Router])
    ], BlogRoll);
    return BlogRoll;
})();
exports.BlogRoll = BlogRoll;
//# sourceMappingURL=blog-roll.js.map