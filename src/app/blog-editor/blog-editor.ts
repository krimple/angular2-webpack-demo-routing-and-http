import {BlogEntry} from '../domain/blog-entry';
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {BlogService} from '../services/blog-service';
import {BootstrapRow} from '../bootstrap/containers/bsrow';
import {BootstrapCol} from '../bootstrap/containers/bscol';
import {FORM_DIRECTIVES} from 'angular2/common';
import {MarkdownService} from '../services/markdown-service';
import {Router} from 'angular2/router';


@Component({
  providers: [BlogService, MarkdownService],
  directives: [FORM_DIRECTIVES, BootstrapRow, BootstrapCol],
  template: `
      <bs-row>
        <bs-col>
        <h4>Title</h4>
        <input type="text" #title
          [(ngModel)]="blog.title"><br/>
        <h4>Content (use Markdown)</h4>
        <textarea style="width: 100%; height: 5em;" #markdown
          (change)="render(blog)"
          [(ngModel)]="blog.contentMarkdown"></textarea>
        <h4>Content (preview)</h4>
        <div [innerHtml]="blog.contentRendered"></div>
        </bs-col>
      </bs-row>
      <row>
        <button (click)="saveBlog(blog)">Save</button>
      </row>
 `
})
export class BlogEditor {
  blog: BlogEntry;
  markdownService: MarkdownService;
  blogService: BlogService;
  router: Router;

  constructor(params: RouteParams,
              markdownService: MarkdownService,
              blogService: BlogService,
              router: Router) {
    // hold on to services
    this.markdownService = markdownService;
    this.blogService = blogService;
    this.router = router;

    // create a prototypical entry
    this.blog = new BlogEntry('', '', 'Enter your title', null);
    let id = params.get('id');
    if (id) {
      blogService.getBlog(Number.parseInt(id))
        .subscribe((blogEntry: BlogEntry) => {
          this.blog = blogEntry;
        });
    }
  }

  render(blog: BlogEntry) {
    blog.contentRendered = this.markdownService.toHtml(blog.contentMarkdown);
    console.log('change', blog);
  }

  saveBlog(blog: BlogEntry) {
   this.blogService.saveBlog(blog)
    .subscribe(() => {
      this.router.navigate(['/BlogRoll']);
    });
  }
}
