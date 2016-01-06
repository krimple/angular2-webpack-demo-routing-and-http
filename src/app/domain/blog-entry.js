var BlogEntry = (function () {
    function BlogEntry(title, contentRendered, contentMarkdown, id) {
        this.title = title;
        this.contentRendered = contentRendered;
        this.contentMarkdown = contentMarkdown;
        if (id) {
            this.id = id;
        }
    }
    BlogEntry.asBlogEntries = function (jsonArray) {
        return jsonArray.map(function (datum) { return BlogEntry.asBlogEntry(datum); });
    };
    BlogEntry.asBlogEntry = function (json) {
        var id = json['id'];
        var title = json['title'];
        var contentRendered = json['contentRendered'];
        var contentMarkdown = json['contentMarkdown'];
        return new BlogEntry(title, contentRendered, contentMarkdown, id);
    };
    BlogEntry.prototype.json = function () {
        return JSON.stringify(this);
    };
    return BlogEntry;
})();
exports.BlogEntry = BlogEntry;
//# sourceMappingURL=blog-entry.js.map