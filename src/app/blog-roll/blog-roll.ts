import {Component} from 'angular2/core';
import {Row} from '../bootstrap/containers/row';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {Response} from 'angular2/http';
import {BlogEntry} from '../domain/blog-entry.ts';
import {BlogService} from '../services/blog-service';
import {MarkdownService} from '../services/markdown-service';

@Component({
    bindings: [BlogService, MarkdownService],
    template: `

    <row *ngFor="#blog of blogs">
         <h3>{{ blog.title }}</h3>
         <h4 (click)="editBlogEntry(blog)">Live Preview - Click to open editor...</h4>
         <div style="width: 100%; height: 5em%;"
               [innerHtml]="blog.contentRendered"></div>
    </row>
        `,
    selector: 'blog-roll',
    directives: [CORE_DIRECTIVES, Row]
})
export class BlogRoll {
    blogs: Array<BlogEntry>;
    blogService: BlogService;
    router: Router;
    message: string;
    markdownService: MarkdownService;

    constructor(blogService: BlogService,
                markdownService: MarkdownService,
                router: Router) {
        this.blogService = blogService;
        this.markdownService = markdownService;
        this.loadBlogEntries();
    }

    loadBlogEntries() {
        this.blogService.getBlogs().subscribe(
            (data: Array<BlogEntry>) => {
                console.log('data is', data);
                this.blogs = data;
            },
            (error: Object) => {
                console.log('error!', error);
            }
        );
    }

    render(blog: BlogEntry) {
        if (blog.contentMarkdown) {
            blog.contentRendered = this.markdownService.toHtml(blog.contentMarkdown);
            this.blogService
                .saveBlog(blog)
                .subscribe(
                    () => this.message = 'update complete',
                    (error) => { console.log(error); }
                );
        }
    }

    editBlogEntry(blog: BlogEntry) {
        console.log('saving', blog);
        this.blogService.saveBlog(blog)
            .subscribe(
                (res: Response) => {
                    this.router.navigate(['BlogEditorById', {id: blog.id}]);
                },
                (error: Object) => {
                    console.log('error saving!', error);
                }
            );
    }

    clearMessage() {
        this.message = undefined;
    }
}


