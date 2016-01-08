import {provide} from "angular2/src/core/di/provider";
import {Response} from "angular2/src/http/static_response";
import {Injector} from "angular2/src/core/di/injector";
import {BlogRoll} from "../../../src/app/blog-roll/blog-roll";
import {BlogEntry} from "../../../src/app/domain/blog-entry";
import {BlogService} from "../../../src/app/services/blog-service";
import {MockXHR} from "angular2/testing";
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
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
 BaseRequestOptions,
 MockBackend,
 provide(Http, {useFactory:
     function(backend, defaultOptions) {
       return new Http(backend, defaultOptions);
     },
     deps: [MockBackend, BaseRequestOptions]})
]);

xdescribe('Blog Roll', () => {
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
