
import {BlogService} from "../../../src/app/services/blog-service";
import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from 'angular2/testing';
import {Headers, HTTP_PROVIDERS, BaseRequestOptions, XHRBackend, Response} from 'angular2/http';

import {provide} from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';
import {BlogEntry} from '../../../src/app/domain/blog-entry';
import {MockConnection} from 'angular2/src/http/backends/mock_backend';
import {ResponseOptions} from 'angular2/http';
import {Injector} from 'angular2/core';

describe('Blog Service', () => {

  // All heed this block - it is required so that the test injector
  // is properly set up. Without doing this, you won't get the
  // fake backend injected into Http.

  // Also, you need to inject MockBackend as a provider before you wire
  // it to replace XHRBackend with the provide function!  So this is all
  // extremely important to set up right.
  beforeEachProviders(() => {
    return [
      HTTP_PROVIDERS,
      provide(XHRBackend, {useClass: MockBackend}),
      BlogService
    ];
  });


  it('should get blogs', inject([XHRBackend, BlogService], (mockBackend, blogService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: [
                {
                  id: 26,
                  contentRendered: "<p><b>Hi there</b></p>",
                  contentMarkdown: "*Hi there*"
                }]
            }
          )));
      });

    blogService.getBlogs().subscribe((blogs: BlogEntry[]) => {
      expect(blogs.length).toBe(1);
      expect(blogs[0].id).toBe(26);
    });

  }));



  it('should get blogs async', injectAsync([XHRBackend, BlogService], (mockBackend, blogService) => {
    return new Promise((pass, fail) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    id: 26,
                    contentRendered: "<p><b>Hi there</b></p>",
                    contentMarkdown: "*Hi there*"
                  }]
              }
            )));
        });

      blogService.getBlogs().subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].id).toBe(26);
          expect(data[0].contentMarkdown).toBe('*Hi there*');
        });
    });
  }), 3000);

  it('should save updates to an existing blog entry',
    injectAsync([XHRBackend, BlogService], (mockBackend, blogService) => {
    return new Promise((resolve, reject) => {
      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new ResponseOptions({status: 200}));
      });

      let data: BlogEntry = new BlogEntry("Blog Entry", "<p><b>Hi</b></p>", "*Hi*", 10);
      blogService.saveBlog(data).subscribe(
        (successResult) => {
          expect(successResult).toBeDefined(  );
          expect(successResult.status).toBe(200);
        });
    });
  }), 300);
});
