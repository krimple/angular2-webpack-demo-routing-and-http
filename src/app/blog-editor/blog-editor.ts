import {BlogEntry} from '../domain/blog-entry';
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {BlogService} from '../services/blog-service';


@Component({
  providers: [BlogService],
  template: `
      <b>hi</b>
                    <div class="pure-u-11-24">
                    <h4>Inline Editor</h4>
                    <span *ngIf="blog">
                    <textarea style="width: 100%; height: 5em;" #markdown
                    (change)="render(blog)"
                    [(ngModel)]="blog.contentMarkdown"></textarea>
                    </span>
                </div>
 `
})
export class BlogEditor {
  blog: BlogEntry;

  constructor(params: RouteParams, blogService: BlogService) {
    let id = params.get('id');
    if (!id) {
      this.blog = new BlogEntry('Content', 'Content', 'This is content', 23);
    } else {

      blogService.getBlog(Number.parseInt(id))
      .subscribe((blogEntry: BlogEntry) => {
        console.log('got blog entry ', blogEntry);
        this.blog = blogEntry;
      });
    }
  }
}
