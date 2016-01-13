import {provide} from "angular2/src/core/di/provider";
import {Injector} from "angular2/src/core/di/injector";
import {BlogRoll} from "../../../src/app/blog-roll/blog-roll";
import {BlogEntry} from "../../../src/app/domain/blog-entry";
import {BlogService} from "../../../src/app/services/blog-service";
import {Observable} from 'rxjs/Observable';
import {MarkdownService} from '../../../src/app/services/markdown-service';
import {Router} from 'angular2/router';


class MockBlogService extends BlogService {
  getBlogs(): Observable<any> {
    console.log("&&&&&& GETTING **");
    return Observable.create(function (observer) {
      observer.onNext([
        {id: 1, contentMarkdown: 'abc', contentRendered: 'abc', title: 'demo'}
      ]);
      observer.onComplete();
    });
  }

  saveBlog(blog: BlogEntry): Observable<any> {
    return Observable.create(function (observer) {
      observer.onComplete();
    });
  }
}

class MockMarkdownService extends MarkdownService {
  toHtml(text: string): string {
    return text;
  }
}

class MockRouter extends Router {
  navigate(linkParams: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve('completed');
    });
  }
}

import {
  it,
  xit,
  describe,
  xdescribe,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';
import {Overrides} from 'typings/dist/interfaces/main';
import {MockBackend} from 'angular2/src/http/backends/mock_backend';
import {XHRBackend} from 'angular2/http';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observer} from 'rxjs/Observer';

describe('Blog Roll Component', () => {

  beforeEachProviders(() => {
    return [
      HTTP_PROVIDERS,
      provide(XHRBackend, {useClass: MockBackend}),
      provide(BlogService, {useClass: MockBlogService}),
      provide(MarkdownService, {useClass: MockMarkdownService}),
      provide(Router, {useClass: MockRouter})
    ]
  });

  it('Can be created', injectAsync([BlogService, MarkdownService, Router], (blogService, markdownService, router) => {
      return new Promise((resolve, reject) => {
        spyOn(blogService, 'getBlogs').and.callFake(() => {
          return Observable.create((observer:Observer<any>) => {
            debugger;
            observer.next([
              {id: 1, contentMarkdown: 'abc', contentRendered: 'abc', title: 'demo'}
            ]);
            observer.complete();
          });
        });

        spyOn(markdownService, 'toHtml');
        spyOn(router, 'navigate');
        let blogRoll = new BlogRoll(blogService, markdownService, router);
        expect(blogRoll).toBeDefined();
        expect(blogRoll.blogs).toBeDefined();
        expect(blogRoll.blogs[0]).toEqual({id: 1, contentMarkdown: 'abc', contentRendered: 'abc', title: 'demo'});
        resolve();
      });

    })
  );
});
