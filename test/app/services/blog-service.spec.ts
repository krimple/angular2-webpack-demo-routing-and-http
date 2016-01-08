import {BlogService} from "../../../src/app/services/blog-service";
import {
  describe,
  expect,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from 'angular2/testing';

import {provide, Injector} from 'angular2/core';
import {HTTP_PROVIDERS, XHRBackend, Response} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {Headers} from 'angular2/http';
import {ResponseOptions, BaseResponseOptions} from 'angular2/http';
import {BlogEntry} from '../../../src/app/domain/blog-entry';

describe('Blog Service', () => {
  let injector, backend, blogService: BlogService,
    options = new BaseResponseOptions();

  beforeEach(() => {
    injector = Injector.resolveAndCreate([
      HTTP_PROVIDERS, provide(XHRBackend, {useClass: MockBackend}),
      BlogService
    ]);

    backend = injector.get(XHRBackend);
    blogService = injector.get(BlogService);
  });

  it('should be defined', () => {
    expect(blogService).toBeDefined();
  });

  it('should fetch blog entries', () => {
    return new Promise((resolve) => {
      backend.connections.subscribe(
        (connection) => {
          connection.mockRespond(new Response(options.merge({
            body: [
              {
                id: 234,
                contentRendered: "<p><b>Hi there</b></p>",
                contentMarkdown: "*Hi there*"
              }]
          })));
      });

      blogService.getBlogs().subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].id).toBe(234);
          expect(data[0].contentMarkdown).toBe('*Hi there*');
        });
    });
  });

  it('should save updates to an existing blog entry', () => {
    backend.connections.subscribe(connection => {
      let data: BlogEntry = new BlogEntry("Blog Entry", "<p><b>Hi</b></p>", "*Hi*", 10);
      connection.mockRespond(new Response(options.merge({ status: 200 })));

      blogService.saveBlog(data).subscribe(
        (successResult) => {
          console.log(successResult);
          expect(successResult.status).toBe(2);
        },
        (errorResult) => {
          throw errorResult;
        });
    });
  });
});
