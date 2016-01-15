import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {Response} from 'angular2/http';
import {BlogEntry} from '../domain/blog-entry.ts';
import {BlogService} from '../services/blog-service';
import {MarkdownService} from '../services/markdown-service';
import {BootstrapCol} from '../bootstrap/containers/bscol';
import {BootstrapRow} from '../bootstrap/containers/bsrow';

@Component({
    bindings: [BlogService, MarkdownService],
    template: `
    <bs-row *ngFor="#blog of blogs">
         <h3>{{ blog.title }}</h3>
         <bs-col class="col-6"
               [innerHtml]="blog.contentRendered"></bs-col>
        <bs-col class="col-3"><button (click)="editBlogEntry(blog)">Edit</button></bs-col>
    </bs-row>
    `,
    selector: 'blog-roll',
    directives: [CORE_DIRECTIVES, BootstrapRow, BootstrapCol]
})
export class BlogRoll {
    blogs: Array<BlogEntry>;
    router: Router;
    message: string;
    markdownService: MarkdownService;

    constructor(private blogService: BlogService,
                markdownService: MarkdownService,
                router: Router) {
        console.log('***** Initializing BlogRoll component ********');
        this.markdownService = markdownService;
        this.router = router;
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
                    this.router.navigate(['BlogEditorById', { id: blog.id.toString() }]);
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
