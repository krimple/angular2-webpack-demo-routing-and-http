import {provide} from "angular2/src/core/di/provider";
import {Injector} from "angular2/src/core/di/injector";
import {BlogRoll} from "../../../src/app/blog-roll/blog-roll";
import {BlogEntry} from "../../../src/app/domain/blog-entry";
import {BlogService} from "../../../src/app/services/blog-service";
import {Observable} from 'rxjs/Observable';

class MockBlogService extends BlogService {

    getBlogs(): Observable<any> {
        return Observable.create(function(observer) {
            observer.onNext([
                    { id: 1, contentMarkdown: 'abc', contentRendered: 'abc', title: 'demo' }
            ]);
            observer.onComplete();
        });
    }

    saveBlog(blog: BlogEntry): Observable<any> {
        return Observable.create(function(observer) {
            observer.onComplete();
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

var injector = Injector.resolveAndCreate([
 provide(Http, {useFactory:
     function(backend, defaultOptions) {
       return new Http(backend, defaultOptions);
     },
     deps: [MockBackend, BaseRequestOptions]})
]);

describe('Blog Roll Component', () => {

    beforeEachProviders(() => {
        [ HTTP_PROVIDERS,
          XHRBackend,
          BlogRoll ]});

  var blogRoll: BlogRoll;
  var blogs: BlogEntry[];
  var http = injector.get(Http);
  it('Can be created', () => {
    var blogEntries: BlogEntry[] = [

    ];
    var blogService:BlogService = new BlogService(undefined);
    //blogRoll = new BlogRoll(blogService: BlogService, markdownService: MarkdownService, router: Router);

  });
});
