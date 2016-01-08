import {BlogEntry} from "../domain/blog-entry";
import {Component} from 'angular2/core';
@Component({
    template: `
      <b>hi</b>
                    <div class="pure-u-11-24">
                    <h4>Inline Editor</h4>
                    <textarea style="width: 100%; height: 5em;" #markdown
                    (change)="render(blog)"
                    [(ngModel)]="blog.contentMarkdown"></textarea>
                </div>
 `
})
export class BlogEditor {
  blog: BlogEntry;
  constructor() {
    this.blog = new BlogEntry("Content", "Content", "This is content", 23);
  }
}
