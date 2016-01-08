var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var blog_entry_1 = require("../domain/blog-entry");
var core_1 = require('angular2/core');
var BlogEditor = (function () {
    function BlogEditor() {
        this.blog = new blog_entry_1.BlogEntry("Content", "Content", "This is content", 23);
    }
    BlogEditor = __decorate([
        core_1.Component({
            template: "\n      <b>hi</b>\n                    <div class=\"pure-u-11-24\">\n                    <h4>Inline Editor</h4>\n                    <textarea style=\"width: 100%; height: 5em;\" #markdown\n                    (change)=\"render(blog)\"\n                    [(ngModel)]=\"blog.contentMarkdown\"></textarea>\n                </div>\n "
        }), 
        __metadata('design:paramtypes', [])
    ], BlogEditor);
    return BlogEditor;
})();
exports.BlogEditor = BlogEditor;
//# sourceMappingURL=blog-editor.js.map