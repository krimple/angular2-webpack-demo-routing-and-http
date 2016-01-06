import {Http} from 'angular2/http';
import * as BaseRequestOptions from 'angular2/src/http/base_request_options';
import {MockBackend} from 'angular2/http/testing';
import {
    it,
    describe,
    expect,
    inject
} from 'angular2/testing';

import {beforeEachProviders} from "angular2/testing";
import {Injector} from "angular2/core";
import {provide} from "angular2/core";
import {AsyncTestCompleter} from "angular2/testing_internal";
import {Response} from "angular2/http";
import {BlogService} from "./blog-service";
import {Connection} from "angular2/http";
import {ConnectionBackend} from "angular2/http";
import {MockConnection} from "angular2/src/http/backends/mock_backend";
import {ResponseOptions} from "angular2/http";
import {ResponseType} from "angular2/http";

describe('Blog Service', () => {
    /*var connection, injector = Injector.resolveAndCreate({
     MockBackend,
     provide(Http, { useFactory: (backend, DefaultOptions) => {

     }});
     })

     beforeEachProviders(() => [MockBackend, Http]);

     */
    it('should get some data', inject([AsyncTestCompleter, BlogService], (async: AsyncTestCompleter, blogService: BlogService) => {
        var connection: MockConnection;
        var injector = Injector.resolveAndCreate([
            MockBackend,
            provide(Http, {
                useFactory: (backend, BaseRequestOptions) => {
                    return new Http(backend, new BaseRequestOptions())
                }, deps: [MockBackend, BaseRequestOptions]
            })]);
        var http = injector.get(Http);
        var backend:MockBackend = injector.get(MockBackend);
        //Assign any newly-created connection to local variable
        backend.connections.subscribe(c => connection = c);
        http.request('data.json').subscribe((res) => {
            expect(res.json()).toBe({ a: 'b'});
            async.done();
        });
        let options :ResponseOptions = new ResponseOptions();
        options.body = {a: 'b'};

        connection.mockRespond(new Response(options.merge({
            url: 'data.json'
        })));
    }));

});


