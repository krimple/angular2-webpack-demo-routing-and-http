import {Headers, RequestOptions, Response} from 'angular2/http';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Inject} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {BlogEntry} from '../domain/blog-entry';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
    opts: RequestOptions;
    constructor(private http: Http) {
       var headers: Headers = new Headers();
       headers.append('content-type', 'application/json; charset=utf-8');
       this.opts = new RequestOptions();
       this.opts.headers = headers;
    }

    getBlogs(): Observable<any> {
            return this.http.get('/api/blogs')
                .map((res: Response) => { return BlogEntry.asBlogEntries(res.json()); });
    }
    saveBlog(blog: BlogEntry): Observable<Response> {
        if (blog.id) {
            return this.http.put('/api/blogs/' + blog.id, blog.json(), this.opts);
        } else {
            return this.http.post('/api/blogs', blog.json(), this.opts);
        }
    }

  getBlog(id: number): any {
    return this.http.get('/api/blogs/' + id)
    .map((res: Response) => {
      console.log(res);
      return BlogEntry.asBlogEntry(res.json());
    });
  }

}
